/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(6));

// requireAll(require.context('./', true, /\.(js|less|png|jpe?g|gif)$/));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(5);

__webpack_require__(0);

__webpack_require__(18);

// Анимация всплытия элементов ↓↓↓

// import '@/vue/index';
var observerSlideUp = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up');
    }
  });
});

observerSlideUp.observe(document.querySelector('.price__menu'));
observerSlideUp.observe(document.querySelector('.size-type__text h2'));
observerSlideUp.observe(document.querySelector('.size-type__text p'));
observerSlideUp.observe(document.querySelector('.advantages__items'));

// Анимация поворота знака ↓↓↓

var observerRotateY = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotateY');
    }
  });
});

observerRotateY.observe(document.querySelector('.size-type__sign'));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
// require("expose-loader?$!expose-loader?jQuery!jquery");

// flexslider
// require("./flexslider2/flexslider.css")
// require("expose-loader?flexslider!./flexslider2");

// parallax
// require("expose-loader?parallax!jquery-parallax.js");

// plax параллакс эффект
// require("plax");

// wow.js
// require("expose-loader?WOW!wow.js");

// animate.css
// require("animate.css/animate.css");

// blueimp gallery https://github.com/blueimp/Gallery
// require("blueimp-gallery/css/blueimp-gallery.min.css");
// require("expose-loader?blueimp.Gallery!blueimp-gallery/js/blueimp-gallery.min.js");


// slick-carousel
// require("slick-carousel/slick/slick.css");
// require("slick-carousel/slick/slick-theme.css");
// require("expose-loader?slick!slick-carousel");

// swiper slider
// require("swiper/dist/css/swiper.css");
// require("expose-loader?Swiper!swiper/dist/js/swiper.js");

// vue.js
// import Vue from 'vue';
// window.Vue = Vue;


// magnific-popup
// require("magnific-popup/dist/magnific-popup.css");
// require("expose-loader?magnificPopup!magnific-popup/dist/jquery.magnific-popup.js");

// jquery ui slider
// require('jquery-ui-css/slider.css');
// require("expose-loader?slider!jquery-ui/slider");

// jquery ui tabs
// require('jquery-ui-css/tabs.css');
// require("expose-loader?slider!jquery-ui/tabs");

// touch support for jquery ui
// require("jquery-ui-touch-punch");

// highslide
// require("expose-loader?hs!./highslide/highslide/highslide-with-gallery.js");
// // let hs = require("./highslide/highslide/highslide-with-gallery.js");
// // window.hs = hs;
// require("./highslide/highslide/highslide.css");

// lightbox
// require("lightbox2");
// require("lightbox2/dist/css/lightbox.css");

// normalize.css
__webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.less": 7,
	"./advantages/advantages.less": 8,
	"./films/films.less": 9,
	"./footer/footer.less": 10,
	"./header/header.js": 11,
	"./header/header.less": 12,
	"./hero/hero.less": 13,
	"./index.js": 0,
	"./modal-sendrequest/modal-sendrequest.js": 14,
	"./modal-sendrequest/modal-sendrequest.less": 15,
	"./price/price.less": 16,
	"./size-type/size-type.less": 17
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Мобильное меню ↓↓↓

var navToggle = document.getElementById('nav_toggle');
var headerMenu = document.getElementById('header__menu');
var allHeaderMenuLinks = document.querySelectorAll('.header__menu a');

function navToggleFn(event) {
  event.preventDefault();
  navToggle.classList.toggle('active');
  headerMenu.classList.toggle('visible');
}

function closeNavByClickingLinks() {
  navToggle.classList.remove('active');
  headerMenu.classList.toggle('visible');
}

navToggle.addEventListener('click', navToggleFn);

