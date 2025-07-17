// Entry point (not used in test-driven setup)
// Can be used to manually run the service if needed
// Manual runner (optional)
const SweetService = require("./services/SweetService");
const service = new SweetService();

service.addSweet({
  id: 1,
  name: "Barfi",
  category: "Milk",
  price: 300,
  quantity: 5,
});
console.log(service.getAllSweets());
