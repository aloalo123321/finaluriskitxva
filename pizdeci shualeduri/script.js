const red = document.querySelector(".f");
const blue = document.querySelector(".s");

const forRed = document.querySelector(".forRed");
const forblue = document.querySelector(".forblue");

red.addEventListener("click", function () {
  forRed.style = "display : block;";
});

blue.addEventListener("click", function () {
  forblue.style = "display : block;";
});
