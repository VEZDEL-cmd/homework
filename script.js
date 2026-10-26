//  Тема 12. Об’єкти. Перебір об'єкту
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

 
// function countProps(obj) {
//   return Object.keys(obj).length;
// }

// // Перевірка Завдання 2
// console.log('Кількість властивостей:', countProps({ name: 'Mango', age: 2 })); // 2
// console.log('Кількість властивостей:', countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

 
// function findBestEmployee(employees) {
//   let bestEmployee = '';
//   let maxTasks = 0;

//   for (const [name, tasks] of Object.entries(employees)) {
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = name;
//     }
//   }

//   return bestEmployee;
// }

 
// console.log(
//   'Найкращий робітник:',
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );  
// console.log(
//   'Найкращий робітник:',
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); 

 
// function countTotalSalary(employees) {
//   let totalSalary = 0;

//   for (const salary of Object.values(employees)) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

 
// console.log(
//   'Загальна зарплата:',
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// );  

// console.log(
//   'Загальна зарплата:',
//   countTotalSalary({
//     kiwi: 200,
//     lux: 150,
//     chelsy: 150,
//   })
// );  

 
// function getAllPropValues(arr, prop) {
//   const values = [];

//   for (const item of arr) {
//     if (prop in item) {
//       values.push(item[prop]);
//     }
//   }

//   return values;
// }

//  const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.log('Значення name:', getAllPropValues(products, 'name')); // ['Radar', 'Scanner', 'Droid', 'Grip']
// console.log('Значення quantity:', getAllPropValues(products, 'quantity')); // [4, 3, 7, 9]
// console.log('Значення category:', getAllPropValues(products, 'category')); // []

 
// function calculateTotalPrice(allProducts, productName) {
//   for (const product of allProducts) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return 0;
// }

 
// console.log('Загальна вартість Radar:', calculateTotalPrice(products, 'Radar')); // 5200
// console.log('Загальна вартість Droid:', calculateTotalPrice(products, 'Droid')); // 2800

 
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],

 
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };
//   },

  
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

 
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('Зняття такої суми неможливе, недостатньо коштів!');
//       return;
//     }

//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },
 
//   getBalance() {
//     return this.balance;
//   },

 
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return null;
//   },

  
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };
 
// account.deposit(1000);
// account.deposit(500);
// account.withdraw(300);
// account.withdraw(2000);  

// console.log('Поточний баланс:', account.getBalance()); // 1200
// console.log('Історія транзакцій:', account.transactions);
// console.log('Деталі транзакції №2:', account.getTransactionDetails(2)); // { id: 2, type: 'deposit', amount: 500 }
// console.log('Всього поповнено:', account.getTransactionTotal(Transaction.DEPOSIT)); // 1500
// console.log('Всього знято:', account.getTransactionTotal(Transaction.WITHDRAW)); // 300




// Тема 13. Об’єкти. Деструкткризація об'єктів

 
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

 
// function countProps(obj) {
//   return Object.keys(obj).length;
// }

 
// console.log('Кількість властивостей:', countProps({ name: 'Mango', age: 2 }));
// console.log('Кількість властивостей:', countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

 
// function findBestEmployee(employees) {
//   let bestEmployee = '';
//   let maxTasks = 0;

//   for (const [name, tasks] of Object.entries(employees)) {
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = name;
//     }
//   }

//   return bestEmployee;
// }

 
// console.log(
//   'Найкращий робітник:',
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

 
// function countTotalSalary(employees) {
//   let totalSalary = 0;

//   for (const salary of Object.values(employees)) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

 
// console.log(
//   'Загальна зарплата:',
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// );

 
// function getAllPropValues(arr, prop) {
//   const values = [];

//   for (const item of arr) {
//     if (prop in item) {
 
//       const { [prop]: value } = item;
//       values.push(value);
//     }
//   }

//   return values;
// }

 
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.log('Значення name:', getAllPropValues(products, 'name'));
// console.log('Значення quantity:', getAllPropValues(products, 'quantity'));

 
// function calculateTotalPrice(allProducts, productName) {
//   for (const product of allProducts) {
 
//     const { name, price, quantity } = product;

//     if (name === productName) {
//       return price * quantity;
//     }
//   }

//   return 0;
// }

 
// console.log('Загальна вартість Radar:', calculateTotalPrice(products, 'Radar'));
// console.log('Загальна вартість Droid:', calculateTotalPrice(products, 'Droid'));
 
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };
//   },

//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   withdraw(amount) {
   
//     const { balance } = this;

//     if (amount > balance) {
//       console.log('Зняття такої суми неможливе, недостатньо коштів!');
//       return;
//     }

//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
     
//       const { id: txId } = transaction;

//       if (txId === id) {
//         return transaction;
//       }
//     }
//     return null;
//   },

//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
    
//       const { type: txType, amount } = transaction;

//       if (txType === type) {
//         total += amount;
//       }
//     }
//     return total;
//   },
// };

 
// account.deposit(1000);
// account.deposit(500);
// account.withdraw(300);
// account.withdraw(2000);

// console.log('Поточний баланс:', account.getBalance());
// console.log('Історія транзакцій:', account.transactions);
// console.log('Деталі транзакції №2:', account.getTransactionDetails(2));
// console.log('Всього поповнено:', account.getTransactionTotal(Transaction.DEPOSIT));
// console.log('Всього знято:', account.getTransactionTotal(Transaction.WITHDRAW));



// Тема 14. Імперативний і декларативний код. Чисті функції

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

 
const getUserNames = users => {
  return users.map(({ name }) => name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


 
const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); 
// [обєкт Moore Hensley, обєкт Sharlene Bush, обєкт Carey Barr]


 
 
const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(({ name }) => name);
};

console.log(getUsersWithGender(users, 'male')); 
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


 
const getInactiveUsers = users => {
  return users.filter(({ isActive }) => !isActive);
};

console.log(getInactiveUsers(users)); 
// [обєкт Moore Hensley, обєкт Ross Vazquez, об'єкт Blackburn Dotson]


 
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// {обєкт користувача Sheree Anthony}

console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
// {обєкт користувача Elma Head}