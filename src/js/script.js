function showGift(index) {
    const buttons = document.querySelectorAll('.gift__button');
    const images = document.querySelectorAll('.gift__img');

    // Скрываем кнопку и показываем соответствующую картинку
    buttons[index].style.display = 'none';
    images[index].style.display = 'block';

    // Запуск анимации фейерверка
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};