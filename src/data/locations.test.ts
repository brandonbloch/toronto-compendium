import { locations } from '@/data/locations.ts';
import { describe, expect, test } from 'bun:test';

describe('compendium locations', () => {
  test('no duplicate locations', () => {
    const allLocationsSet = new Set(locations);
    expect(allLocationsSet.size).toBe(locations.length);
  });

  test('no whitespace-only locations', () => {
    const containsWhitespaceOnlyLocations = locations.some((location) => location.trim() === '');
    expect(containsWhitespaceOnlyLocations).toBeFalse();
  });
});
