import '@/vendor';
import '@/less/styles.less';
// import '@/vue/index';
import '@/common.blocks/index';
import '@/assets/svg/svg-sprite';


// Анимация всплытия элементов ↓↓↓

const observerSlideUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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

const observerRotateY = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotateY');
    }
  });
});

observerRotateY.observe(document.querySelector('.size-type__sign'));
