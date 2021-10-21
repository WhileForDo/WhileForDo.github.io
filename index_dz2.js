/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
    
*/
console.log(" Задание 1:");

for (let i=10; i<50;i++){ 
    if(i%2==0)
    console.log( i);
}
console.log(" ------------------------ ");

/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/
console.log(" Задание 2:");

let Person ={
    firstName : "Василий",
    lastName: "Пупкинской",
    age : 46,
    pet : true 
}
console.log(Person);
console.log(" ------------------------ ");
/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал,',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ]

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/
console.log(" Задание 3:");
 
const array = [
    'я в Симбирск,',                  
    'в трактире.',                    
    'с утра',                         
    'В ту же ночь',                   
    'Я остановился',                  
    'для закупки',                    
    'что и было поручено Савельичу.', 
    'приехал,',                       
    'где должен был',                 
    'нужных вещей',                   
    'отправился по лавкам',           
    'пробыть сутки',                  
    'Савельич'                        
]; 

console.log(" Я тут не понел, нужно массив восстановить до оригинала или просто циклом всё");
console.log(" собрать в одну строку. поэтому сделал и так и эдак");
console.log(" ============================================");
 
let result =    array[3] + array[7]+array[0]+array[8]+
                array[11]+array[5]+array[9]+array[6]+array[4]+array[1]+
                array[12]+array[2]+array[10];
console.log(result);
let result2="";

for(let i=0; i<array.length; i++){
    result2+=array[i];
}
 console.log(result2);
 
 
console.log(" ------------------------ ");
/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/
console.log(" Задание 4:");
function GetFullName(firstName,lastName){
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

GetFullName(Person.firstName, Person.lastName);
console.log(" ------------------------ ");
/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/
console.log(" Задание 5:");
let number_start    = 20,
    number_end      = 67;
while(number_start++ < number_end){
    if(number_start % 2 != 0)
    {
        console.log(number_start);
    } 
}
console.log(" ------------------------ ");