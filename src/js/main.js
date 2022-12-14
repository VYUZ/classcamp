import { sum } from "./modules/sum.js";
console.log(sum(2, 10));
///////////////////////////////////////////

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
  //Проверка поддержки webp
  function testWebP(callback) {
    // console.log("supported");
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  //Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
isWebp();
////////////////////////////////////////
// Header active
// (function () {
//   const header = document.querySelector(".header");
//   window.onscroll = () => {
//     if (window.pageYOffset > 120) {
//       header.classList.add("header-js-active");
//     } else {
//       header.classList.remove("header-js-active");
//     }
//   };
// })();
////////////////////////////////////////

///////////////////////////////////////////////////
//Burger handler version 2
// const iconMenu = document.querySelector(".burger");
// const menuNav = document.querySelector(".header__nav");
// if (iconMenu) {
//   iconMenu.addEventListener("click", function (e) {
//     document.body.classList.toggle("_lock");
//     iconMenu.classList.toggle("jsburger-active");
//     menuNav.classList.toggle("jsburger-active");
//   });
// }

// Scroll to anchors v2
const menuLinks = document.querySelectorAll(".header__nav-link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("jsburger-active")) {
        console.log("burger click");
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("jsburger-active");
        menuNav.classList.remove("jsburger-active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
///////////////////////////////////////////////////

//////////////////////////////
//fulpage initialization
// new fullpage("#fullpage", {
//   //options here
//   scrollBar: true,
//   autoScrolling: true,
//   scrollHorizontally: false,
// });

// $("#fullpage").fullpage({
//   scrollBar: true,
//   afterRender: function () {
//     // new WOW().init();
//   },
//   afterLoad: function () {
//     new WOW().init();
//   },
// });

// new fullpage("#fullpage", {
//   //options here
//   scrollBar: true,
//   autoScrolling: true,
//   afterLoad: function () {
//     new WOW().init();
//   },

// });

//////////////////////////////////////////
// WOW + Fullpage
// new WOW().init();
// $("#fullpage").fullpage({
//   scrollBar: true,
//   autoScrolling: true,
// });

// $(document).ready(function() {
//   $('#fullpage').fullpage({
//       scrollBar: true,
//       autoScrolling: true,
//       onLeave: function(){
//           new WOW().init();
//       }
//   });
// });
// $("#fullpage").fullpage({
//   verticalCentered: false,
//   autoScrolling: false,
//   easing: "linear",
//   easingcss3: "ease",
//   afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
//     if (slideIndex != 0) {
//       wow = new WOW({
//         animateClass: "animated",
//         live: true,
//       });
//       wow.init();
//     }
//   },
//   onSlideLeave: function (anchorLink, index, slideIndex, direction) {
//     $(".section")
//       .not(".section-" + slideIndex)
//       .find(".wow")
//       .css("visibility", "hidden");
//   },
// });

///////////////////////////////////
// isMobile
// var isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
//   },
//   any: function () {
//     return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
//   },
// };
// if (isMobile.any()) {
//   document.body.classList.add("_touch");
// } else {
//   document.body.classList.add("_pc");
// }

///////////////////////////////
//Burger handler version 1
// (function () {
//   const burgerItem = document.querySelector(".burger");
//   const menu = document.querySelector(".header__nav");
//   const menuCloseItem = document.querySelector(".header__nav-close");
//   const menuLinks = document.querySelectorAll(".header__nav-link");
//   burgerItem.addEventListener("click", () => {
//     menu.classList.add("header__nav_active");
//   });
//   menuCloseItem.addEventListener("click", () => {
//     menu.classList.remove("header__nav_active");
//   });

//   if (window.innerWidth < 700) {
//     for (let i = 0; i < menuLinks.length; i += 1) {
//       menuLinks[i].addEventListener("click", () => {
//         menu.classList.remove("header__nav_active");
//       });
//     }
//   }
// })();

////////////////////////////////////////////////////
// Scroll to anchors v1
// (function () {
//   const smoothScroll = function (targetEl, duration) {
//     const headerElHeight = document.querySelector(".header").clientHeight;
//     let target = document.querySelector(targetEl);
//     let targetPosition = target.getBoundingClientRect().top - headerElHeight;
//     let startPosition = window.pageYOffset;
//     let startTime = null;

//     const ease = function (t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     };

//     const animation = function (currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = ease(timeElapsed, startPosition, targetPosition, duration);
//       window.scrollTo(0, run);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     };
//     requestAnimationFrame(animation);
//   };

//   const scrollTo = function () {
//     const links = document.querySelectorAll(".js-scroll");
//     links.forEach((each) => {
//       each.addEventListener("click", function () {
//         const currentTarget = this.getAttribute("href");
//         smoothScroll(currentTarget, 100);
//       });
//     });
//   };
//   scrollTo();
// })();
//////////////////////////////
