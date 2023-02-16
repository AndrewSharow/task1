// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    const select = event.target;
    const value = select.value;
    document.body.style.backgroundColor = value;
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = 'change';
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
// ибо select являеться моделью со своими атрибутами, и из них мы можем узнать, какой чейчас выбран