export class ProductNormalizer {
  async normalizeTitle(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9áéíóúãõç ]/gi, "")
      .replace(/(?:de|do|da|dos|das)/g, "")
      .replace(/(\d+)\s*(l|litro|litros|kg|quilo|quilos|g|gramas)/g, "$1$2")
      .trim()
      .split(" ")
      .sort()
      .join(" ");
  }
}
