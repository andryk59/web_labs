//1
function updateOutput(value) {
  document.getElementById("output").textContent = value;
}

//2
function cancelLink(event) {
  event.preventDefault();
  console.log("Переход по ссылке отменен");
}
function logEvent(event) {
  console.log("Событие типа: " + event.type);
}

let link = document.getElementById("customLink");

link.addEventListener("click", cancelLink);

link.addEventListener("mouseover", logEvent);
link.addEventListener("mouseout", logEvent);
link.addEventListener("focus", logEvent);
link.addEventListener("blur", logEvent);

//3
function handleEvent(eventType, elementId, eventPhase) {
  console.log("Событие " + eventType + " на элементе " + elementId + " на стадии " + eventPhase);
}

function addEventHandlers(elementId, eventType) {
  let element = document.getElementById(elementId);

  element.addEventListener(eventType, function(event) {
      handleEvent(eventType, elementId, "всплытия");
  });


  element.addEventListener(eventType, function(event) {
      handleEvent(eventType, elementId, "перехвата");
  }, true);
}

for (let i = 1; i <= 5; i++) {
  let elementId = "element" + i;
  addEventHandlers(elementId, "click");
  addEventHandlers(elementId, "mouseover"); 
}

function triggerUserEvent() {
  let eventType = prompt("Введите тип события (например, 'click' или 'mouseover'):");
  let elementId = prompt("Введите id элемента, на котором нужно вызвать событие:");
  
  let element = document.getElementById(elementId);
  if (element) {
      let event = new Event(eventType);
      element.dispatchEvent(event);
  } else {
      alert("Элемент с id '" + elementId + "' не найден.");
  }
}

let triggerButton = document.createElement("button");
triggerButton.textContent = "Сгенерировать пользовательское событие";
triggerButton.addEventListener("click", triggerUserEvent);
document.body.appendChild(triggerButton);