/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
console.log(" Задание 1:");
let 
townname="Kyiv", 
country="Ukraine", 
townnaselenie=2500, 
stadion=true;

console.log(`площадь ${townname}` );
console.log(`В какой стране находится этот город ${country}`);
console.log(`Численность населения ${townnaselenie}`);
console.log(`Есть ли футбольный стадион ${stadion}`);



/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
console.log(" Задание 2:");
let 
visota=40,
wirina=70,
plowad=visota*wirina;
console.log(`высота ${visota} ширина ${wirina}` );
console.log(`площадь ${plowad}`); 
/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
console.log(" Задание 3:");
let time =2 ,  
speedOfFirst = 95, 
speedOfSecond = 114, 
distance = speedOfFirst*time + speedOfSecond*time;
console.log(" расстояние между городами " + 
distance);

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
console.log(" Задание 4:");
const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber <20)
{
    console.log(" randomNumber меньше 20");
}
else if(randomNumber >50)
{
    console.log(" randomNumber больше 50");
}
else{
    console.log(" randomNumber больше 20, и меньше 50");
}
/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

console.log(" Задание 5:");
const randomNumber2 = Math.floor(Math.random() * 100);
 
switch(true){    //  вот тут я долго мучался  -- в чатике помогли. в видео такого небыло
    case randomNumber2<20:
        console.log(" randomNumber меньше 20");
    break;
    case randomNumber2>50:
        console.log(" randomNumber больше 50");
    break;
    default:
        console.log(" randomNumber больше 20, и меньше 50"); 
} 
 