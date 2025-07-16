class SweetService {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    const requiredFields = ["id", "name", "category", "price", "quantity"];
    for (let field of requiredFields) {
      if (!sweet.hasOwnProperty(field)) {
        throw new Error("Invalid sweet object");
      }
    }

    const exists = this.sweets.find((s) => s.id === sweet.id);
    if (exists) {
      throw new Error("Sweet ID must be unique");
    }

    this.sweets.push(sweet);
  }

  getAllSweets() {
    return this.sweets.map((sweet) => ({ ...sweet }));
  }

  deleteSweet(id) {
    if (typeof id !== "number") {
      throw new Error("Sweet ID must be a number");
    }

    const index = this.sweets.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error("Sweet not found");
    }

    this.sweets.splice(index, 1);
  }

  searchSweets({ name, category, minPrice, maxPrice }) {
    return this.sweets.filter((sweet) => {
      if (name && sweet.name.toLowerCase() !== name.toLowerCase()) return false;
      if (category && sweet.category.toLowerCase() !== category.toLowerCase())
        return false;
      if (minPrice != null && sweet.price < minPrice) return false;
      if (maxPrice != null && sweet.price > maxPrice) return false;
      return true;
    });
  }
}

module.exports = SweetService;
