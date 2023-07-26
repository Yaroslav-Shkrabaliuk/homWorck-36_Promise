'use strict'

// Завдання:
// 1. Перевірка на парність числа. Напишіть функцію isEven, яка приймає число, яке вводить користувач, в якості аргументу і повертає проміс, яка поверне "Це парне число", якщо число парне (resolve), і "Помилка, число не парне", якщо число непарне (reject).

// function isEven(number) {
//     return new Promise(function(resolve, reject) {
//         console.log('Pending...');
//         setTimeout(() => {
//             number % 2 === 0 ? resolve("Це парне число") : reject("Помилка, число не парне")
//         }, 1000);
//     });
        
    
// }
// isEven(+prompt("Введіть число")).then(data => console.log(data)).catch(error => console.log(error));


// 2. Випадкова затримка. Напишіть функцію, яка повертає проміс з випадковою затримкою від 1 до 5 секунд.

// function randomTimeout(){
//     return new Promise(function(resolve){
//         console.log('Pending...');
//         const randomNumber = Math.floor(Math.random()*(5-1)+1);
//         setTimeout(() => {
//             resolve (`затримка ${randomNumber}`)
//         }, randomNumber * 1000);
//     })
// }
// randomTimeout().then(data => console.log(data))

// 3. Виконання промісу з ймовірністю успіху. Напишіть функцію, яка повертає проміс, яка має вказану ймовірність успішного виконання (наприклад, 70%). Успішне виконання повинно повертати "Успіх", а невдачу - "Помилка".
// function promise() {
//     return new Promise(function(resolve, reject) {
//         const randomNumber = Math.random() < 0.7 ? resolve("Успіх") : reject("Помилка");        
//     })
// }
// promise().then(data => console.log(data)).catch(error => console.log(error));

// 4.* Виконання послідовних операцій. Напишіть послідовність з чотирьох промісів, де перший повертає випадкове число від 1 до 100, другий множить його на 10, третій перетворює результат в масив чисел, а четвертий сортує числа по зростанню. 87 -> 870 -> [8, 7, 0] -> [0, 7, 8]. Затримка кожного промісу має бути більше на 1с за затримку минулого і на кожному етапі має виводитись в консоль проміжний результат.

// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         console.log('Random number:', randomNumber);
//         resolve(randomNumber);
//         }, 1000);
//     });
//     }
//     function multiplyByTen(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const multipliedNumber = number * 10;
//         console.log('Multiplied number:', multipliedNumber);
//         resolve(multipliedNumber);
//     }, 2000);
//     });
//     }
//     function convertToArray(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const array = Array.from(String(number), Number);
//         console.log('Converted array:', array);
//         resolve(array);
//     }, 3000);
//     });
//     }
//     function sortArray(array) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const sortedArray = array.sort((a, b) => a - b);
//         console.log('Sorted array:', sortedArray);
//         resolve(sortedArray);
//     }, 4000);
//     });
//     }
// getRandomNumber()
//     .then(multiplyByTen)
//     .then(convertToArray)
//     .then(sortArray)
//     .catch(error => {
//     console.error('Error:', error);
//     });

// 5. Завдання зі статті: https://uk.javascript.info/promise-basics

// Перепишіть функцію showCircle, написану в завданні [Анімація круга за допомогою колбека]Коло анімоване за допомогою функції. таким чином щоб вона повертала проміс, замість того щоб приймати в аргументи колбек-функцію.
// Нове використання:
// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append("Привіт, світ!");
// });

// function go() {
//     showCircle(150, 150, 100).then(div => {
//         div.classList.add('message-ball');
//         div.append("Привіт, світ!");
//     });
//     }

// function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);
//     return new Promise(resolve => {
//         setTimeout(() => {
//         div.style.width = radius * 2 + 'px';
//         div.style.height = radius * 2 + 'px';

//         div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//         });
//         }, 0);
//     })
//     }