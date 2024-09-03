
//smooth scroll
$("a").click(function (event) {

    if (this.hash !== "") {
  
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 1000); // primero probar con 0 y aumente de 1000 en 1000 para ver diferencia
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slides');
    const slideCount = document.querySelectorAll('.carousel-slide').length;
    let index = 0;

    function nextSlide() {
        index = (index + 1) % slideCount;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
});