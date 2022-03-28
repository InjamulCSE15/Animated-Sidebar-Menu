// console.log("JavaScript file added.");

const shrinkBtn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");
const activeTab = document.querySelector(".active-tab");
const shortCuts = document.querySelector


let activeIndex;

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

function moveActiveTab() {
    let topPosition = activeIndex * 58 + 2.5;
    activeTab.style.top = `${topPosition}px`;
}

function changeLink() {
    //console.log("hello function");
    sidebarLinks.forEach(sideLink => sideLink.classList.remove("active"));
    this.classList.add("active");

    activeIndex = this.dataset.active;
    //console.log(activeIndex);

    moveActiveTab();
}

sidebarLinks.forEach(link => link.addEventListener
    ("click", changeLink)
    );