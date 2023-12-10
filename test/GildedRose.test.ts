import { GildedRose, Item } from '../src/GildedRose';

describe('gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item({ name: 'foo', sellIn: 0, quality: 0 })]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});
