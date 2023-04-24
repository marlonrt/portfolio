$('.projetos-carousel').slick({
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
  nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});