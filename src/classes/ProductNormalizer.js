export class ProductNormalizer {
  static normalizeTitle(title) {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]/gi, '')
      .replace(/\b(de|do|da|dos|das|tipo|um|uma|o|a|os|as)\b/g, '')
      .replace(/\b(semi[-\s]?desnatado|semi\sdesnatado)\b/g, 'semidesnatado')
      .replace(/\b(litro|litros|1000ml|1 litro|1 l|1l)\b/g, '1l')
      .replace(/\b(quilogramas|quilo|kg|1 kg|1kg|1000g)\b/g, '1kg')
      .replace(/\b(gramas|g|500 g)\b/g, '500g')
      .replace(/\b(5 quilos|5 quilogramas|5kg|5 kg)\b/g, '5kg')
      .replace(/\b(sem lactose|zero lactose)\b/g, 'zero lactose')
      .replace(/\b(piracanjuba leite|leite piracanjuba)\b/g, 'leite piracanjuba')
      .replace(/\b(suco de|suco)\b/g, 'suco')
      .replace(/\s+/g, ' ')
      .trim()
      .split(" ")
      .sort()
      .join(" "); 
  }
}
