var td_elem = document.getElementsByTagName("table")[0];
console.log(td_elem);
td_elem.classList.add("cl1");
function mouseover(el) {
  el.classList.remove("cl5");
  el.classList.add("cl2");
}
function mouseout(el) {
  el.classList.remove("cl2");
  el.classList.add("cl5");
}
function dblclick(el){
    el.classList.add("cl3");
}
var sum = 0;
function counter(el){
    sum = sum + Number(el.value);
}
function result(){
    alert(sum);
    sum = 0;
}
/*
var myName = prompt("what is your name", "")
if (myName){
alert("Hello, ПР" + myName);
}
else{
    alert("Hello, stranger"); 
}
*/
var bigCount = 15;
function bigger(el){
    bigCount++
    el.style.fontSize = bigCount + "px";
    el.style.color = "black";
}