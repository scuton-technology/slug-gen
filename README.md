<div align="center">
  <br>
  <h1>slug-gen</h1>
  <p><strong>URL-safe slug generator with full Unicode support</strong></p>
  <br>
  <p>
    <a href="https://www.npmjs.com/package/@scuton/slug-gen"><img src="https://img.shields.io/npm/v/@scuton/slug-gen?color=2563eb&label=npm" alt="npm"></a>
    <a href="https://www.npmjs.com/package/@scuton/slug-gen"><img src="https://img.shields.io/npm/dm/@scuton/slug-gen?color=gray&label=downloads" alt="downloads"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/types-TypeScript-3178c6" alt="typescript"></a>
  </p>
  <br>
</div>

> URL-safe slug generator with full Unicode support. Works with Turkish, Arabic, Cyrillic, and more.

## Highlights

- ✅ Unicode transliteration — 30+ languages built-in
- ✅ Turkish support — `ç`, `ğ`, `ı`, `İ`, `ö`, `ş`, `ü`, `ə`
- ✅ Cyrillic support — Russian, Ukrainian, Bulgarian
- ✅ Symbol mapping — `&` → `and`, `@` → `at`, `€` → `euro`
- ✅ Custom separator, fallback, and max length
- ✅ Zero dependencies

## Install

```sh
npm install @scuton/slug-gen
```

## Usage

```typescript
import { slug } from '@scuton/slug-gen';

// English
slug('Hello World');                  // 'hello-world'

// Turkish
slug('Türkçe Karakterler');           // 'turkce-karakterler'
slug('İstanbul Üniversitesi');        // 'istanbul-universitesi'

// Azerbaijani
slug('Əli Həsənov');                  // 'eli-hesenov'

// Russian
slug('Привет мир');                   // 'privet-mir'

// German
slug('Über Straße');                  // 'ueber-strasse'

// French
slug('café résumé');                  // 'cafe-resume'

// Symbols
slug('Tom & Jerry');                  // 'tom-and-jerry'
slug('price: 10€');                   // 'price-10euro'
```

### Real-world examples

```typescript
// Blog post URL
const title = 'Türkiye\'de Yapay Zeka Gelişmeleri — 2026';
const url = `/blog/${slug(title)}`;
// /blog/turkiyede-yapay-zeka-gelismeleri-2026

// Filename sanitization
slug('report (final).pdf', { separator: '_' });
// 'report_final_pdf'

// Fallback for empty input
slug('   ', { fallback: 'untitled' });
// 'untitled'

// Truncate long slugs
slug('This is a very long blog post title that needs truncation', { maxLength: 30 });
// 'this-is-a-very-long-blog-post'
```

## API

### slug(input, options?)

Convert a string into a URL-safe slug.

Returns: `string`

#### input

Type: `string`

The string to slugify.

#### options

Type: `object`

##### options.separator

Type: `string`\
Default: `'-'`

Character used to replace spaces and special characters.

##### options.fallback

Type: `string`\
Default: `''`

Value returned when the result is empty (e.g., input was all special characters).

##### options.lowercase

Type: `boolean`\
Default: `true`

Convert the slug to lowercase.

##### options.maxLength

Type: `number`

Maximum slug length. Trims trailing separator if truncation lands on one.

## Supported Languages

| Language | Characters | Example |
|----------|-----------|---------|
| Turkish | ç, ğ, ı, İ, ö, ş, ü | `Çığırtkan` → `cigirtkan` |
| Azerbaijani | ə, Ə | `Əli` → `eli` |
| Russian | а–я, А–Я | `Привет` → `privet` |
| German | ä, ö, ü, ß | `Straße` → `strasse` |
| French | à, â, é, è, ê, ë, î, ô, ù | `café` → `cafe` |
| Spanish | ñ, á, é, í, ó, ú | `señor` → `senor` |
| Polish | ą, ć, ę, ł, ń, ź, ż | `łódź` → `lodz` |
| Czech/Slovak | ď, ě, ň, ř, ť, ů, ž | `řeka` → `reka` |

## FAQ

### Why not `slugify` or `limax`?

They work well but pull in external transliteration packages. `slug-gen` has all transliteration maps built-in — one file, zero dependencies, and full support for Turkish/Azerbaijani characters that other packages often miss.

### What happens with CJK characters?

CJK characters (Chinese, Japanese, Korean) that aren't in the transliteration map are dropped. For CJK-heavy content, consider using the characters as-is in URLs (most modern browsers handle them).

## Related

- [@scuton/safe-json](https://github.com/scuton-technology/safe-json) — JSON.parse that never throws

## License

MIT © [Scuton Technology](https://scuton.com)
