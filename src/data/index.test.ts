import { compendiumData } from '@/data/index.ts';
import { describe, expect, test } from 'bun:test';

describe('compendium entry IDs', () => {
  test('no duplicate IDs', () => {
    const allIdsSet = new Set(compendiumData.map((entry) => entry.id));
    expect(allIdsSet.size).toBe(compendiumData.length);
  });

  test('no whitespace-only IDs', () => {
    const containsWhitespaceOnlyIds = compendiumData.some((entry) => entry.id.trim() === '');
    expect(containsWhitespaceOnlyIds).toBeFalse();
  });
});
