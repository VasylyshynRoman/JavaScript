//1. - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

document.write('1. - Створити змінні. Присвоїти кожному з них значення: \'hello\',\'owu\',\'com\', \'ua\', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. ' + '<br>' +
    '  Вивести кожну змінну за допомогою: console.log , alert, document.write:' + '<br>' + 'result: ');

alert('1. - Створити змінні. Присвоїти кожному з них значення: \'hello\',\'owu\',\'com\', \'ua\', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. ' + '<br>' +
    '  Вивести кожну змінну за допомогою: console.log , alert, document.write:');

let varHello = 'hello';
console.log(varHello);
alert(varHello);
document.write(varHello);

document.write(', ');

let varOwu = 'owu';
console.log(varOwu);
alert(varOwu);
document.write(varOwu);

document.write(', ');

let varCom = 'com';
console.log(varCom);
alert(varCom);
document.write(varCom);

document.write(', ');

let varUA = 'ua';
console.log(varUA);
alert(varUA);
document.write(varUA);

document.write(', ');

let firstDigit = 1;
console.log(firstDigit);
alert(firstDigit);
document.write(firstDigit);

document.write(', ');

let secondDigit = 10;
console.log(secondDigit);
alert(secondDigit);
document.write(secondDigit);

document.write(', ');

let thirtDigit = -999;
console.log(thirtDigit);
alert(thirtDigit);
document.write(thirtDigit);

document.write(', ');

let fourDigit = 123;
console.log(fourDigit);
alert(fourDigit);
document.write(fourDigit);

document.write(', ');

let fiveDigit = 3.14;
console.log(fiveDigit);
alert(fiveDigit);
document.write(fiveDigit);

document.write(', ');

let sixDigit = 2.7;
console.log(sixDigit);
alert(sixDigit);
document.write(sixDigit);

document.write(', ');

let sevenDigit = 16;
console.log(sevenDigit);
alert(sevenDigit);
document.write(sevenDigit);

document.write(', ');

let booleanTrue = true;
console.log(booleanTrue);
alert(booleanTrue);
document.write(booleanTrue);

document.write(', ');

let booleanFalse = false;
console.log(booleanFalse);
alert(booleanFalse);
document.write(booleanFalse);

document.write('<br>');
document.write('<br>');

//2. - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

document.write('2. - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення. ' + '<br>' +
    '  Вивести кожну змінну за допомогою: console.log , alert, document.write:' + '<br>' + 'result: ');

alert('2. - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення. ' + '<br>' +
    '  Вивести кожну змінну за допомогою: console.log , alert, document.write:')

varHello = 'goodbye';

console.log(varHello);
alert(varHello);
document.write(varHello);

document.write(', ');

varOwu = 'uwo'
console.log(varOwu);
alert(varOwu);
document.write(varOwu);

document.write(', ');

varCom = 'MOC';
console.log(varCom);
alert(varCom);
document.write(varCom);

document.write(', ');

varUA = 'aU';
console.log(varUA);
alert(varUA);
document.write(varUA);

document.write(', ');

firstDigit = 2;
console.log(firstDigit);
alert(firstDigit);
document.write(firstDigit);

document.write(', ');

secondDigit = 10 + 10;
console.log(secondDigit);
alert(secondDigit);
document.write(secondDigit);

document.write(', ');

thirtDigit = -999 - 1;
console.log(thirtDigit);
alert(thirtDigit);
document.write(thirtDigit);

document.write(', ');

fourDigit = fourDigit * 3;
console.log(fourDigit);
alert(fourDigit);
document.write(fourDigit);

document.write(', ');

fiveDigit = fiveDigit / 3;
console.log(fiveDigit);
alert(fiveDigit);
document.write(fiveDigit);

document.write(', ');

sixDigit = sixDigit + fiveDigit;
console.log(sixDigit);
alert(sixDigit);
document.write(sixDigit);

document.write(', ');

sevenDigit = sevenDigit * fourDigit;
console.log(sevenDigit);
alert(sevenDigit);
document.write(sevenDigit);

document.write(', ');

booleanTrue = 'true-string';
console.log(booleanTrue);
alert(booleanTrue);
document.write(booleanTrue);

document.write(', ');

booleanFalse = false + true;
console.log(booleanFalse);
alert(booleanFalse);
document.write(booleanFalse);

