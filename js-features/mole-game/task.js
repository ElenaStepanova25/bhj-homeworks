//функция для создания для каждой лунки отдельной переменной
function getHole(index) {
	return document.getElementById(`hole${index}`);
}

// Получаем ссылки
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

//запускаем цикл 
for (let i = 1; i <= 9; i++) {
    getHole( i ).onclick = function () {
    let hole = this;
    if (hole.className.includes( 'hole_has-mole' )) {
        //счетчик убитых кротов
        dead.textContent ++;
    } else {
        //счетчик промахов
        lost.textContent ++;
    };
    //вывод результата и обнуление счетчиков
    if (lost.textContent == 5) {
        alert("ВЫ ПРОИГРАЛИ");
        lost.textContent = 0;
        dead.textContent = 0;
    } else if (dead.textContent == 10) {
    alert("ВЫ ПОБЕДИЛИ");
    lost.textContent = 0;
    dead.textContent = 0;
}
    }
};