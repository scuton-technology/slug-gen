import { describe, it, expect } from 'vitest';
import { slug } from '../src/index';

describe('slug', () => {
  it('should slugify basic English text', () => {
    expect(slug('Hello World')).toBe('hello-world');
  });

  it('should handle Turkish characters', () => {
    expect(slug('Türkçe Karakterler')).toBe('turkce-karakterler');
    expect(slug('Çığırtkan Şırıldak')).toBe('cigirtkan-sirildak');
    expect(slug('İstanbul Üniversitesi')).toBe('istanbul-universitesi');
  });

  it('should handle Cyrillic characters', () => {
    expect(slug('Привет мир')).toBe('privet-mir');
  });

  it('should handle multiple spaces', () => {
    expect(slug('  Lots   of   spaces ')).toBe('lots-of-spaces');
  });

  it('should support custom separator', () => {
    expect(slug('file_name.txt', { separator: '_' })).toBe('file_name_txt');
  });

  it('should support fallback for empty result', () => {
    expect(slug('', { fallback: 'untitled' })).toBe('untitled');
    expect(slug('   ', { fallback: 'untitled' })).toBe('untitled');
  });

  it('should handle German characters', () => {
    expect(slug('Über Straße')).toBe('uber-strasse');
  });

  it('should handle French characters', () => {
    expect(slug('café résumé')).toBe('cafe-resume');
  });

  it('should handle symbols', () => {
    expect(slug('Tom & Jerry')).toBe('tom-and-jerry');
    expect(slug('user@example')).toBe('useratexample');
  });

  it('should support maxLength option', () => {
    const result = slug('This is a very long title that should be truncated', { maxLength: 20 });
    expect(result.length).toBeLessThanOrEqual(20);
  });

  it('should handle Azerbaijani ə character', () => {
    expect(slug('Əli Həsənov')).toBe('eli-hesenov');
  });

  it('should preserve case when lowercase is false', () => {
    expect(slug('Hello World', { lowercase: false })).toBe('Hello-World');
  });
});
