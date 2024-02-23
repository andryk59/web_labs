//1
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

let bodyChildren = document.body.childNodes;
div1.innerHTML = "Дочерние узлы элемента body:<br>" + getNodeListAsString(bodyChildren);

let allElements = document.getElementsByTagName("*");
div2.innerHTML = "Все элементы документа:<br>" + getNodeListAsString(allElements);

function getNodeListAsString(nodeList) {
  let result = "";
  for (let i = 0; i < nodeList.length; i++) {
    result += nodeList[i].nodeName + "<br>";
  }
  return result;
}

//2

function createOrderedList() {
  let listContainer = document.getElementById('list');
  listContainer.innerHTML = '<ol id="myList"></ol>';
}


function addStartOrEnd(position) {
  let list = document.getElementById('myList');
  let newItem = document.createElement('li');
  newItem.textContent = 'new что-то';
  if (position === 'start') {
    list.inseSrtBefore(newItem, list.firstChild);
  } else {
    list.appendChild(newItem);
  }
}

function changeOddItemColor() {
  let listItems = document.querySelectorAll('#myList li:nth-child(odd)');
  listItems.forEach(function(item) {
    item.style.color = 'blue';
  });
}


//3
let elementById = document.getElementById('mine');

let elementBy1 = document.body.childNodes[15]; 

let elementBy2 = document.querySelector('#mine');

let areVariablesEqual = elementById === elementBy1 && elementById === elementBy2;


console.log('Equal?', areVariablesEqual);

//4
let now = 1;
    let total = 5;

    function changeImage() {
      now = (now % total) + 1;
      let imageElement = document.getElementById('galleryImage');
  
//5
    
      gsap.to(imageElement, { duration: 0.5, scale: 1.1, onComplete: function() {
        imageElement.src = 'pictures/image' + now + '.jpg';
    
        gsap.to(imageElement, { duration: 0.5, scale: 1 });
      }});
  }


  //6

  let linkById = document.getElementById('myLink');

  function changeLinkSrc(newSrc) {

    linkById.href = newSrc;
  }

  //7
  let table = document.createElement('table');

    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let headerCell1 = document.createElement('th');
    let headerCell2 = document.createElement('th');

    headerCell1.textContent = 'Заголовок 1';
    headerCell2.textContent = 'Заголовок 2';

    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);

    thead.appendChild(headerRow);

    table.appendChild(thead);
    let tbody = document.createElement('tbody');


    for (let i = 0; i < 1; i++) {
      let row = document.createElement('tr');

      for (let j = 0; j < 2; j++) {
        let cell = document.createElement('td');
        cell.textContent = 'Ячейка ' + (i + 1) + '-' + (j + 1);
        row.appendChild(cell);
      }

      tbody.appendChild(row);
    }

    table.appendChild(tbody);


    let tableContainer = document.getElementById('table');
    tableContainer.appendChild(table);