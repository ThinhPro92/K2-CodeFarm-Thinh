const url = "http://localhost:3000/products";
const productsElement = document.getElementById("products");
const formProduct = document.getElementById("product-form");
const titleEle = document.getElementById("title");
const priceEle = document.getElementById("price");

let editingId = null; // luu ID san pham dang update

function renderProducts() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let content = "";
      data.forEach((item) => {
        content += /*html*/ `
          <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td>
              <button class="btn-danger delete" data-id="${item.id}">Delete</button>
              <button class="btn-warn update" data-id="${item.id}">Update</button>
            </td>
          </tr>
        `;
      });
      productsElement.innerHTML = content;

      document.querySelectorAll(".delete").forEach((btn) => {
        btn.addEventListener("click", handleDelete);
      });

      document.querySelectorAll(".update").forEach((btn) => {
        btn.addEventListener("click", handleEdit);
      });
    })
    .catch((err) => console.log(err));
}

formProduct.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = {
    title: titleEle.value.trim(),
    price: Number(priceEle.value),
  };

  if (!data.title || data.title.length < 3) {
    alert("Tên sản phẩm phải từ 3 ký tự trở lên!");
    return;
  }
  if (isNaN(data.price) || data.price <= 0) {
    alert("Giá sản phẩm phải lớn hơn 0!");
    return;
  }

  if (editingId) {
    fetch(`${url}/${editingId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        editingId = null;
        formProduct.reset();
        renderProducts();
      });
  } else {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        formProduct.reset();
        renderProducts();
      });
  }
});

function handleDelete(e) {
  const id = e.target.dataset.id;
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    fetch(`${url}/${id}`, { method: "DELETE" })
      .then(() => renderProducts())
      .catch((err) => console.log(err));
  }
}

function handleEdit(e) {
  const id = e.target.dataset.id;
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((product) => {
      titleEle.value = product.title;
      priceEle.value = product.price;
      editingId = product.id;
    });
}

document.querySelector("thead .btn-primary").addEventListener("click", () => {
  editingId = null;
  formProduct.reset();
});

renderProducts();
