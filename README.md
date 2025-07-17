# 🍬 Sweet Shop Management System (TDD + JavaScript + Jest)

This is a  project developed using *Test-Driven Development (TDD)* principles. It manages an inventory of sweets in a shop, including features like add, delete, search, purchase, and restock.

---

## 📦 Features

- ✅ Add sweets to inventory
- ✅ Prevent duplicate sweet IDs
- ✅ Delete sweets by ID
- ✅ Search sweets by:
  - Exact name
  - Case-insensitive category
  - Partial category
  - Price range (minPrice, maxPrice)
- ✅ Purchase sweets (decrease quantity)
- ✅ Restock sweets (increase quantity)
- ✅ Defensive coding to prevent external mutation
- ✅ Full Jest test coverage

---

## 🛠 Tech Stack

- *JavaScript (ES6)*
- *Jest* for unit testing

---

## 📁 Project Structure

TDD/
├── node_modules/
├── src/
│ ├── models/
│ │ └── Sweet.js # (Optional) Sweet data model (if separated)
│ ├── services/
│ │ └── SweetService.js # Business logic layer
│ └── index.js # Entry point (optional)
├── tests/
│ └── sweetServices.test.js # All Jest test cases
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


---

## ▶ How to Run

### Install dependencies:

```bash
npm install
Run tests:
npm test


💡 Sample Sweet Object
json:
{
  "id": 1001,
  "name": "Kaju Katli",
  "category": "Nut-Based",
  "price": 50,
  "quantity": 20
}

❌ Errors Handled
Error Condition	Error Message
Duplicate sweet ID	Sweet ID must be unique
Missing required fields	Invalid sweet object
Non-numeric sweet ID (delete)	Sweet ID must be a number
Deleting non-existing sweet	Sweet not found
Purchase more than available quantity	Insufficient stock
Non-numeric price filters in search	Price filter must be a number

🧪 TDD Coverage (Jest)
All features have failing → passing tests.

Every edge case is covered:

Adding

Deleting

Searching

Mutability

Input validation

Sorting & ordering

Run npm test to see all green ✅ test results.

📌 Why This Project?
Demonstrates Test-Driven Development (TDD)

Good for placement projects

Clean, modular, and interview-ready code

Covers real-world business logic


👤 Author
Prajapati Jaydeep
GitHub: https://github.com/jaydeep0722
LinkedIn: https://www.linkedin.com/in/jaydeep-prajapati-07a978204/