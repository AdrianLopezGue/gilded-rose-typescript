# Gilded Rose Kata in TypeScript + Vitest

This repository contains a TypeScript implementation of the famous "Gilded Rose" kata. The kata focuses on refactoring an inventory management system for a shop, where products have different rules for quality updates.

## Installation

Follow these steps to set up and run the kata in your local environment:

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine. Then, run the following command to install project dependencies:

```bash
yarn install
```

### 2. Run Tests

After installing the dependencies, run the tests to ensure that the implementation meets the kata requirements. Use the following command:

```bash
yarn test
```

This command will execute the tests and provide information about coverage and any potential errors.

## Gilded Rose Requirements Specification

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell-by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add a new feature to our system so that we can begin selling a new category of items. First, an introduction to our system:

- All items have a `SellIn` value which denotes the number of days we have to sell the item
- All items have a `Quality` value which denotes how valuable the item is
- At the end of each day, our system lowers both values for every item

Pretty simple, right? Well, this is where it gets interesting:

- Once the sell-by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras," being a legendary item, never has to be sold or decreases in Quality
- "Backstage passes," like aged brie, increases in Quality as its `SellIn` value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less, but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything still works correctly. However, do not alter the `Item` class or `Items` property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the `UpdateQuality` method and `Items` property static if you like, we'll cover for you).

Just for clarification, an item can never have its Quality increase above 50, however, "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

## Additional Resources

Here are some resources that may be useful for completing the Gilded Rose kata:

- [Code Smells](https://refactoring.guru/refactoring/smells)
- [Clean Code Principles](https://github.com/JuanCrg90/Clean-Code-Notes)
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)

Feel free to explore these resources to enhance your understanding of clean code practices and refactoring techniques.
