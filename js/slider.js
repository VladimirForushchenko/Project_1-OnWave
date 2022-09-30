'use strict'

$('.header__slider_items').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   infinite: true,
   speed: 1500,
   arrows: false,
   dots: true
});

$('.arrivals__slider').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   arrows: true,
   infinite: true,
   speed: 1000,
   responsive: [{
      breakpoint: 769,
      settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
      }
   }, {
      breakpoint: 480,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         // dots: true
      }
   }]
});

$('.partners__slider').slick({
   slidesToShow: 8,
   slidesToScroll: 1,
   arrows: true,
   infinite: true,
   speed: 1000,
   responsive: [{
      breakpoint: 769,
      settings: {
         slidesToShow: 5,
         slidesToScroll: 1,
      }
   }, {
      breakpoint: 480,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         // dots: true
      }
   }]
});