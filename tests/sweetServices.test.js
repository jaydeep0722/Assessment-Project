
const SweetService = require("../src/services/SweetService");

describe("Sweet Shop - Add Sweets", () => {
  let service;

  beforeEach(() => {
    service = new SweetService();
  });

  // add a new sweet to the inventory
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

  // not allow adding sweets with duplicate IDs
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

  // throw error if sweet object is missing required fields
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

  // delete a sweet by ID
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

  // throw error when deleting a non-existent sweet
  test("should throw error when deleting a non-existent sweet", () => {
    expect(() => service.deleteSweet(9999)).toThrow("Sweet not found");
  });

  //  throw error if sweet ID passed to delete is not a number
  test("should throw error if sweet ID passed to delete is not a number", () => {
    const sweet = {
      id: 3001,
      name: "Peda",
      category: "Milk-Based",
      price: 12,
      quantity: 30,
    };

    service.addSweet(sweet);

    expect(() => service.deleteSweet("3001")).toThrow(
      "Sweet ID must be a number"
    );
  });

  //  return a new array (not internal reference) to prevent external mutation
  test("should return a new array (not internal reference) to prevent external mutation", () => {
    const sweet = {
      id: 4001,
      name: "Cham Cham",
      category: "Milk-Based",
      price: 18,
      quantity: 12,
    };

    service.addSweet(sweet);

    const sweets = service.getAllSweets();
    sweets.pop(); // try to mutate it

    // Internal inventory should still be intact
    expect(service.getAllSweets().length).toBe(1);
  });

  // return all sweets in the order they were added
  test("should return all sweets in the order they were added", () => {
    const sweet1 = {
      id: 5001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };

    const sweet2 = {
      id: 5002,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 30,
    };

    const sweet3 = {
      id: 5003,
      name: "Jalebi",
      category: "Flour-Based",
      price: 15,
      quantity: 25,
    };

    service.addSweet(sweet1);
    service.addSweet(sweet2);
    service.addSweet(sweet3);

    const result = service.getAllSweets();

    expect(result[0].id).toBe(5001);
    expect(result[1].id).toBe(5002);
    expect(result[2].id).toBe(5003);
  });

  // delete correct sweet from multiple sweets
  test("should delete correct sweet from multiple sweets", () => {
    const sweet1 = {
      id: 3001,
      name: "Peda",
      category: "Milk-Based",
      price: 12,
      quantity: 30,
    };

    const sweet2 = {
      id: 3002,
      name: "Ladoo",
      category: "Flour-Based",
      price: 18,
      quantity: 40,
    };

    const sweet3 = {
      id: 3003,
      name: "Barfi",
      category: "Milk-Based",
      price: 22,
      quantity: 10,
    };

    service.addSweet(sweet1);
    service.addSweet(sweet2);
    service.addSweet(sweet3);

    service.deleteSweet(3002); // Delete Ladoo

    const sweets = service.getAllSweets();

    expect(sweets.length).toBe(2);
    const ids = sweets.map((s) => s.id);
    expect(ids).toContain(3001);
    expect(ids).toContain(3003);
    expect(ids).not.toContain(3002);
  });

  // ensure each sweet has all required fields
  test("should ensure each sweet has all required fields", () => {
    const sweet = {
      id: 6001,
      name: "Soan Papdi",
      category: "Flour-Based",
      price: 30,
      quantity: 50,
    };

    service.addSweet(sweet);

    const result = service.getAllSweets();

    expect(result.length).toBe(1);

    const returnedSweet = result[0];

    const expectedFields = ["id", "name", "category", "price", "quantity"];
    for (const field of expectedFields) {
      expect(returnedSweet).toHaveProperty(field);
    }
  });

  // return deep clones of sweets to prevent external mutation
  test("should return deep clones of sweets to prevent external mutation", () => {
    const sweet = {
      id: 7001,
      name: "Rasgulla",
      category: "Milk-Based",
      price: 25,
      quantity: 20,
    };

    service.addSweet(sweet);

    const sweets = service.getAllSweets();

    // Try mutating the returned object
    sweets[0].name = "Hacked Sweet";
    sweets[0].quantity = 0;

    // Original data must stay intact
    const original = service.getAllSweets()[0];

    expect(original.name).toBe("Rasgulla");
    expect(original.quantity).toBe(20);
  });

 // return sweets that match the exact name
  test("should return sweets that match the exact name", () => {
    const sweet1 = {
      id: 9001,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 15,
      quantity: 50,
    };
    const sweet2 = {
      id: 9002,
      name: "Jalebi",
      category: "Flour-Based",
      price: 10,
      quantity: 30,
    };

    service.addSweet(sweet1);
    service.addSweet(sweet2);

    const results = service.searchSweets({ name: "Gulab Jamun" });
    expect(results.length).toBe(1);
    expect(results[0].id).toBe(9001);
  });

  // throw error if minPrice is not a number
  test("should throw error if minPrice is not a number", () => {
    const sweet = {
      id: 9010,
      name: "Barfi",
      category: "Milk-Based",
      price: 30,
      quantity: 10,
    };

    service.addSweet(sweet);

    expect(() => {
      service.searchSweets({ minPrice: "twenty" }); // ❌ invalid
    }).toThrow("Price filter must be a number");
  });

  // support partial category search (e.g., 'Nut' matches 'Nut-Based')
  test("should support partial category search (e.g., 'Nut' matches 'Nut-Based')", () => {
    const sweet1 = {
      id: 9201,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };
    const sweet2 = {
      id: 9202,
      name: "Badam Barfi",
      category: "Nut-Based",
      price: 40,
      quantity: 10,
    };
    const sweet3 = {
      id: 9203,
      name: "Gajar Halwa",
      category: "Vegetable-Based",
      price: 30,
      quantity: 15,
    };

    service.addSweet(sweet1);
    service.addSweet(sweet2);
    service.addSweet(sweet3);

    const result = service.searchSweets({ category: "Nut" }); // Partial category
    expect(result.length).toBe(2); // Should return 2 sweets with "Nut-Based"
  });

  // return only sweets within price range ₹25–₹60"
  test("❌ should return only sweets within price range ₹25–₹60", () => {
    const sweet1 = {
      id: 9601,
      name: "Ladoo",
      category: "Flour-Based",
      price: 10,
      quantity: 10,
    };
    const sweet2 = {
      id: 9602,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 35,
      quantity: 10,
    };
    const sweet3 = {
      id: 9603,
      name: "Jalebi",
      category: "Flour-Based",
      price: 75,
      quantity: 10,
    };

    service.addSweet(sweet1);
    service.addSweet(sweet2);
    service.addSweet(sweet3);

    const result = service.searchSweets({ minPrice: 25, maxPrice: 60 });

    // 💥 This should only return Kaju Katli, but will return all if filtering not present
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Kaju Katli");
  });

  // returns correct sweet when searched by exact name
  test(" should pass: returns correct sweet when searched by exact name", () => {
    const sweet1 = {
      id: 9701,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 20,
      quantity: 30,
    };
    const sweet2 = {
      id: 9702,
      name: "Jalebi",
      category: "Flour-Based",
      price: 25,
      quantity: 25,
    };

    service.addSweet(sweet1);
    service.addSweet(sweet2);

    const result = service.searchSweets({ name: "Gulab Jamun" });

    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Gulab Jamun"); // correct expectation
  });

  // reduce quantity on successful purchase
  test("should reduce quantity on successful purchase", () => {
    const sweet = {
      id: 10001,
      name: "Peda",
      category: "Milk-Based",
      price: 12,
      quantity: 30,
    };

    service.addSweet(sweet);

    service.purchaseSweet(10001, 5);

    const updated = service.getAllSweets().find((s) => s.id === 10001);
    expect(updated.quantity).toBe(25);
  });

  // not throw error if purchasing more than available quantity
  test("should not throw error if purchasing more than available quantity", () => {
    const sweet = {
      id: 10002,
      name: "Jalebi",
      category: "Flour-Based",
      price: 10,
      quantity: 10,
    };

    service.addSweet(sweet);

    expect(() => service.purchaseSweet(10002, 15)).toThrow("sufficient stock");
  });

  // increase quantity when restocking
  test("should increase quantity when restocking", () => {
    const sweet = {
      id: 10003,
      name: "Barfi",
      category: "Milk-Based",
      price: 25,
      quantity: 10,
    };

    service.addSweet(sweet);

    service.restockSweet(10003, 5);

    const updated = service.getAllSweets().find((s) => s.id === 10003);
    expect(updated.quantity).toBe(15);
  });
});
