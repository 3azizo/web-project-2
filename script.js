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
  threshold: 0.25,
});
allSection.forEach((sec) => observe.observe(sec));