allHeaderMenuLinks.forEach(function (el) {
  if (!el.classList.contains('has-dropdown')) {
    el.addEventListener('click', closeNavByClickingLinks);
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var modalSendrequest = document.querySelector('#modal-sendrequest');
var openModalSendrequest = document.querySelector('#modal-sendrequest-open');
var closeModalSendrequest = document.querySelector('#modal-sendrequest-close');

openModalSendrequest.addEventListener('click', function () {
  modalSendrequest.showModal();
});

closeModalSendrequest.addEventListener('click', function () {
  modalSendrequest.close();
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(19));

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 19;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjFkNTFlY2YzNDgxYjJkZDg3NmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVzcy9zdHlsZXMubGVzcz8wZjk1Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzIFxcLihqc3xsZXNzKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvYWJvdXQvYWJvdXQubGVzcz9lNDMwIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2FkdmFudGFnZXMvYWR2YW50YWdlcy5sZXNzPzJhZTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvZmlsbXMvZmlsbXMubGVzcz9hOWZkIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2Zvb3Rlci9mb290ZXIubGVzcz8zMmM3Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaGVhZGVyL2hlYWRlci5sZXNzP2M5NjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaGVyby9oZXJvLmxlc3M/NGI5NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9tb2RhbC1zZW5kcmVxdWVzdC9tb2RhbC1zZW5kcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9tb2RhbC1zZW5kcmVxdWVzdC9tb2RhbC1zZW5kcmVxdWVzdC5sZXNzPzZmOTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvcHJpY2UvcHJpY2UubGVzcz8zZGZjIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL3NpemUtdHlwZS9zaXplLXR5cGUubGVzcz9mMTgyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL3N2Zy1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcgXFwuc3ZnJCJdLCJuYW1lcyI6WyJyZXF1aXJlQWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIm9ic2VydmVyU2xpZGVVcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2JzZXJ2ZXJSb3RhdGVZIiwibmF2VG9nZ2xlIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXJNZW51IiwiYWxsSGVhZGVyTWVudUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdlRvZ2dsZUZuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImNsb3NlTmF2QnlDbGlja2luZ0xpbmtzIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsIiwiY29udGFpbnMiLCJtb2RhbFNlbmRyZXF1ZXN0Iiwib3Blbk1vZGFsU2VuZHJlcXVlc3QiLCJjbG9zZU1vZGFsU2VuZHJlcXVlc3QiLCJzaG93TW9kYWwiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJB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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMWQ1MWVjZjM0ODFiMmRkODc2YyIsImZ1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XG5cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4oanN8bGVzcykkLykpO1xuXG4vLyByZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKGpzfGxlc3N8cG5nfGpwZT9nfGdpZikkLykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvaW5kZXguanMiLCJpbXBvcnQgJ0AvdmVuZG9yJztcbmltcG9ydCAnQC9sZXNzL3N0eWxlcy5sZXNzJztcbi8vIGltcG9ydCAnQC92dWUvaW5kZXgnO1xuaW1wb3J0ICdAL2NvbW1vbi5ibG9ja3MvaW5kZXgnO1xuaW1wb3J0ICdAL2Fzc2V0cy9zdmcvc3ZnLXNwcml0ZSc7XG5cblxuLy8g0JDQvdC40LzQsNGG0LjRjyDQstGB0L/Qu9GL0YLQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDihpPihpPihpNcblxuY29uc3Qgb2JzZXJ2ZXJTbGlkZVVwID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzbGlkZS11cCcpO1xuICAgIH1cbiAgfSk7XG59KTtcblxub2JzZXJ2ZXJTbGlkZVVwLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlX19tZW51JykpO1xub2JzZXJ2ZXJTbGlkZVVwLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUtdHlwZV9fdGV4dCBoMicpKTtcbm9ic2VydmVyU2xpZGVVcC5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplLXR5cGVfX3RleHQgcCcpKTtcbm9ic2VydmVyU2xpZGVVcC5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZhbnRhZ2VzX19pdGVtcycpKTtcblxuXG4vLyDQkNC90LjQvNCw0YbQuNGPINC/0L7QstC+0YDQvtGC0LAg0LfQvdCw0LrQsCDihpPihpPihpNcblxuY29uc3Qgb2JzZXJ2ZXJSb3RhdGVZID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyb3RhdGVZJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5vYnNlcnZlclJvdGF0ZVkub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZS10eXBlX19zaWduJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyPyQhZXhwb3NlLWxvYWRlcj9qUXVlcnkhanF1ZXJ5XCIpO1xuXG4vLyBmbGV4c2xpZGVyXG4vLyByZXF1aXJlKFwiLi9mbGV4c2xpZGVyMi9mbGV4c2xpZGVyLmNzc1wiKVxuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/ZmxleHNsaWRlciEuL2ZsZXhzbGlkZXIyXCIpO1xuXG4vLyBwYXJhbGxheFxuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/cGFyYWxsYXghanF1ZXJ5LXBhcmFsbGF4LmpzXCIpO1xuXG4vLyBwbGF4INC/0LDRgNCw0LvQu9Cw0LrRgSDRjdGE0YTQtdC60YJcbi8vIHJlcXVpcmUoXCJwbGF4XCIpO1xuXG4vLyB3b3cuanNcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP1dPVyF3b3cuanNcIik7XG5cbi8vIGFuaW1hdGUuY3NzXG4vLyByZXF1aXJlKFwiYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3NcIik7XG5cbi8vIGJsdWVpbXAgZ2FsbGVyeSBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9HYWxsZXJ5XG4vLyByZXF1aXJlKFwiYmx1ZWltcC1nYWxsZXJ5L2Nzcy9ibHVlaW1wLWdhbGxlcnkubWluLmNzc1wiKTtcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP2JsdWVpbXAuR2FsbGVyeSFibHVlaW1wLWdhbGxlcnkvanMvYmx1ZWltcC1nYWxsZXJ5Lm1pbi5qc1wiKTtcblxuXG4vLyBzbGljay1jYXJvdXNlbFxuLy8gcmVxdWlyZShcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiKTtcbi8vIHJlcXVpcmUoXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIik7XG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9zbGljayFzbGljay1jYXJvdXNlbFwiKTtcblxuLy8gc3dpcGVyIHNsaWRlclxuLy8gcmVxdWlyZShcInN3aXBlci9kaXN0L2Nzcy9zd2lwZXIuY3NzXCIpO1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/U3dpcGVyIXN3aXBlci9kaXN0L2pzL3N3aXBlci5qc1wiKTtcblxuLy8gdnVlLmpzXG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4vLyB3aW5kb3cuVnVlID0gVnVlO1xuXG5cbi8vIG1hZ25pZmljLXBvcHVwXG4vLyByZXF1aXJlKFwibWFnbmlmaWMtcG9wdXAvZGlzdC9tYWduaWZpYy1wb3B1cC5jc3NcIik7XG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9tYWduaWZpY1BvcHVwIW1hZ25pZmljLXBvcHVwL2Rpc3QvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLmpzXCIpO1xuXG4vLyBqcXVlcnkgdWkgc2xpZGVyXG4vLyByZXF1aXJlKCdqcXVlcnktdWktY3NzL3NsaWRlci5jc3MnKTtcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP3NsaWRlciFqcXVlcnktdWkvc2xpZGVyXCIpO1xuXG4vLyBqcXVlcnkgdWkgdGFic1xuLy8gcmVxdWlyZSgnanF1ZXJ5LXVpLWNzcy90YWJzLmNzcycpO1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/c2xpZGVyIWpxdWVyeS11aS90YWJzXCIpO1xuXG4vLyB0b3VjaCBzdXBwb3J0IGZvciBqcXVlcnkgdWlcbi8vIHJlcXVpcmUoXCJqcXVlcnktdWktdG91Y2gtcHVuY2hcIik7XG5cbi8vIGhpZ2hzbGlkZVxuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/aHMhLi9oaWdoc2xpZGUvaGlnaHNsaWRlL2hpZ2hzbGlkZS13aXRoLWdhbGxlcnkuanNcIik7XG4vLyAvLyBsZXQgaHMgPSByZXF1aXJlKFwiLi9oaWdoc2xpZGUvaGlnaHNsaWRlL2hpZ2hzbGlkZS13aXRoLWdhbGxlcnkuanNcIik7XG4vLyAvLyB3aW5kb3cuaHMgPSBocztcbi8vIHJlcXVpcmUoXCIuL2hpZ2hzbGlkZS9oaWdoc2xpZGUvaGlnaHNsaWRlLmNzc1wiKTtcblxuLy8gbGlnaHRib3hcbi8vIHJlcXVpcmUoXCJsaWdodGJveDJcIik7XG4vLyByZXF1aXJlKFwibGlnaHRib3gyL2Rpc3QvY3NzL2xpZ2h0Ym94LmNzc1wiKTtcblxuLy8gbm9ybWFsaXplLmNzc1xucmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVuZG9yL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sZXNzL3N0eWxlcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9hYm91dC9hYm91dC5sZXNzXCI6IDcsXG5cdFwiLi9hZHZhbnRhZ2VzL2FkdmFudGFnZXMubGVzc1wiOiA4LFxuXHRcIi4vZmlsbXMvZmlsbXMubGVzc1wiOiA5LFxuXHRcIi4vZm9vdGVyL2Zvb3Rlci5sZXNzXCI6IDEwLFxuXHRcIi4vaGVhZGVyL2hlYWRlci5qc1wiOiAxMSxcblx0XCIuL2hlYWRlci9oZWFkZXIubGVzc1wiOiAxMixcblx0XCIuL2hlcm8vaGVyby5sZXNzXCI6IDEzLFxuXHRcIi4vaW5kZXguanNcIjogMCxcblx0XCIuL21vZGFsLXNlbmRyZXF1ZXN0L21vZGFsLXNlbmRyZXF1ZXN0LmpzXCI6IDE0LFxuXHRcIi4vbW9kYWwtc2VuZHJlcXVlc3QvbW9kYWwtc2VuZHJlcXVlc3QubGVzc1wiOiAxNSxcblx0XCIuL3ByaWNlL3ByaWNlLmxlc3NcIjogMTYsXG5cdFwiLi9zaXplLXR5cGUvc2l6ZS10eXBlLmxlc3NcIjogMTdcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA2O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MgXFwuKGpzfGxlc3MpJFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvYWJvdXQvYWJvdXQubGVzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24uYmxvY2tzL2ZpbG1zL2ZpbG1zLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24uYmxvY2tzL2Zvb3Rlci9mb290ZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8g0JzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOIOKGk+KGk+KGk1xyXG5cclxuY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdl90b2dnbGUnKTtcclxuY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJfX21lbnUnKTtcclxuY29uc3QgYWxsSGVhZGVyTWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbWVudSBhJyk7XHJcblxyXG5mdW5jdGlvbiBuYXZUb2dnbGVGbihldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbmF2VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU5hdkJ5Q2xpY2tpbmdMaW5rcygpIHtcclxuICBuYXZUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XHJcbn1cclxuXHJcbm5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdlRvZ2dsZUZuKTtcclxuXHJcbmFsbEhlYWRlck1lbnVMaW5rcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZHJvcGRvd24nKSkge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU5hdkJ5Q2xpY2tpbmdMaW5rcyk7XHJcbiAgfVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tbW9uLmJsb2Nrcy9oZWFkZXIvaGVhZGVyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tbW9uLmJsb2Nrcy9oZXJvL2hlcm8ubGVzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbW9kYWxTZW5kcmVxdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZW5kcmVxdWVzdCcpO1xyXG5jb25zdCBvcGVuTW9kYWxTZW5kcmVxdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZW5kcmVxdWVzdC1vcGVuJyk7XHJcbmNvbnN0IGNsb3NlTW9kYWxTZW5kcmVxdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZW5kcmVxdWVzdC1jbG9zZScpO1xyXG5cclxub3Blbk1vZGFsU2VuZHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbW9kYWxTZW5kcmVxdWVzdC5zaG93TW9kYWwoKTtcclxufSk7XHJcblxyXG5jbG9zZU1vZGFsU2VuZHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbW9kYWxTZW5kcmVxdWVzdC5jbG9zZSgpO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvbW9kYWwtc2VuZHJlcXVlc3QvbW9kYWwtc2VuZHJlcXVlc3QuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvbW9kYWwtc2VuZHJlcXVlc3QvbW9kYWwtc2VuZHJlcXVlc3QubGVzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24uYmxvY2tzL3ByaWNlL3ByaWNlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tbW9uLmJsb2Nrcy9zaXplLXR5cGUvc2l6ZS10eXBlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XG5cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC5zdmckLykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zdmcvc3ZnLXNwcml0ZS5qcyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gMTk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N2ZyBcXC5zdmckXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9