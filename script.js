'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SLICE -DOES NOT MUTATE THE ARR

const arr1 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr1.slice(1, 3));

//SPLICE METHOD - DELETES THE VALUES AND MUTATES THE ARRAY

console.log(arr1.splice(1, 3));

//REVERSE ARRAY - MUTATES THE ARRAY

const arr2 = ['l', 'm', 'n', 'o', 'p'];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT METHOD - MUTATES THE ARRAY

console.log(arr2.concat(arr1));

//JOIN METHOD

console.log(arr2.join(' / '));
//This joins the array with whatever we specify in the parenthesis. In the above
//case the array becomes a string that is joined by /

const movements1 = [200, -200, 340, -300, -20, 50, 400, -460];

for (const money of movements1) {
  if (money < 0) {
    console.log('Money withdrawn');
  } else {
    console.log('Money deposited');
  }
}

//forEach method - Takes in a function in each iteration, it calls the function

movements1.forEach(function (money1, index, arr) {
  if (money1 < 0) {
    console.log(`Money withdrawn ${index + 1} : ${Math.abs(money1)}`);
  } else {
    console.log(`Money deposited ${index + 1}: ${money1}`);
  }
});

//FOREACH USING MAP

const currency = new Map([
  ['USD', 'UNITED STATES'],
  ['CAD', 'CANADA'],
  ['INR', 'INDIAN'],
]);

currency.forEach(function (value, key, arr) {
  console.log(`${key} ${value}`);
  console.log(arr);
});

//FOREACH USING SET - Set returns an object
const newCurr = new Set(['USD', 'CAD', 'CAD', 'INR', 'INR'])
console.log(newCurr)

newCurr.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`)
  console.log(set)
})