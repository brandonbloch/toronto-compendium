import { categories } from '@/data/constants.ts';
import { describe, expect, test } from 'bun:test';

describe('compendium categories', () => {
  test('no duplicate categories', () => {
    const allCategoriesSet = new Set(categories);
    expect(allCategoriesSet.size).toBe(categories.length);
  });

  test('no whitespace-only categories', () => {
    const containsWhitespaceOnlyCategories = categories.some((category) => category.trim() === '');
    expect(containsWhitespaceOnlyCategories).toBeFalse();
  });
});
