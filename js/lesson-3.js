// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const square = numbers.map(number => number ** 2);
// console.log(square);

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const mapedData = data.flatMap(data => data.values);
// console.log(mapedData);

// Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const findAge = people.some(people => people.age < 20);
// console.log(findAge);

// Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const res = numbers.every(number => number % 2 === 0);
// console.log(res);

// Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const res = numbers.find(number => number % 2 !== 0);
// console.log(res);

// Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const res = numbersArray.toSorted();
// console.log(res);

// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const res = stringArray.toSorted();
// console.log(res);

// Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Alice', age: 27 },
//   { name: 'Bob', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = users.toSorted((a, b) => {
//   if (a.age !== b.age) {
//     return a.age - b.age;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 0;
// });

// console.log(res);

// Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = user.filter(user => user.age > 20);
// console.log(res);

// Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.reduce((acc, num) => acc + num, 0);
// console.log(res);

// Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// class Calculator {
//   constructor() {
//     this.value = 0;
//   }

//   number(num) {
//     this.value = num;
//     return this;
//   }
//   getResult() {
//     return this.value;
//   }

//   add(num) {
//     this.value += num;
//     return this;
//   }

//   subtract(num) {
//     this.value -= num;
//     return this;
//   }

//   multiply(num) {
//     this.value *= num;
//     return this;
//   }

//   divide(num) {
//     if (num === 0) {
//       console.log('Неможливо ділити на 0');
//       return this;
//     } else {
//       this.value /= num;
//       return this;
//     }
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(0) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(params) {
//     this.#login = params.login;
//     this.#email = params.email;
//   }
//   get login() {
//     return this.#login;
//   }
//   get email() {
//     return this.#email;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const user = new Client({ login: 'admin', email: 'admin@gmail.com' });

// console.log(user.login);
// console.log(user.email);

// user.login = 'superadmin';
// user.email = 'superadmin@gmail.com';

// console.log(user.login);
// console.log(user.email);

// Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,

// class Person {
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.gender = params.gender;
//     this.email = params.email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(params) {
//     super(params);
//     this.salary = params.salary;
//     this.department = params.department;
//   }
//   getEmployeeDetails() {
//     return { getsalary: this.salary, department: this.department };
//   }
// }

// const worker = new Employee({
//   name: 'Pedro',
//   age: 30,
//   gender: 'male',
//   email: 'pedro@gmail.com',
//   salary: 600,
//   department: 'IT',
// });

// console.log(worker.getDetails());
// console.log(worker.getEmployeeDetails());

// Каширин Александр
// 12:09
// const user = {
//   name: "Олександр",
//   sayHi: () => {
//     console.log(this.name);
//   },
// };

// // user.sayHi()

// const user2 = {
//   name: "Олександр",
//   showInfo() {
//     const arrow = () => console.log(this.name);
//     arrow();
//   },
// };
// user2.showInfo()
