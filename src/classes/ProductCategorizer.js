import { ProductNormalizer } from "./ProductNormalizer.js";

export class ProductCategorizer {
  async categorize(products) {
    const categories = new Map();

    products.forEach((product) => {
      const normalizedTitle = ProductNormalizer.normalizeTitle(product.title);

      if (!categories.has(normalizedTitle)) {
        categories.set(normalizedTitle, {
          category: product.title,
          count: 0,
          products: [],
        });
      }

      const category = categories.get(normalizedTitle);
      category.count += 1;
      category.products.push({
        title: product.title,
        supermarket: product.supermarket,
        price: product.price
      });
    });

    return Array.from(categories.values());
  }
}
