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
const searchInput = document.getElementById("searchInput");

let currentCategory = "all";

function renderMenu(items) {
  if (items.length === 0) {
    menu.innerHTML = "<p style='grid-column:1/-1;text-align:center;'>No items found</p>";
    return;
  }

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
  currentCategory = category;

  document.querySelectorAll(".category button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  applyFilters();
}

function searchMenu(value) {
  applyFilters();
}

function applyFilters() {
  let filtered = menuData;

  // category filter
  if (currentCategory !== "all") {
    filtered = filtered.filter(item => item.category === currentCategory);
  }

  // search filter
  const searchText = searchInput.value.toLowerCase();
  if (searchText) {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(searchText)
    );
  }

  renderMenu(filtered);
}

// initial render
renderMenu(menuData);
