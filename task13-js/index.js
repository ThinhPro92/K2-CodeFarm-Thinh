const products = [
  {
    id: 1,
    name: "Sony Playstation 5",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/playstation_5_tywoqq.png",
    type: "games",
    price: 499.99,
  },
  {
    id: 2,
    name: "Samsung Galaxy",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739038/samsung_galaxy_iad0cv.png",
    type: "smartphones",
    price: 399.99,
  },
  {
    id: 3,
    name: "Cannon EOS Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739063/cannon_eos_camera_ydidrx.png",
    type: "cameras",
    price: 749.99,
  },
  {
    id: 4,
    name: "Sony A7 Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_a7_camera_xvkxwd.png",
    type: "cameras",
    price: 1999.99,
  },
  {
    id: 5,
    name: "LG TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/lg_tv_yl0k03.png",
    type: "televisions",
    price: 799.99,
  },
  {
    id: 6,
    name: "Nintendo Switch",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/nintendo_switch_diq6cy.png",
    type: "games",
    price: 299.99,
  },
  {
    id: 7,
    name: "Xbox Series X",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/xbox_series_x_e9yex6.png",
    type: "games",
    price: 499.99,
  },
  {
    id: 8,
    name: "Samsung TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/samsung_tv_adpfag.png",
    type: "televisions",
    price: 1099.99,
  },
  {
    id: 9,
    name: "Google Pixel",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739064/google_pixel_r2bpdo.png",
    type: "smartphones",
    price: 499.99,
  },
  {
    id: 10,
    name: "Sony ZV1F Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_zv1f_camera_o7kt3t.png",
    type: "cameras",
    price: 799.99,
  },
  {
    id: 11,
    name: "Toshiba TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/toshiba_tv_sdsrnz.png",
    type: "televisions",
    price: 499.99,
  },
  {
    id: 12,
    name: "iPhone 14",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739062/iphone_14_fhu2gq.png",
    type: "smartphones",
    price: 999.99,
  },
];

let cartCount = 0;
let selectedCategories = new Set();
let searchQuery = "";
let cart = new Set();

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const cartCountElement = document.getElementById("cart-count");

function formatPrice(price) {
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderProducts() {
  const filtered = products.filter((item) => {
    const matchCategory =
      selectedCategories.size === 0 || selectedCategories.has(item.type);
    const matchSearch = item.name.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  productGrid.innerHTML = filtered
    .map((item) => {
      const inCart = cart.has(item.id);
      return `
      <div class="rounded-xl p-4 bg-white shadow hover:shadow-lg hover:scale-105 transition relative group">
        <img src="${item.url}" alt="${item.name}" class="rounded-lg mx-auto">
        <h3 class="text-lg font-semibold mt-4 text-pink-900">${item.name}</h3>
        <p class="text-pink-600 font-bold">$${formatPrice(item.price)}</p>

        <button 
          onclick="toggleCart(${item.id})"
          class="mt-2 w-full ${
            inCart ? "bg-pink-300" : "bg-pink-500 hover:bg-pink-600"
          } text-white py-2 rounded-lg transition">
          ${inCart ? "✓ Added" : "Add To Cart"}
        </button>
        ${
          inCart
            ? `<button 
                onclick="toggleCart(${item.id})"
                class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-pink-900/80 text-white text-lg font-bold rounded-xl">
                Remove From Cart
              </button>`
            : ""
        }
      </div>
    `;
    })
    .join("");
}

function toggleCart(productId) {
  if (cart.has(productId)) {
    cart.delete(productId);
    cartCount--;
  } else {
    cart.add(productId);
    cartCount++;
  }
  cartCountElement.textContent = cartCount;
  renderProducts();
}

document.querySelectorAll(".category-filter").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      selectedCategories.add(checkbox.value);
    } else {
      selectedCategories.delete(checkbox.value);
    }
    renderProducts();
  });
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase();
  renderProducts();
});

// First render
renderProducts();
