 
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

 
function countProps(obj) {
  return Object.keys(obj).length;
}

// Перевірка Завдання 2
console.log('Кількість властивостей:', countProps({ name: 'Mango', age: 2 })); // 2
console.log('Кількість властивостей:', countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

 
function findBestEmployee(employees) {
  let bestEmployee = '';
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

 
console.log(
  'Найкращий робітник:',
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);  
console.log(
  'Найкращий робітник:',
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); 

 
function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

 
console.log(
  'Загальна зарплата:',
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);  

console.log(
  'Загальна зарплата:',
  countTotalSalary({
    kiwi: 200,
    lux: 150,
    chelsy: 150,
  })
);  

 
function getAllPropValues(arr, prop) {
  const values = [];

  for (const item of arr) {
    if (prop in item) {
      values.push(item[prop]);
    }
  }

  return values;
}

 const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

console.log('Значення name:', getAllPropValues(products, 'name')); // ['Radar', 'Scanner', 'Droid', 'Grip']
console.log('Значення quantity:', getAllPropValues(products, 'quantity')); // [4, 3, 7, 9]
console.log('Значення category:', getAllPropValues(products, 'category')); // []

 
function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

  return 0;
}

 
console.log('Загальна вартість Radar:', calculateTotalPrice(products, 'Radar')); // 5200
console.log('Загальна вартість Droid:', calculateTotalPrice(products, 'Droid')); // 2800

 
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

 
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

 
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Зняття такої суми неможливе, недостатньо коштів!');
      return;
    }

    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },
 
  getBalance() {
    return this.balance;
  },

 
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return null;
  },

  
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
 
account.deposit(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(2000);  

console.log('Поточний баланс:', account.getBalance()); // 1200
console.log('Історія транзакцій:', account.transactions);
console.log('Деталі транзакції №2:', account.getTransactionDetails(2)); // { id: 2, type: 'deposit', amount: 500 }
console.log('Всього поповнено:', account.getTransactionTotal(Transaction.DEPOSIT)); // 1500
console.log('Всього знято:', account.getTransactionTotal(Transaction.WITHDRAW)); // 300