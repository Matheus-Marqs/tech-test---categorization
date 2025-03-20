export class ProductNormalizer {
  static normalizeTitle(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9áéíóúãõç ]/gi, '')
      .replace(/\b(de|do|da|dos|das|um|uma|o|a|os|as)\b/g, '')
      .replace(/(\d+)\s*(litro|litros|kg|quilo|quilos|g|gramas|ml)/g, '$1$2')
      .trim()
      .split(" ")
      .sort()
      .join(" ");
  }
}
