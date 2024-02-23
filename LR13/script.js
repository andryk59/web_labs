//#1

let date = new Date();
    let zima = ["январь", "февраль, декабрь"];
    let leto = ["июнь", "июнь", "август"];
    let vesna = ["март", "апрель", "май"];
    let osen = ["июнь", "ноябрь", "октябрь"];
if(date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11){
    alert(zima);
}    
//#2

let birthday = new Date(prompt("Формат год-месяц-день"));
let mine = birthday.getTime() / 31536000000;
let date1 = date.getTime() / 31536000000;
let age = Math.floor(date1 - mine);
alert("твой возраст" + age);

//#3

let start;
const button = document.getElementById('start');
button.addEventListener('click', function(event) {
    start = new Date().getTime();  
 });

const button1 = document.getElementById('end');
button1.addEventListener('click', function(event) {
let end = new Date().getTime();
let duration = (end - start) / 1000;
alert(duration);
});

//#4

let numbers = [15, 13, 3, 8, 100, -1, 15, 7];


let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]; 
    }
}

alert("Максимальный элемент в массиве: " + max);


let stroka = "я не могу в это поверить";
let result = stroka.substring(0,5);
alert(result);

//#5

Number.prototype.isODD = function() {
   
    return this % 2 == 0;
};


let number1 = 5;
let number2 = 10;

alert(number1.isODD()); 
alert(number2.isODD()); 

//#6

function digit(input) {
    
    let digitRegex = /^\d/;
    

    return digitRegex.test(input);
  }
  

  let String1 = "123abc";
  let String2 = "abc123";
  let String3 = "1abc123";
  alert(digit(String1)); 
  alert(digit(String2)); 
  alert(digit(String3));