# The Retail Store Discounts

### Problem Sattement

On a retail website, the following discounts apply:
1. If the user is an employee of the store, he gets a 30% discount
2. If the user is an affiliate of the store, he gets a 10% discount
3. If the user has been a customer for over 2 years, he gets a 5% discount. 
4. For every $100 on the bill, there would be a $ 5 discount (e.g. for $ 990, you get $ 45 as a discount).
5. The percentage based discounts do not apply on groceries.
6. A user can get only one of the percentage based discounts on a bill.

### My Assumptions
1. Higher percentage discount will overwrite the lower one. Such as, a customer who is registered more than 2 year ago is also an affiliate will get benefits of Affiliate.
2. No Groceries bill will be entitled to both percentage based and additional discounts.

### Solution


To run the app, execute the following steps:

1. create a .env file and add PORT number and mongoDb url in DB_CONN.
2. Then install the packages in package.json file
```bash
  npm install
```
3. At last, start the server.
```bash
  npm start
```