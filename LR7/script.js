let numbers = [1, 2, 3];
let names = new Array("andrey", "yoayo");
let cnum = Array.of(4, 5, 6);
summary = numbers.concat(names, cnum);
document.write(summary);
for (i = 0; i < names.length; i++) {
  document.write(i + "-" + names[i] + "\n");
}
numbers.splice(2);
document.write(numbers);
delete numbers[1];
document.write(numbers);
let sum = 0;
let array = [1, 2, 3, 4]
for (i=0; i < array.length; i++){
    sum += array[i];

}
console.log(sum / array.length);
let qwe = array.toString();
console.log(qwe);