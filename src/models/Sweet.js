// This file is reserved for Sweet model structure.
// Currently, the project uses static object values directly.
// If needed, class-based model or schema can be added later.
class Sweet {
  constructor({ id, name, category, price, quantity }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}

module.exports = Sweet;
