// console.log("JavaScript file added.");

const shrinkBtn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");
const activeTab = document.querySelector(".active-tab");
const shortCuts = document.querySelector(".sidebar-links h4");
const tooltipElements = document.querySelectorAll(".tooltip-element");


let activeIndex;

shrinkBtn.addEventListener("click", () => {
   // console.log("Button Clicked");
   document.body.classList.toggle("shrink");
   setTimeout(moveActiveTab, 400);
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

    if (activeIndex > 3) {
        topPosition += shortCuts.clientHeight;
    }

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

function showTooltip() {
   // console.log("here is tooltip");

    let tooltip = this.parentNode.lastElementChild;
   // console.log(tooltip);

   let spans = tooltip.children;
   // console.log(spans);

   let tooltipIndex = this.dataset.tooltip;
   console.log(tooltipIndex);
}

tooltipElements.forEach(elem => {
    elem.addEventListener("mouseover", showTooltip);
})