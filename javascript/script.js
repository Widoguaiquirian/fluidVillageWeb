"use strict";
const list = document.querySelector(".gallery-carousel__img-container--list");
const imgs = Array.from(list.children);

const nextButton = document.querySelector(".gallery-carousel__btn--right");
const prevButton = document.querySelector(".gallery-carousel__btn--left");
const carouselNav = document.querySelector(".gallery-carousel__dots");
const dots = Array.from(carouselNav.children);

// img width
const imgWidth = imgs[0].getBoundingClientRect().width;
console.log(imgWidth);
