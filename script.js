document.addEventListener('DOMContentLoaded', () => {
    // 1. Главный слайдер поверху статичного фона (смена каждые 5 секунд)
    const slides = document.querySelectorAll('.hero .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentHeroSlide = 0;

    function showHeroSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextHeroSlide() {
        currentHeroSlide = (currentHeroSlide + 1) % slides.length;
        showHeroSlide(currentHeroSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentHeroSlide = index;
            showHeroSlide(currentHeroSlide);
        });
    });

    setInterval(nextHeroSlide, 5000);

    // 2. Авто-слайдер в карточке MIXOL (меняет 20мл на изображение с нанесением)
    const cardSlides = document.querySelectorAll('.card-slider .card-slide');
    let currentCardSlide = 0;

    function nextCardSlide() {
        if (cardSlides.length > 1) {
            cardSlides[currentCardSlide].classList.remove('active');
            currentCardSlide = (currentCardSlide + 1) % cardSlides.length;
            cardSlides[currentCardSlide].classList.add('active');
        }
    }

    setInterval(nextCardSlide, 3500);
});
