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
  noSwiping: false,
  draggable:3,
  loop:true,




});
