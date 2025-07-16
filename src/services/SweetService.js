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
    return [...this.sweets]; // return a copy, not the reference
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
}

module.exports = SweetService;
