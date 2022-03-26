// console.log("JavaScript file added.");

const shrinkBtn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");

shrinkBtn.addEventListener("click", () => {
   // console.log("Button Clicked");
   document.body.classList.toggle("shrink");
   shrinkBtn.classList.add("hovered");

   setTimeout(
    () => {
    shrinkBtn.classList.remove("hovered");
    }, 500);
});

search.addEventListener("click", () => {
    document.body.classList.remove("shrink");
    search.lastElementChild.focus();
});