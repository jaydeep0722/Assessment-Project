🧁 Sweet Shop Management System — Test Report
=============================================

🗓 Date: July 17, 2025  
🧪 Test Framework: Jest (JavaScript)  
🧾 Total Test Cases: 19  
✅ Status: All Tests Passed Successfully

------------------------------------------------------------

📦 Modules & Functionality Tested
---------------------------------

✔ Sweet Inventory Management (add, delete, fetch)  
✔ Validation for unique IDs and field completeness  
✔ Search (name, category, price range)  
✔ Purchase and Restock logic  
✔ Data integrity through deep copies and immutability  

------------------------------------------------------------

🧪 Test Execution Summary
-------------------------

| Test Case Description                                                            | Status  |
|----------------------------------------------------------------------------------|---------|
| should add a new sweet to the inventory                                          | ✅ PASS |
| should not allow adding sweets with duplicate IDs                               | ✅ PASS |
| should throw error if sweet object is missing required fields                   | ✅ PASS |
| should delete a sweet by ID                                                     | ✅ PASS |
| should throw error when deleting a non-existent sweet                           | ✅ PASS |
| should delete correct sweet from multiple sweets                                | ✅ PASS |
| should throw error if sweet ID passed to delete is not a number                 | ✅ PASS |
| should return a new array (not internal reference) to prevent external mutation | ✅ PASS |
| should return all sweets in the order they were added                           | ✅ PASS |
| should ensure each sweet has all required fields                                | ✅ PASS |
| should return deep clones of sweets to prevent external mutation                | ✅ PASS |
| should return sweets that match the exact name                                  | ✅ PASS |
| should return sweets matching category case-insensitively                       | ✅ PASS |
| should throw error if minPrice is not a number                                  | ✅ PASS |
| should support partial category search (e.g., "Nut" matches "Nut-Based")        | ✅ PASS |
| filters sweets correctly by minPrice and maxPrice                               | ✅ PASS |
| should reduce quantity on successful purchase                                   | ✅ PASS |
| should throw error if purchasing more than available quantity                   | ✅ PASS |
| should increase quantity when restocking                                        | ✅ PASS |

------------------------------------------------------------

🧾 Final Result
----------------

✅ All 19 test cases executed successfully.  
⚠ No errors, failed assertions, or exceptions encountered.  
⏱ Total Execution Time: 5.15 seconds

------------------------------------------------------------

📌 Notes
--------

- Tests verify both expected success and failure conditions.
- Service ensures immutability, proper validation, and safe operations.
- Project follows TDD principles with complete test coverage.

✔ This report confirms that the *Sweet Shop Management System* is functionally stable and test-verified.