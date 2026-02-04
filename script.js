const menuData = [
  { name: "Cappuccino", category: "coffee", price: 120, img: "images/cappuccino.jpg" },
  { name: "Cold Coffee", category: "coffee", price: 150, img: "images/cold-coffee.jpg" },
  { name: "Espresso", category: "coffee", price: 100, img: "images/espresso.jpg" },

  { name: "Veg Sandwich", category: "snacks", price: 90, img: "images/sandwich.jpg" },
  { name: "Cheese Burger", category: "snacks", price: 160, img: "images/burger.jpg" },
  { name: "French Fries", category: "snacks", price: 110, img: "images/fries.jpg" },

  { name: "Brownie", category: "dessert", price: 140, img: "images/brownie.jpg" },
  { name: "Ice Cream", category: "dessert", price: 80, img: "images/icecream.jpg" }
];

const menu = document.getElementById("menu");

function renderMenu(items) {
  menu.innerHTML = items.map(item => `
    <div class="card">
      <img src="${item.img}" loading="lazy" alt="${item.name}">
      <div class="card-body">
        <h3>${item.name}</h3>
        <span>₹ ${item.price}</span>
      </div>
    </div>
  `).join("");
}

function filterMenu(category, btn) {
  document.querySelectorAll(".category button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  if (category === "all") {
    renderMenu(menuData);
  } else {
    renderMenu(menuData.filter(item => item.category === category));
  }
}

renderMenu(menuData);
