//создаем массив, содержащий все элементы, ииеющие класс "dropdown"
const dropdownList = Array.from(document.getElementsByClassName(`dropdown`));


for (let i = 0; i < dropdownList.length; i++) {
    /// Получаем элемент с классом "dropdown__value" и список ul
	const elValue = dropdownList[i].querySelector(`div.dropdown__value`);
	const ulList = dropdownList[i].querySelector(`ul.dropdown__list`);
    //обработчик событий для элементов с классом "dropdown__value"
	elValue.addEventListener(`click`, upClose);

    // Функция для проверки, содержит ли ulList класс "dropdown__list_active"
	function upClose() {
		ulList.classList.contains(`dropdown__list_active`) ? ulList.classList.remove(`dropdown__list_active`) : ulList.classList.add(`dropdown__list_active`);
	}

    //преобразуем в массив элементы с классом "dropdown__link"
	const liList = Array.from(ulList.querySelectorAll(`.dropdown__link`));

	for (let i = 0; i < liList.length; i++) {
        // создаем обработчик событий для клика по элементу li
		liList[i].onclick = choice;

		function choice() {
            // Изменяем текстовое содержимое elValue на текстовое содержимое li
			elValue.textContent = liList[i].textContent;
            // Убираем класс "dropdown__list_active" у ulList
			ulList.classList.remove(`dropdown__list_active`);
			return false;
		}
	}
}