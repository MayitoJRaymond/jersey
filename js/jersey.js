var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //  Onscroll function
  function showOnScroll() {
    var scrollDiv = document.getElementById("scrollDiv");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 200) { // You can adjust this threshold value
        scrollDiv.style.display = "block";
    } else {
        scrollDiv.style.display = "none";
    }
}

// Add an event listener to detect scrolling
window.addEventListener("scroll", showOnScroll);


document.getElementById("hamburger").addEventListener("click", function() {
  var sidebar = document.getElementById("sidebar");
  var content = document.querySelector(".content");
  
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      content.style.marginLeft = "0";
  } else {
      sidebar.style.width = "250px";
      content.style.marginLeft = "250px";
  }
});

// product view js

// var customSwiper = new Swiper(".myCustomSwiper", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var customSwiper2 = new Swiper(".myCustomSwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".custom-swiper-button-next",
//     prevEl: ".custom-swiper-button-prev",
//   },
//   thumbs: {
//     swiper: customSwiper,
//   },
// });