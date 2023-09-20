//Є число. Потрібно вивести першу його цифру
// const number = 1123;
// const string = String(number);
// console.log(string);
// console.log(string.slice(0, 1));

//Є число. Потрібно вивести останню його цифру
// const number = 112367543111;
// const string = String(number);
// console.log(string);
// console.log(string.slice(string.length -1 , string.length));

//Є число. Потрібно вивести суму його першої та останньої цифри
// const number = 912849436;
// const string = String(number);
// const firstNum = Number(string[0]);
// const secondNum = Number(string[string.length - 1]);
// console.log(firstNum * secondNum);

//Є число. Виведіть скільки цифр у ньому
// const number = 1223392746111;
// const string = String(number);
// console.log(string.length);

//Є два числа. Перевірте, що перші їх цифри співпадають
// const num1 = 12232123334;
// const num2 = 27365;
// const str1 = String(num1);
// const str2 = String(num2);
// if (str1[0] === str2[0]) {
//     console.log("Перші цифри даних чисел співпадають");
// }
// else {
//     console.log("Перші цифри даних чисел не співпадають");
// }

//Дана строка. Якщо у ній більше одного символа, виведіть передостанній її символ.
// const str = "Hello world";
// if (str.length > 1) {
//     console.log(str[str.length - 2])
// }

//Дано 2 цілих числа. Перевірте чи ділиться одне на інше без залишку
// const num1 = 48;
// const num2 = 24;
// if (num1 % num2 === 0) {
//     console.log(`${num1} / ${num2} = ${num1 / num2}`);
// }
// else if (num2 % num1 === 0) {
//     console.log(`${num2} / ${num1} = ${num2 / num1}`);
// }
// else {
//     console.log(false)
// }

// for (let i = 1; i <= 100; i += 1){
//     console.log(i)
// }// Виводить цілі числа від 1 до 100

// for (let i = -100; i <= 0; i += 1){
//     console.log(i)
// }//Виводить цілі числа від -100 до 0

// for (let i = 100; i >= 1; i -= 1){
//     console.log(i)
// }//Виводить цілі числа від 100 до 1

// for (let i = 1; i <= 100; i += 1){
//     if (i % 2 === 0){console.log(i)}
// }// Виводить парні цілі числа від 1 до 100

// for (let i = 1; i <= 100; i += 1){
//     if (i % 3 === 0){console.log(i)}
// }// Виводить цілі числа кратні 3 від 1 до 100

//Знайти суму всіх цілих чисел від 1 до 100
// let sum = 0;
// for (let i = 1; i <= 1000; i += 1){
//     sum += i;
// }
// console.log(sum);

// // Напишіть код, виконавши завдання з кожного пункту окремим рядком:
// // Створіть порожній об’єкт user.
// // Додайте властивість name зі значенням Іван.
// // Додайте властивість surname зі значенням Сміт.
// // Змініть значення name на Петро.
// // Видаліть властивість name з об’єкта.
// const user = {};
// console.log(user);
// user.name = "Іван";
// console.log(user);
// user.surname = "Сміт";
// console.log(user);
// user["name"] = "Петро";
// console.log(user);
// delete user.name;
// console.log(user);

// // Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
// function isEmpty(obj){
//     for(let object in obj){
//         return false;
//     }
//     return true;
// }
// console.log(isEmpty({name: "Katya", surname: "kffgj"}));
// console.log(isEmpty({}));

// // Визначаємо суму значеть властивостей об'єкта
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//  const arrayValues = Object.values(salaries);
//  let sum = 0;
//  for(const value of arrayValues){
//     sum += value;
//  }
//  console.log(sum);

//Написати функцію, що повертає через скільки років, або скільки років тому батько був вдвічі старше за сина.
// function countTwiceAge(dadAge, sonAge){
//     if(dadAge > 150 || dadAge <= 0 || sonAge > 150 || sonAge < 0){
//         return "Wrong age! Please, check it!"
//     }
//     else if(dadAge / sonAge === 2){
//         return `Dad is twice older his son now`;
//     }
//     else {
//         let dad = dadAge - sonAge;
//         let son = 0;
//         while(dad / son !== 2){
//             dad +=1;
//             son +=1;
//             // console.log(dad, son);
//         }
//         console.log(dad, son);
//         if(dad < dadAge){
//             return `Dad was twice older his son ${dadAge - dad} years ago`;
//         }
//         else if (dad > dadAge){
//             return `Dad will be twice older his son for ${dad - dadAge} years`;
//         }
    
//     }
// }

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
//       if (this.pizzas.includes(pizzaName)) {
//           console.log(pizzaName);
//     onSuccess(pizzaName);
//     }
//       else {
//           onError(pizzaName);
//       console.log(`There is no pizza with a name ${pizzaName} in the assortment.`)}
      
//   },
// };
// // 
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// // console.log(getAveragePrice(products, onSuccess, onError));
// // console.log(getAveragePrice([], onSuccess, onError));
// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.
// const students = [
//   { name: "John", grades: [80, 85, 90] }, //  { name: "John", average: 85 }
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function withAverageGrade(arrayOfStudents){
//     let accs = 0;
//     const array = arrayOfStudents.map(({name, grades}) => {
//     const grade = grades.reduce((acc, grade) => acc += grade, 0);
//         return {name, averageGrade: Math.round(grade / grades.length)};
//     })
// return array;
// }

// console.log(withAverageGrade(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];
// function whoIsOlderTwenty(array){
//    return array.filter(({age}) => age > 20);
// }
// console.log(whoIsOlderTwenty(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];
// function findBookByTitle(array, name){
//    const findBook = array.find(({title}) => title === name);
//    return findBook || 'Not found';
// }
// console.log(findBookByTitle(books, 'Clean Code: A Handbook of Agile Software Craftsmanship'));
// console.log(findBookByTitle(books, 'Harry Potter'))

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.
// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 }, // 20 * 3 = 60
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];
// function countTotalPrice(array){
//     const result = array.reduce((acc, {price, quantity}) => acc += price * quantity, 0);
//     return result;
// }
// console.log(countTotalPrice(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];
// function sortBooks(array){
//     return [...array].sort((item1, item2) => item1.year - item2.year);
// }
// console.log(sortBooks(books));

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
// const products = [
//     { id: 2, name: "Banana", price: 0.99 },//
//     { id: 1, name: "Apple", price: 1.99 },//
//     { id: 3, name: "Orange", price: 2.49 },//
//     { id: 4, name: "Grapes", price: 3.99 },//
//   ];
// function sortProducts(array){
//    return array.filter(({price}) => price < 2).map(({name}) => name).sort((item1, item2) => item1.localeCompare(item2));
// }
// console.log(sortProducts(products));

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, 
// потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа

// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }
// const str = "absdabsrgbadgtdswwbetflg";
// const obj = {};
// const arr = str.split("");
// console.log(arr);
// for(let j = 0; j < str.length; j += 1){
//     if(obj.hasOwnProperty(str[j])){
//         obj[str[j]] += 1;
//     }
//     else{
//         obj[str[j]] = 1;
//     }
// }
// console.log(obj);

