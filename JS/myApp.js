// console.log("JavaScript file added.");

const shrinkBtn = document.querySelector(".shrink-btn");

shrinkBtn.addEventListener("click", () => {
   // console.log("Button Clicked");
   document.body.classList.toggle("shrink");
})