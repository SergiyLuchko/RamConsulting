import Swiper from "swiper";
import {  Pagination } from "swiper/modules";
Swiper.use([Pagination]);

const swiper = new Swiper(".hero-slider", {
  slidesPerView: "1",
  loop:false,
  pagination: {
    el: ".hero-slider__pagination",
    type: "bullets",
    clickable: true,
  },

});

const swiper1 = new Swiper(".hero-mini", {
  slidesPerView:4,
  spaceBetween: 20,
  druggable:true,


  loop:false,


  breakpoints: {
    // // when window width is >= 320px
    320: {
      slidesPerView: 2,

    },


    // when window width is >= 800px
    800: {
      slidesPerView: 4,

    }
  }

});
