import { ProductNormalizer } from "./ProductNormalizer.js";

export class ProductCategorizer {

  async categorize(products) {
    const categories = new Map();

    products.forEach((product) => {
      const normalizeTitle = ProductNormalizer.normalizeTitle(product.title);

      if (!categories.has(normalizeTitle)) {
        categories.set(normalizeTitle, {
          category: product.title,
          count: 0,
          products: [],
        });
      }

    //   categories.get(normalizeTitle).count += 1;
    //   categories.get(normalizeTitle).products.push({
    //     title: product.title,
    //     supermarket: product.supermarket,
    //     price: product.price
    //   });

    const category = categories.get(normalizeTitle);
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
