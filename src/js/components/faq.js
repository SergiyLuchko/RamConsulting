import Swiper from "swiper";
import {  Pagination } from "swiper/modules";
Swiper.use([Pagination]);

const swiper = new Swiper(".faq-slider", {
  slidesPerView: 3,
  loop:false,
  spaceBetween: 20,

  pagination: {
    el: ".faq-slider__pagination",
    type: "bullets",
    clickable: true,
  },

});