document.write('<br>');
document.write('<br>');

// 3. - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

document.write('3. - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. ' + '<br>' +
    '  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років: ' + '<br>' + 'result: ');

alert('3. - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. ' + '<br>' +
    '  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років:')

let isYourFirstName = prompt('Enter your Name');
let isYourSurname = prompt('Enter your surname');
let isYourAge = prompt('How old are you?');

document.write('Вітаю ' + isYourFirstName + ' ' + isYourSurname + '. Тобі ' + isYourAge + ' років.');

document.write('<br>');
document.write('<br>');

// 4. - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

document.write('4. - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація): ' + '<br>' + 'result: ');

alert('4. - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація): ')

let someVar = isYourFirstName + isYourSurname + isYourAge;

document.write(someVar);

document.write('<br>');
document.write('<br>');

// 5.- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

document.write('5.- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль: ' + '<br>' + 'result: ');

alert('5.- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль: ');

firstDigit = prompt('Enter the first digit');
secondDigit = prompt('Enter the second digit');
thirtDigit = prompt('Enter the thirt digit');

document.write(firstDigit + ', ' + secondDigit + ', ' + thirtDigit + ', ' + fourDigit);

console.log(Math.floor(firstDigit));
console.log(Math.floor(secondDigit));
console.log(Math.floor(thirtDigit));

document.write('<br>');
document.write('<br>');

// 6. - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

document.write('6. - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль: ' + '<br>' + 'result: ');

alert('6. - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль: ');

firstDigit = prompt('Enter the first digit');
secondDigit = prompt('Enter the second digit');
thirtDigit = prompt('Enter the thirt digit');
fourDigit = prompt('Enter the fourth digit');

fiveDigit = parseInt(firstDigit, 10) + parseInt(secondDigit, 10) + parseInt(thirtDigit, 10) + parseInt(fourDigit, 10);

document.write(firstDigit + ' + ' + secondDigit + ' + ' + thirtDigit + ' + ' + fourDigit  + ' = ' + fiveDigit);

console.log(fiveDigit);

document.write('<br>');
document.write('<br>');

//7. - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.

document.write('7. - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat: ' + '<br>' +
    '     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль:' + '<br>' + 'result: ');

alert('7. - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat: ' + '<br>' +
    '     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль:');

firstDigit = prompt('Enter the first digit');
secondDigit = prompt('Enter the second digit');
thirtDigit = prompt('Enter the thirt digit');

fourDigit = parseFloat(firstDigit) + parseFloat(secondDigit) + parseFloat(thirtDigit);

document.write(firstDigit + ' + ' + secondDigit + ' + ' + thirtDigit + ' = ' + fourDigit);

console.log(fourDigit);

document.write('<br>');
document.write('<br>');

//8. - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

document.write('8. - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль:' + '<br>' + 'result: ');

alert('8. - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль:');

firstDigit = prompt('Enter the first digit');
secondDigit = prompt('Enter the second digit');
thirtDigit = prompt('Enter the thirt digit');

fourDigit = Math.round(firstDigit) + Math.round(secondDigit) + Math.round(thirtDigit);

document.write('integer(' + firstDigit + ') + integer(' + secondDigit + ') + integer(' + thirtDigit + ') = ' + fourDigit);

console.log(fourDigit);

document.write('<br>');
document.write('<br>');

//9. - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25

document.write('9.  - За допомогою prompt() отримати 2 цілих числа.' + '<br>' +
    '  Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.' + '<br>' +
    '   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.' + '<br>' +
    '   Example. Число 1 = 5. Число 2 = 2. Результат = 25' + '<br>' + 'result: ');

alert('9.  - За допомогою prompt() отримати 2 цілих числа. ' +
    '  Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню. ' +
    '   За допомогою Math.pow (Google) піднести перше число в степінь другого числа. ' +
    '   Example. Число 1 = 5. Число 2 = 2. Результат = 25');

firstDigit = prompt('Enter the first digit');
secondDigit = prompt('Enter the second digit');

thirtDigit = Math.pow(parseInt(firstDigit), parseInt(secondDigit));

document.write(firstDigit + ' в степені' + secondDigit + ' = ' + thirtDigit);

console.log(thirtDigit);

document.write('<br>');
document.write('<br>');
