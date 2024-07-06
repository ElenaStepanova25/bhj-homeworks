let startTimer = document.getElementById("timer");
let timeValue = parseInt(startTimer.textContent);
startTimer.textContent = "00" + ":" + "00" + ":" + timeValue;

let timerId = setInterval(function() {
    //обратный отсчет
    timeValue--;
    //обнуляем год, месяц, дату, час, минуты
    let date = new Date(0, 0, 0, 0, 0, timeValue);
    //получаем значение, преобразовываем в строку, форматируем дату
    hours = date.getHours().toString().padStart(2,0);
    minutes = date.getMinutes().toString().padStart(2,0);
    seconds = date.getSeconds().toString().padStart(2,0);
    
    startTimer.textContent = `${hours}:${minutes}:${seconds}`;
 
    //при достижении значения 0 выводим сообщение, а после переходим на яндекс дзен
    // указываем шаг таймера 1 секунда
    if (timeValue === 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
        window.location.href = "https://dzen.ru/?yredirect=true";
    }
  }, 1000);