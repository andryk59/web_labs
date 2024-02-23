//1
function toggleStyles() {
  let style1 = document.getElementById('style1');
  let style2 = document.getElementById('style2');

  if (style1.disabled) {
    style1.removeAttribute('disabled');
    style2.setAttribute('disabled', 'true');
  } else {
    style2.removeAttribute('disabled');
    style1.setAttribute('disabled', 'true');
  }
}

//2

function changeOpacity() {
  let list = document.getElementById('list2');
  let items = list.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    let currentOpacity = items[i].style.opacity

    currentOpacity -= 0.1;

    if (currentOpacity < 0) {
      currentOpacity = 1;
    }

    items[i].style.opacity = currentOpacity;
  }
}

//3

function down() {
  let down = document.querySelector('.godown');
  down.style.display = (down.style.display === 'block') ? 'none' : 'block';
}