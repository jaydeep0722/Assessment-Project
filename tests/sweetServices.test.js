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
      id: 1001, // same ID as sweet1
      name: "Rasgulla",
      category: "Milk-Based",
      price: 40,
      quantity: 15,
    };

    service.addSweet(sweet1);
    expect(() => service.addSweet(sweet2)).toThrow(/Sweet ID must be unique/); // ✅ use RegExp
  });

  test("should throw error if sweet object is missing required fields", () => {
    const incompleteSweet = {
      id: 1002,
      name: "Milk Cake",
      price: 25,
      quantity: 10,
      // category is missing
    };

    expect(() => service.addSweet(incompleteSweet)).toThrow(
      "Invalid sweet object"
    );
  });

  test("should delete a sweet by ID", () => {
    const sweet = {
      id: 2001,
      name: "Rasgulla",
      category: "Milk-Based",
      price: 15,
      quantity: 25,
    };

    service.addSweet(sweet);
    service.deleteSweet(2001); // 🔴 deleteSweet() not implemented yet

    const sweets = service.getAllSweets();
    expect(sweets.length).toBe(0);
  });
    
    
    
  test("should throw error when deleting a non-existent sweet", () => {
    expect(() => service.deleteSweet(9999)).toThrow("Sweet not found");
  });
    
    
    
  test("should throw error if sweet ID passed to delete is not a number", () => {
    const sweet = {
      id: 3001,
      name: "Peda",
      category: "Milk-Based",
      price: 12,
      quantity: 30,
    };
  
    service.addSweet(sweet);
  
    expect(() => service.deleteSweet("3001")).toThrow("Sweet ID must be a number");
  });

  
});
