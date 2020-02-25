/* индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* функция увеличивает индекс на 1, показывает следующй*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* функция уменьшяет индекс на 1, показывает предыдущий*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* функция увеличивает индекс на 1, для авто пролистывания */
function nextSlide(n) {
    showSlides(slideIndex += 1);
}
/* авто пролистывание, setInterval позволяет вызывать функцию регулярно, нагуглил случайно */
var slideInterval = setInterval(nextSlide, 2000);

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item"); //querySelectorAll получаем все слайды из контейнера
    var mini = document.getElementsByClassName("slider-mini_item"); //querySelectorAll получаем все МИНИ слайды из контейнера 
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < mini.length; i++) {
        mini[i].className = mini[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    mini[slideIndex - 1].className += " active";
}
