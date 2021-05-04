require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import  tabs   from './modules/tabs';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  modal  from './modules/modal';
import  slider from './modules/slider';
import  calc   from './modules/calc';
import  forms  from './modules/forms';
import  nav from './modules/nav';
import {callModalWindow} from './modules/modal';

window.addEventListener('DOMContentLoaded', ()=> {

    const callInTime = setTimeout(() => callModalWindow('.modal', callInTime), 100000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-05-20');
    cards();
    modal('[data-modal]', '.modal', callInTime);
    slider({
        container: '.offer__slider',
        nextArrow:'.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        slide: '.offer__slide',
        field: '.offer__slider__inner'
    });
    calc();
    forms('form', callInTime);
    nav();
});