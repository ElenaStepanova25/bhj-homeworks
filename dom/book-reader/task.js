const fontControls = document.querySelectorAll(".book__control_font-size .font-size");
const bookContent = document.querySelector(".book__content");

// изменение размера шрифта
function changeFontSize(size) {
	bookContent.classList.remove("book_fs-small", "book_fs-big");
	bookContent.classList.add(`book_fs-${size}`);
}

// обработчик событий для изменения размера шрифта
fontControls.forEach(control => {
	control.addEventListener("click", function (event) {
		event.preventDefault();
		const size = this.getAttribute("data-size");
		changeFontSize(size);
		// убираем класс font-size_active у всех элементов
		fontControls.forEach(control => control.classList.remove("font-size_active"));
		// добавляем font-size_active только текущему элементу
		this.classList.add("font-size_active");
	});
});