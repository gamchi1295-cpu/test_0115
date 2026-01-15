$(document).ready(function(){ //시작

//상단 메뉴
$(".depth2, .depth2-bg").hide();

$("header nav .gnb > li").mouseenter(function(){
  $(this).children(".depth2").stop().fadeIn();
  $(".depth2-bg").stop().fadeIn();
  $("header").addClass("active");
});

$("header nav .gnb > li").mouseleave(function(){
  $(this).children(".depth2").stop().fadeOut();
  $(".depth2-bg").stop().fadeOut();
  $("header").removeClass("active");
});

//검색영역
$(".search").hide();

$(".btn-search").click(function(){
  $(".search").fadeToggle();
  $("header").toggleClass("active");
  $(this).toggleClass("active");
});

// 모바일 메뉴
$(".mgnb-wrap").hide();
$(".btn-menu").click(function(){
  $(".mgnb-wrap").fadeIn();
});

$(".mgnb-close").click(function(){
  $(".mgnb-wrap").fadeOut();
});

// 모바일 2차메뉴
$(".mgnb > li").click(function(){
  $(this).children(".mdepth2").slideToggle();
});


//메인 슬라이드
const mb = new Swiper('.mb', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
});


// 재생정지 기능 추가
/*
재생버튼 숨기기

정지를 클릭하면 멈추고, 재생버튼이 나오고 정지버튼이 숨겨져야함

*/
$(".mb-play").hide();
$(".mb-pause").click(function(){
  mb.autoplay.stop();
  $(".mb-play").show();
  $(".mb-pause").hide();
});

$(".mb-play").click(function(){
  mb.autoplay.start();
  $(".mb-play").hide();
  $(".mb-pause").show();
});

// 공지사항 슬라이드
const news_list = new Swiper(".news-list", {
  loop: true,
  speed: 800,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  direction: "vertical",
});


const prd_list = new Swiper(".prd-list", {

  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
  },
  loop: true,

  slidesPerView: 1.5,
  spaceBetween: 20,
  breakpoints: {
      768: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
      1400: {
          slidesPerView: 5,
          spaceBetween: 50,
      },
  },
});


// 아코디언 배너
$("#store ul li").eq(0).addClass("active");
$("#store ul li").mouseenter(function(){
  $(this).addClass("active").siblings().removeClass("active");
});

//탭메뉴
$("#brand .brand-img ul li").not(":first").hide();
$("#brand .brand-name ul li").eq(0).addClass("active");

$("#brand .brand-name ul li").click(function(){

  $(this).addClass("active").siblings().removeClass("active");

  var idx = $(this).index();
  $("#brand .brand-img ul li").eq(idx).fadeIn().siblings().hide();
});


 AOS.init();


}); //끝