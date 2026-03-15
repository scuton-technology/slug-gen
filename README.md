# @scuton/slug-gen

URL-safe slug generator with comprehensive Unicode support. Zero dependencies.

## Install

```bash
npm install @scuton/slug-gen
```

## Usage

```typescript
import { slug } from '@scuton/slug-gen';

slug('Hello World');           // 'hello-world'
slug('Türkçe Karakterler');    // 'turkce-karakterler'
slug('Привет мир');            // 'privet-mir'
slug('café résumé');           // 'cafe-resume'
slug('Über Straße');           // 'ueber-strasse'
slug('Əli Həsənov');           // 'eli-hesenov'
slug('Tom & Jerry');           // 'tom-and-jerry'
```

## Supported Languages

| Language | Characters | Example |
|---|---|---|
| Turkish | ç, ğ, ı, İ, ö, ş, ü | `Çığırtkan` → `cigirtkan` |
| Azerbaijani | ə, Ə | `Əli` → `eli` |
| Russian (Cyrillic) | а-я, А-Я | `Привет` → `privet` |
| German | ä, ö, ü, ß | `Straße` → `strasse` |
| French | à, â, é, è, ê, ë, î, ô, ù, û | `café` → `cafe` |
| Spanish | ñ, á, é, í, ó, ú | `señor` → `senor` |
| Polish | ą, ć, ę, ł, ń, ź, ż | `łódź` → `lodz` |
| Czech/Slovak | ď, ě, ň, ř, ť, ů, ž | `řeka` → `reka` |

## API

### `slug(input: string, options?: SlugOptions): string`

Converts a string into a URL-safe slug.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `separator` | `string` | `'-'` | Character used to replace spaces |
| `fallback` | `string` | `''` | Value returned when the result is empty |
| `lowercase` | `boolean` | `true` | Convert output to lowercase |
| `maxLength` | `number` | `undefined` | Truncate slug to this length (trims trailing separator) |

### Examples

```typescript
// Custom separator
slug('file_name.txt', { separator: '_' });  // 'file_name_txt'

// Fallback for empty input
slug('', { fallback: 'untitled' });  // 'untitled'

// Preserve case
slug('Hello World', { lowercase: false });  // 'Hello-World'

// Max length
slug('A very long title', { maxLength: 10 });  // 'a-very'
```

## License

MIT - Scuton Technology
