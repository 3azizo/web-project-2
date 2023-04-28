//header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("bownav", window.scrollY > 0);
});
let menu = document.querySelector(".menu");
console.log(menu);

menu.addEventListener("click", function () {
  menu.classList.toggle("hoveer");
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
  console.log(menu);
});
// test
// let rootCss = document.querySelector(":root");
// function myTheme(main, sc, back, text) {
//   rootCss.style.setProperty("--main_color", `${main}`);
//   rootCss.style.setProperty("--sc_color", `${sc}`);
//   rootCss.style.setProperty("--backgrund", `${back}`);
//   rootCss.style.setProperty("--textC", `${text}`);
// }
// let main_color = " #cc0000";
// let sc_color = "#666666";
// let background = "#000";
// let textC = "#fff";
// function whiteTheme() {}
// let theme = document.querySelector(".themeI");
// theme.addEventListener("click", function () {
//   theme.classList.toggle("fa-moon");
//   theme.classList.toggle("fa-lightbulb");
//   // console.log(theme.classList[2], theme.classList[2] == "fa-moon");
//   if (theme.classList[2] == "fa-lightbulb") {
//     myTheme(main_color, sc_color, textC, background);
//   } else {
//     myTheme(main_color, sc_color, background, textC);
//   }
// });

// test

//header
//home slider

let r = 1;
function slider_m(dir) {
  var bul = document.querySelectorAll(".bullets  li");

  var home = document.querySelector(".home");
  function removactive() {
    bul.forEach((bul) => {
      bul.classList.remove("active");
    });
  }
  if (dir == 1 && r < 3) {
    r++;
    console.log("right" + r);
    removactive();
    bul[r - 1].classList.add("active");
    // home.style.backgroundImage = `url(../img/main-${r}.jpg)`;
    home.classList.toggle(`main${r - 1}`);
    home.classList.toggle(`main${r}`);
  } else if (dir == -1 && r != 1) {
    r--;
    // home.style.backgroundImage = `url(../img/main-${r}.jpg)`;
    console.log("left" + r);
    removactive();
    home.classList.toggle(`main${r}`);
    home.classList.toggle(`main${r + 1}`);
    bul[r - 1].classList.add("active");
  }
}
let allSection = document.querySelectorAll(".handelAnimation");
allSection.forEach((sec) => sec.classList.add("hidden"));
const handelAnimation = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
};
const observe = new IntersectionObserver(handelAnimation, {
  root: null,
  threshold: 0.3,
});
allSection.forEach((sec) => observe.observe(sec));
//home slider
// const allsections = document.querySelectorAll(".section");
// const revealSection = function (entries, observe) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");
//   observe.unobserve(entry.target);
//   // console.log(entry);
// };
// const SectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.2,
//   // rootMargin: '200px',
// });
