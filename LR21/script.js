let jsonContent = '{"items": ["Элемент 1", "Элемент 2", "Элемент 3"]}';

let listData = JSON.parse(jsonContent);


let ulElement = document.createElement('ul');

listData.items.forEach(function(item) {
    let liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
});

document.body.appendChild(ulElement);

$(document).ready(function() {
    console.log($('body').children());
});

//5


let tableData = [
  ["", "Present", "Past", "Future"],
  ["+", "i dance", "i danced", "i will dance"],
  ["-", "i dont dance", "i didnt dance", "ill not dance"],
  ["?", "do i dance?", "did i dance", "will i dacne"]
];


let timeDescriptions = {
  "Present": "Текущее время",
  "Past": "Прошедшее время",
  "Future": "Будущее время"
};


$(document).ready(function() {

  let table = $('<table>').addClass('my-table');


  tableData.forEach(function(rowData, rowIndex) {
      let row = $('<tr>').appendTo(table);

      rowData.forEach(function(cellData, columnIndex) {
          let cell = $('<td>').text(cellData).appendTo(row);

          
          if (rowIndex === 0 || columnIndex === 0) {
              cell.addClass('salad-color');

             
              cell.hover(function() {
                
                  let tooltip = $('#tooltip');
                  if (!tooltip.length) {
                      tooltip = $('<div>').attr('id', 'tooltip').appendTo('body');
                  }

             
                  tooltip.text(timeDescriptions[cell.text()]);

                  
                  let offset = cell.offset();
                  tooltip.css({
                      top: offset.top + cell.outerHeight(),
                      left: offset.left
                  });
              }, function() {
                  
                  $('#tooltip').remove();
              });
          } else {
              cell.addClass('turquoise-color');
          }
      });
  });

  $('body').append(table);
  table.addClass('my-table');
});

//8
$(document).ready(function() {
 
  $('#submitButton').click(function() {
     
      let formIsValid = true;

      $('form input').each(function() {
          if ($(this).val() === '') {
              formIsValid = false;
              return false; 
          }
      });

      if (!formIsValid) {
          $('#warningMessage').show();
      } else {
          $('#warningMessage').hide();
      }
  });
});

//9 
$(document).ready(function() {
  $('#toggleContainer').click(function() {
      $('.toggle-handle').toggleClass('on');
      let newText = $('.toggle-handle').hasClass('on') ? 'On' : 'Off';
      $('.toggle-text').text(newText);
  });
});