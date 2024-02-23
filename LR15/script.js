let bodyChildren = document.body.children;

console.log("Потомки тега <body>:", bodyChildren);

if (bodyChildren.length >= 2) {
  console.log("Тип узла для первого элемента:", bodyChildren[0].nodeType);
  console.log("Тип узла для второго элемента:", bodyChildren[1].nodeType);
}

//2
let monthList = document.getElementById("Months");
let table = document.createElement("table");
let tbody = document.createElement("tbody");

for (let i = 0; i < monthList.children.length; i++) {
  let mName = monthList.children[i].textContent;
  let row = tbody.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.textContent = i + 1;
  cell2.textContent = mName;
}

table.appendChild(tbody);
document.body.appendChild(table);

//3
let monthList1 = document.getElementById("Months");
let newMonthItem = document.createElement("li");
newMonthItem.id = "li13";
newMonthItem.textContent = "13-го месяца не бывает";
monthList1.appendChild(newMonthItem);

//4
let listPoint13 = document.getElementById("li13");

let daysOfWeekList = document.createElement("ul");

let daysOfWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

daysOfWeek.forEach(function (day) {
  let listItem = document.createElement("li");
  listItem.textContent = day;
  daysOfWeekList.appendChild(listItem);
});

listPoint13.insertAdjacentElement("afterend", daysOfWeekList);
//5
function show() {
  let mainshow = document.getElementById("main");
  let headings = mainshow.querySelectorAll("h1, h2, h3, h4, h5, h6");
  let text1 = "";
  headings.forEach(function (head) {
    text1 += head.textContent;
  });
  console.log(text1);
}

//6
function updateLabelColor() {
  let yesLabel = document.getElementById("yesLabel");
  let noLabel = document.getElementById("noLabel");

  let yesRadio = document.querySelector('input[value="yes"]');
  let noRadio = document.querySelector('input[value="no"]');

  if (yesRadio.checked) {
    noLabel.classList.add("inactive-label");
    yesLabel.classList.remove("inactive-label");
    yesLabel.classList.add("active-label");
  } else if (noRadio.checked) {
    yesLabel.classList.add("inactive-label");
    noLabel.classList.remove("inactive-label");
    noLabel.classList.add("active-label");
  }
}

//7
function showResult() {
  let quizForm = document.getElementById("viborForm");
  let resultContainer = document.getElementById("result");
  let correctAnswers = {
    q1: "light",
  };
  let userAnswers = {};

  for (let i = 0; i < quizForm.elements.length; i++) {
    let element = quizForm.elements[i];
    if (element.type === "radio" && element.checked) {
      userAnswers[element.name] = element.value;
    }
  }
  let incorrectAnswers = [];
  for (let question in userAnswers) {
    if (userAnswers.hasOwnProperty(question)) {
      if (userAnswers[question] !== correctAnswers[question]) {
        incorrectAnswers.push(question);
      }
    }
  }

  if (incorrectAnswers.length === 0) {
    resultContainer.innerHTML =
      "Поздравляем! Вы правильно ответили на все вопросы.";
  } else {
    resultContainer.innerHTML =
      "Вы ошиблись в следующих вопросах: " + incorrectAnswers.join(", ");
  }
  resultContainer.style.display = "block";
}
