//Определим переменную newwin
let newwin;
//Зададим функцию winop, которая создает окно newwin по нажатию кнопки
function winop()
{
     window.open("", "My Window", "width=200,height=200,toolbar=no,menubar=no,status=yes,location=no,scrollbars=yes");
}

function winop1()
{
    window.open("", "My Window", "width=400,height=400,toolbar=yes,menubar=yes,status=yes,location=no,scrollbars=no");
}

function goBack(){
    window.history.back();
}
function showHeight(){
    let heightw = window.innerHeight;
    alert(heightw);
}

function showBrowserInfo() {
    let browserInfoDiv = document.getElementById('Allinfo');
    browserInfoDiv.innerHTML = '<p>Ширина экрана: ' + window.innerWidth + ' пикселей</p>' +
                               '<p>Высота экрана: ' + window.innerHeight + ' пикселей</p>' +
                               '<p>Имя браузера и версия: ' + navigator.userAgent + '</p>';
                               
  }

  window.setInterval(showBrowserInfo,10000);

  window.onload = showBrowserInfo;
