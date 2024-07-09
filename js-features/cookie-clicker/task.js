//получаем ссылки
const cookieWidth = document.getElementById("cookie");
const cookiCounter = document.getElementById("clicker__counter");
const cookiSpeed = document.getElementById("clicker__speed");

//функция при клике на печенке
function clickCookie() {
    // счетчик кликов увеличиваем на 1
    cookiCounter.textContent++;

    //изменение ширины
    if (cookiCounter.textContent % 2 === 0) {
        cookieWidth.width -= 20;
      } else {
        cookieWidth.width += 20;
      }

    //создаем объект дата
    let date = new Date();
    //получаем секунды
    let seconds = date.getSeconds();
    //рассчитываем скорость клика
    let speed = Number(cookiCounter.textContent) / seconds;
    cookiSpeed.textContent = speed;
}

cookieWidth.onclick = clickCookie;

//Вариант от преподавателя
/*
const cookie = document.getElementById('cookie');
const countClick = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let timeClick;

cookie.onclick = () => {
  //устанавливаем размер при клике и накапливаем клики
  cookie.width = ++countClick.textContent % 2 ? 250 : 200;
  //расчитываем скорость клика
  const speedFormated = (1 / ((Date.now() - timeClick) / 1000)).toFixed(2);
  timeClick ? speed.textContent = speedFormated : null;
  timeClick = Date.now();
}
*/