// Находим все кнопки с классом 'city__button'
const buttons = document.querySelectorAll('.city__button');

// Находим элемент изображения, который нужно менять
const imageElement = document.querySelector('.remote__img');

// Проходим по каждой кнопке
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        buttons.forEach(btn => btn.classList.remove('city__button-active'));

        // Добавляем активный класс текущей кнопке
        button.classList.add('city__button-active');

        // Меняем изображение в зависимости от кнопки
        if (button.id === 'spbButton') {
            imageElement.src = 'img/spb.png';
        } else if (button.id === 'moscowButton') {
            imageElement.src = 'img/msk.png';
        }
    });
});

// Массив с путями к изображениям
const images = ['img/studio1.png', 'img/studio2.png', 'img/studio3.png'];

// Индекс текущего изображения
let currentIndex = 0;

// Функция для смены изображений
function changeImage() {
    // Получаем элемент по id
    const imgElement = document.getElementById('studioImage');
    
    // Меняем src изображения на следующее
    imgElement.src = images[currentIndex];
    
    // Увеличиваем индекс, сбрасывая его до 0, если достигнут конец массива
    currentIndex = (currentIndex + 1) % images.length;
}

// Запускаем функцию смены изображений каждые 5 секунд (5000 мс)
setInterval(changeImage, 5000);