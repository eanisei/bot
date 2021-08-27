'use strict';

/* 

Используйте функции alert, confirm, prompt для общения с пользователем.

— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".

Программа должны быть выполнена с помощью рекурсии, без единого цикла.

Загаданное число должно храниться «в замыкании»

*/

let isNumber = function(n) {
    return !isNaN(parseFloat(n));
}


function guessNumber(num) {
     num = prompt('Угадай число от 1 до 100');

     if (!isNumber(num)) {
        confirm('Введи число!');
        guessNumber();
     }
     console.log(num);
     return num;
};

guessNumber();

let randomNum = function() {
    return Math.round(Math.random() * 100);
    }

    console.log(randomNum());


function compareNumbers() {
     
    let result = function(num, randomNum) {
        if(num > randomNum) {
            alert('Загаданное число меньше');
        } 
        else if(num < randomNum) {
            alert('Загаданное число больше');
        }
        else if(num !== randomNum) {
            alert('Поздравляю, Вы угадали!!!');
            
        }
    }

return result;

}

compareNumbers();




// console.log(isNumber());

// let askNum = function() {
//     return question;
// }

// console.log(askNum());


