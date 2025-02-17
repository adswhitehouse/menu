import { menu } from "./menu.js";

let menuItems = document.querySelector(".jsMenuItems");
let filterButtons = document.querySelector(".filter-buttons");

window.addEventListener("DOMContentLoaded", () => {
  createMenu(menu);
  createButtons();
});

function createMenu(menuArray) {
  menuArray.forEach((menuItem) => {
    let menuItemHTML = `
    <div class="menu-item">
      <div class="menu-item-img"><img src="${menuItem.img}" alt="${menuItem.title}"></div>
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

function createButtons() {
  let categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  for (let i = 0; i < categories.length; i++) {
    let buttonHTML = `
      <button class="filter-button" data-id="${categories[i]}">${categories[i]}</button>`;
    filterButtons.innerHTML += buttonHTML;
  }

  filterButtons.firstElementChild.classList.add("filter-button-active");

  let filterBtn = document.querySelectorAll(".filter-button");

  filterBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      filterBtn.forEach((button) => {
        button.classList.remove("filter-button-active");
      });
      e.currentTarget.classList.add("filter-button-active");
      let category = e.currentTarget.dataset.id;
      let menuCategory = menu.filter((item) => {
        if (category === item.category) {
          return item;
        }
      });
      menuItems.innerHTML = "";
      createMenu(menuCategory);
      if (category === "all") {
        createMenu(menu);
      }
    });
  });
}
