
var placeholders = ["Health Drinks", "Medicine", "Shampoo"];
var index = 0;

function updatePlaceholder() {
    var input = document.getElementById("searchInput");
    input.placeholder ="Search for " + placeholders[index];
    index = (index + 1) % placeholders.length;
}


setInterval(updatePlaceholder, 2000);


const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));





// const gap = 16;
// let width = document.querySelector('.item-2').offsetWidth + gap;
// const carouse = document.getElementById("carouse2"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");

// next1.addEventListener("click", e => {
//   carouse.scrollBy(width, 0);
//   prev.style.display = "flex";
//   if (carouse.scrollWidth - carouse.scrollLeft - carouse.clientWidth <= gap) {
//     next.style.display = "none";
//   }
// });

// prev.addEventListener("click", e => {
//   carouse.scrollBy(-width, 0);
//   next.style.display = "flex";
//   if (carouse.scrollLeft <= gap) {
//     prev.style.display = "none";
//   }
// });

// carouse.addEventListener('scroll', () => {
//   if (carouse.scrollLeft <= gap) {
//     prev.style.display = "none";
//   } else {
//     prev.style.display = "flex";
//   }

//   if (carouse.scrollWidth - carouse.scrollLeft - carouse.clientWidth <= gap) {
//     next.style.display = "none";
//   } else {
//     next.style.display = "flex";
//   }
// });

// window.addEventListener("resize", () => {
//   width = document.querySelector('.item-2').offsetWidth + gap;
// });
