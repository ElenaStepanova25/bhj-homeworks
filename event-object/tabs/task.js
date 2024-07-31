const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");
// Для каждой вкладки устанавливаем клик, с помощью метода перебора массивов
tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        // Удаляем класс активной вкладки
        tabs.forEach(tab => tab.classList.remove("tab_active"));
        // Создаем класс активной вкладки, на которую кликнули
        this.classList.add("tab_active");
        // Убираем содержимое вкладок
        tabContents.forEach(content => content.style.display = "none");
        // Отображаем содержимое вкладки, на которую нажали
        tabContents[index].style.display = "block";
    });
});