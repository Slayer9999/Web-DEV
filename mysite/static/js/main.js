
//Navbar
function Scroll(ScrollValue,target,Addition){
  let Element=document.querySelector(target);
  if(window.scrollY>=ScrollValue){
    Element.classList.add(Addition); 
  }
  else {
  Element.classList.remove(Addition);
}
}
window.addEventListener("scroll", function() {
  Scroll(20, "#nav", "navcolor");
});



// HomePage Text
let Text=document.querySelector('.Text');
let image=document.querySelector('.image');
window.addEventListener('load',()=>{
    setTimeout(function(){
        Text.classList.add('Text1');
    },1000)
    setTimeout(function(){
        image.classList.add('image1');
    },2000)
})
// Swiper
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay:3000, 
    disableOnInteraction: false, // Continue autoplay even when user interacts with the carousel
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true, // Enable infinite loop
});

// Add event listeners to control autoplay based on mouse interactions
var swiperContainer = document.querySelector(".mySwiper");

// Add event listeners to control autoplay based on mouse interactions
swiperContainer.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});


  

     // Enable infinite loop


//Slider Cards


