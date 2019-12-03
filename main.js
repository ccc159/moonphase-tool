window.addEventListener("load", () => {
  // cover
  var cover = document.getElementsByClassName("cover")[0];
  cover.style.opacity = 0.97;

  cover.addEventListener("mouseover", () => {
    cover.style.opacity = 0.85;
  });

  cover.addEventListener("mouseleave", () => {
    cover.style.opacity = 0.97;
  });

  // moon
  var moon = document.getElementsByClassName("moon")[0];
  moon.style.transform = "rotate(45deg)";
});
