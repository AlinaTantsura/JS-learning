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

// function findLongestWord(string) {
//   let mass = string.split(" ");
//   let longestWord = mass[0];
//   for (let i = 1; i < mass.length; i += 1){
//     if(mass[i].length > longestWord.length){
//         longestWord = mass[i];
        
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("May the force be with you"));

// function findLongestWord(string) {
//   let mass = string.split(" ");
//     let longestWord = mass[0];
//     let wordLength = mass[0].length;
//     for (let i = 1; i < mass.length; i += 1){
//         console.log(wordLength);
//     if(mass[i].length > wordLength){
//         longestWord = mass[i];
//         wordLength = mass[i].length;
//     }
//   }
//   return longestWord;
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


// 29.08.2013(Callback functions)

//TASK  1
// function createProduct(obj, callback) {
//     const newObj = {
//         id: Date.now(),
//         ...obj
//     };
//     callback(newObj);
// }
// function logProduct(product) {
//     console.log(product);
// }
// function logTotalPrice({name, price, quantity }) {
//     console.log(`Total price of ${name} - ${price * quantity}`)
// }
// createProduct({ name: "Apples", price: 15, quantity: 10 }, logProduct);
// createProduct({ name: "Oranges", price: 60, quantity: 7 }, logTotalPrice);

//TASK  2
// function each(arr, callback) {
//   return arr.map(number => callback(number));
// }

// function each(arr, callback) {
//     const array = [];
//     arr.forEach(number => array.push(callback(number)));
//     return array;
// }
// console.log(each([1, 2, 3, 4, 5], value => value * 2));
// console.log(each([1, 2, 3, 4, 5], value => value ** 2));

// //TASK  3
// const products = [
//     {id: 1, name: 'Beef', price: 250},
//     {id: 2, name: 'Chicken', price: 140},
//     {id: 3, name: 'Pork', price: 210}
// ]
// function getProductDetails(id, onSuccess, onError) {
//     for (const product of products) {
//         if (product.id === id) {
//             onSuccess(product);
//             return;
//         }
//     }
//     onError(id);
// }
// function handleSuccess(product) {
//     console.log(`Success! Product ${product.name} is on the list! Price - ${product.price}`)
// };
// function handleError(productId) {
//     console.log(`Error!!!! There is no products with id - ${productId}`)
// };
// getProductDetails(2, handleSuccess, handleError);
// getProductDetails(22, handleSuccess, handleError);

// //TASK 4
// const products = [
//     {id: 1, name: 'Beef', price: 250},
//     {id: 2, name: 'Chicken', price: 140},
//     {id: 3, name: 'Pork', price: 210}
// ]
// function getAveragePrice(products, onSuccess, onError) {
//     if (!products.length) {
//         return onError();
//     }
//     let total = 0;
//     for (const product of products) {
//         total += product.price;
//     }
//     const averagePrice = total / products.length;
//     return onSuccess(averagePrice);
// };
// const onSuccess = (price) => `Average price of the products - ${price}`;
// const onError = () => "Error!!! There is no product in products!!!";


// console.log(getAveragePrice(products, onSuccess, onError));
// console.log(getAveragePrice([], onSuccess, onError));