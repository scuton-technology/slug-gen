<div align="center">

# slug-gen

**URL-safe slug generator with Unicode support. Turkish, Arabic, Cyrillic, CJK.**

[![npm](https://img.shields.io/npm/v/@scuton/slug-gen?style=flat-square)](https://www.npmjs.com/package/@scuton/slug-gen)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](package.json)

</div>

---

## Install

```bash
npm install @scuton/slug-gen
```

## Usage

```typescript
import { slug } from '@scuton/slug-gen';

slug('Hello World');            // 'hello-world'
slug('Türkçe Karakterler');     // 'turkce-karakterler'
slug('Привет мир');             // 'privet-mir'
slug('café résumé');            // 'cafe-resume'
slug('Über Straße');            // 'ueber-strasse'
slug('Əli Həsənov');            // 'eli-hesenov'
slug('Tom & Jerry');            // 'tom-and-jerry'

slug('file.txt', { separator: '_' });       // 'file_txt'
slug('', { fallback: 'untitled' });         // 'untitled'
slug('Hello', { lowercase: false });        // 'Hello'
slug('Long title here', { maxLength: 10 }); // 'long-title'
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `separator` | `string` | `'-'` | Separator character |
| `fallback` | `string` | `''` | Fallback for empty result |
| `lowercase` | `boolean` | `true` | Convert to lowercase |
| `maxLength` | `number` | — | Max slug length |

## Supported Languages

Turkish, Azerbaijani, Russian, German, French, Spanish, Polish, Czech/Slovak, and common symbols (`&` `@` `$` `€` `£`).

## License

MIT — [Scuton Technology](https://scuton.com)
