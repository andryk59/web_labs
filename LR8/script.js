// 1
function mult(a, b = 1) {
  return a ** b;
}
console.log(mult(2, 3));

// 2
function month() {
  let month = prompt("What number from 1 to 12 do u prefer?");
  return month;
}

function ret_month(a){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    alert(months[a-1]);
}
ret_month(month());

// 3
let numbers = [1, 2, 3, 4, 65, 4, 54, 2, 14, 15, 16, 6, 34]
function max_mass(array){
    return Math.max.apply(null, array);;
}
alert(max_mass(numbers));

function alert_num(num){
    if (num < 100){
        alert("<100")
    }
    else{
        alert(">100")
    }
}

alert_num(max_mass(numbers));

//4 


