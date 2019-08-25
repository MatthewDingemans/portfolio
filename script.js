let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("nav ");
mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})


let darkLink = document.querySelectorAll("nav div a")[0];
let lightLink = document.querySelectorAll("nav div a")[1];
let mijnBody = document.querySelector("body");
function switchToLight() {
	mijnBody.classList.add("light");
  console.log("light");
}
function switchToDark() {
	mijnBody.classList.remove("light");
    console.log("dark");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
