// document.addEventListener("DOMContentLoaded", function () {
//   var appendthis = document.createElement("div");
//   appendthis.className = "modal-overlay js-modal-close";

//   var modalLinks = document.querySelectorAll("a[data-modal-id]");
//   modalLinks.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       document.body.appendChild(appendthis);
//       var modalBoxId = this.getAttribute("data-modal-id");
//       var modalBox = document.getElementById(modalBoxId);
//       modalBox.style.display = "block";

// Postepeno povećavamo opacity za fadeIn efekat
// var opacity = 0;
// var interval = 20; // Interval za promenu opacity vrednosti
// var targetOpacity = 1;
// var duration = 100; // Vreme trajanja fadeIn efekta u milisekundama

//     var fadeInInterval = setInterval(function () {
//       opacity += interval / duration;
//       modalBox.style.opacity = opacity;
//       if (opacity >= targetOpacity) {
//         clearInterval(fadeInInterval);
//       }
//     }, interval);
//   });
// });

// var modalCloseButtons = document.querySelectorAll(
//   ".js-modal-close, .modal-overlay"
// );
// modalCloseButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var modalBoxes = document.querySelectorAll(".modal-box, .modal-overlay");
//     modalBoxes.forEach(function (box) {
//       box.style.opacity = 0;
//       setTimeout(function () {
//         box.style.display = "none";
//         if (box.className === "modal-overlay js-modal-close") {
//           box.parentNode.removeChild(box);
//         }
//       }, 500);
//     });
//   });
// });

//   window.addEventListener("resize", function () {
//     var modalBoxes = document.querySelectorAll(".modal-box");
//     modalBoxes.forEach(function (box) {
//       var modalHeight = box.offsetHeight;
//       var modalWidth = box.offsetWidth;
//       box.style.top = (window.innerHeight - modalHeight) / 2 + "px";
//       box.style.left = (window.innerWidth - modalWidth) / 2 + "px";
//     });
//   });

//   window.dispatchEvent(new Event("resize"));
// });

//Swiper
var swiper = new Swiper(".mySwiper", {
  //loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  //loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
