import { menu } from "./menu.js";

let menuItems = document.querySelector(".jsMenuItems");

let allBtn = document.querySelector(".jsAllBtn");
let breakfastBtn = document.querySelector(".jsBreakfastBtn");
let lunchBtn = document.querySelector(".jsLunchBtn");
let shakesBtn = document.querySelector(".jsShakesBtn");

createMenu(menu);

function createMenu(menu) {
  menu.forEach((menuItem) => {
    let menuItemHTML = `
    <div class="menu-item">
      <div class="menu-item-img"><img src="${menuItem.img}" alt=""></div>
      <div class="menu-item-content">
        <div class="menu-item-title">
          <h3>${menuItem.title}</h3>
          <span class="menu-item-price">${menuItem.price}</span>
        </div>
        <div class="menu-item-text">
          <hr>
          <p>${menuItem.desc}</p>
        </div>
      </div>
    </div>`;
    menuItems.innerHTML += menuItemHTML;
  });

  
}

breakfastBtn.addEventListener("click", () => {
    let breakfastItems = []
    menu.forEach((menuItem) => {
      if(menuItem.category === "breakfast") {
        breakfastItems.push(menuItem)
      }
    })
    menuItems.innerHTML = ""
    createMenu(breakfastItems)
})

lunchBtn.addEventListener("click", () => {
  let lunchItems = []
  menu.forEach((menuItem) => {
    if(menuItem.category === "lunch") {
      lunchItems.push(menuItem)
    }
  })
  menuItems.innerHTML = ""
  createMenu(lunchItems)
})

shakesBtn.addEventListener("click", () => {
  let shakesItems = []
  menu.forEach((menuItem) => {
    if(menuItem.category === "shakes") {
      shakesItems.push(menuItem)
    }
  })
  menuItems.innerHTML = ""
  createMenu(shakesItems)
})

allBtn.addEventListener("click", () => {
 menuItems.innerHTML = ""
 createMenu(menu)
})
