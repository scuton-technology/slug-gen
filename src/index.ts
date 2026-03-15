const CHAR_MAP: Record<string, string> = {
  // Turkish
  'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ı': 'i', 'İ': 'i',
  'ö': 'o', 'Ö': 'o', 'ş': 's', 'Ş': 's', 'ü': 'u', 'Ü': 'u',
  // German
  'ä': 'ae', 'Ä': 'ae', 'ß': 'ss',
  // French/Spanish/Portuguese
  'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'å': 'a',
  'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
  'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
  'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o',
  'ù': 'u', 'ú': 'u', 'û': 'u',
  'ñ': 'n', 'Ñ': 'n',
  'ý': 'y', 'ÿ': 'y',
  // Cyrillic
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
  'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k',
  'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
  'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
  'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '',
  'э': 'e', 'ю': 'yu', 'я': 'ya',
  'А': 'a', 'Б': 'b', 'В': 'v', 'Г': 'g', 'Д': 'd', 'Е': 'e',
  'Ё': 'yo', 'Ж': 'zh', 'З': 'z', 'И': 'i', 'Й': 'y', 'К': 'k',
  'Л': 'l', 'М': 'm', 'Н': 'n', 'О': 'o', 'П': 'p', 'Р': 'r',
  'С': 's', 'Т': 't', 'У': 'u', 'Ф': 'f', 'Х': 'kh', 'Ц': 'ts',
  'Ч': 'ch', 'Ш': 'sh', 'Щ': 'shch', 'Ъ': '', 'Ы': 'y', 'Ь': '',
  'Э': 'e', 'Ю': 'yu', 'Я': 'ya',
  // Polish
  'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ź': 'z', 'ż': 'z',
  'Ą': 'a', 'Ć': 'c', 'Ę': 'e', 'Ł': 'l', 'Ń': 'n', 'Ź': 'z', 'Ż': 'z',
  // Czech/Slovak
  'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'ť': 't', 'ů': 'u', 'ž': 'z',
  'Ď': 'd', 'Ě': 'e', 'Ň': 'n', 'Ř': 'r', 'Ť': 't', 'Ů': 'u', 'Ž': 'z',
  // Azerbaijani extras
  'ə': 'e', 'Ə': 'e',
  // Symbols
  '&': 'and', '@': 'at', '€': 'euro', '£': 'pound', '$': 'dollar',
};

export interface SlugOptions {
  separator?: string;
  fallback?: string;
  lowercase?: boolean;
  maxLength?: number;
}

export function slug(input: string, options?: SlugOptions): string {
  const {
    separator = '-',
    fallback = '',
    lowercase = true,
    maxLength,
  } = options ?? {};

  let result = '';
  for (const char of input) {
    if (CHAR_MAP[char] !== undefined) {
      result += CHAR_MAP[char];
    } else if (/[a-zA-Z0-9]/.test(char)) {
      result += char;
    } else if (/\s|_|-|\./.test(char)) {
      result += ' ';
    } else {
      // Try to keep any remaining ASCII-safe chars, skip others
      const code = char.charCodeAt(0);
      if (code < 128) {
        result += ' ';
      }
      // Non-ASCII chars not in map are dropped
    }
  }

  // Normalize whitespace
  result = result.trim().replace(/\s+/g, separator);

  if (lowercase) {
    result = result.toLowerCase();
  }

  if (maxLength && result.length > maxLength) {
    result = result.substring(0, maxLength).replace(new RegExp(`${escapeRegex(separator)}$`), '');
  }

  return result || fallback;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
