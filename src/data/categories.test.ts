import { categories } from '@/data/categories.ts';
import { describe, expect, test } from 'bun:test';

describe('compendium categories', () => {
  test('no duplicate categories', () => {
    const all_categoriesSet = new Set(categories);
    expect(all_categoriesSet.size).toBe(categories.length);
  });

  test('no whitespace-only categories', () => {
    const containsWhitespaceOnly_categories = categories.some(
      (category) => category.trim() === ''
    );
    expect(containsWhitespaceOnly_categories).toBeFalse();
  });
});
