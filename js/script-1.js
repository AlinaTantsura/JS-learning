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

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
      if (this.pizzas.includes(pizzaName)) {
          console.log(pizzaName);
    onSuccess(pizzaName);
    }
      else {
          onError(pizzaName);
      console.log(`There is no pizza with a name ${pizzaName} in the assortment.`)}
      
  },
};
// 
// Change code above this line
// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);