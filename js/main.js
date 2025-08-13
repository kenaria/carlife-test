
$(function Scroll(){
    let header = document.querySelector('.header'),
        headerH = document.querySelector('.header').clientHeight;
  
    document.onscroll = function(){
      let scroll = window.scrollY;
  
      if(scroll > headerH){
        header.classList.add('header-scroll');
        document.body.style.paddingTop = headerH + 'px';
      }else{
        header.classList.remove('header-scroll');
        document.body.removeAttribute('style');
      }
    }    
  });

  $(function BurgerMenuDesctop(){
    $('.menu-burger').on('click', function(){
        $('.menu-burger').toggleClass('menu-burger--open');
        $('.menu').toggleClass('menu-open');
        $('body').toggleClass('lock');
      });
  });

  $(function sliderSwiperPortfoilo(){
    var swiper = new Swiper('.portfolio__slider',{
      loop: true,
      centeredSlides: false,
      slidesPerGroup: 1,
      slidesPerView:1,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
  
      breakpoints:{
        1440: {
          slidesPerView: 5,
        },
      },
    });
  });

  $(function sliderSwiperReviews(){
    var swiper = new Swiper('.reviews__slider',{
      grabCursor:true,
      slidesPerGroup: 1,
      slidesPerView:1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
      },  
      breakpoints:{  
        502: {
          slidesPerView:2,
          slidesPerGroup: 2,
          spaceBetween: 21,
        },     
  
        769: {
          slidesPerGroup: 3,
          slidesPerView:3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerGroup: 4,
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });

  $(function QuestionsOpenConteny(){
    $(".faq__accordeon-item .faq__accordeon-item--top").on("click", function () {    
      $(this).parent().toggleClass("accordeon-open"), $(this).next(".faq__accordeon-item--content").slideToggle(500);    
    });
  });
