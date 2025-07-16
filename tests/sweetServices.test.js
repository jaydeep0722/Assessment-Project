// tests/sweetServices.test.js

const SweetService = require("../src/services/SweetService");

describe("Sweet Shop - Add Sweets", () => {
  let service;

  beforeEach(() => {
    service = new SweetService();
  });

  test("should add a new sweet to the inventory", () => {
    const sweet = {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };

    service.addSweet(sweet);
    const sweets = service.getAllSweets();

    expect(sweets.length).toBe(1);
    expect(sweets[0]).toEqual(sweet);
  });
    
  test("should not allow adding sweets with duplicate IDs", () => {
    const sweet1 = {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };

    const sweet2 = {
      id: 1001,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 15,
    };

    service.addSweet(sweet1);
    expect(() => service.addSweet(sweet2)).toThrow("Sweet ID must be unique");
  });
    
});
