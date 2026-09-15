const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let cur = 0;

function showSlide(i) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
}

dots.forEach((dot, idx) => dot.onclick = () => showSlide(idx));
setInterval(() => showSlide(cur + 1), 6000);