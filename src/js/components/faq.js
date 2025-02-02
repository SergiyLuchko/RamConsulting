import Swiper from "swiper";
import {  Pagination } from "swiper/modules";
Swiper.use([Pagination]);

const swiper = new Swiper(".faq-slider", {

  loop:false,
  spaceBetween: 20,

  pagination: {
    el: ".faq-slider__pagination",
    type: "bullets",
    clickable: true,
  },  breakpoints: {
    // // when window width is >= 320px
    320: {
      slidesPerView: 1,

    },
    725: {
      slidesPerView: 2,

    },


    // when window width is >= 800px
    885: {
      slidesPerView: 3,

    }
  }

});
