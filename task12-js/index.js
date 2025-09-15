const url = "http://localhost:3000/products"; // API endpoint json-server
const productsElement = document.getElementById("products");
const formProduct = document.getElementById("product-form");
const titleEle = document.getElementById("title");
const priceEle = document.getElementById("price");
const quantityEle = document.getElementById("quantity");
const totalAmount = document.getElementById("total-amount");
const btnAddNew = document.getElementById("add-new");

let editingId = null; // Nếu != null thì đang ở chế độ update sản phẩm

// 📌 Hàm render danh sách sản phẩm ra bảng
async function renderProducts() {
  try {
    const res = await axios.get(url); // Lấy dữ liệu từ server
    const data = res.data;

    // Tạo HTML table row cho từng sản phẩm
    productsElement.innerHTML = data
      .map(
        (item) => `
        <tr class="border-t" data-id="${item.id}">
          <td class="p-3">${item.id}</td>
          <td class="p-3">${item.title}</td>
          <td class="p-3">${Number(item.price).toLocaleString()} ₫</td>

          <!-- Cột số lượng có nút + - -->
          <td class="p-3">
            <div class="flex items-center gap-2">
              <button class="bg-gray-200 px-2 rounded decrease" data-id="${
                item.id
              }">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="bg-gray-200 px-2 rounded increase" data-id="${
                item.id
              }">+</button>
            </div>
          </td>

          <!-- Tổng tiền (price * quantity) -->
          <td class="p-3 text-blue-600 font-medium total">
            ${(item.price * item.quantity).toLocaleString()} ₫
          </td>

          <!-- Nút xóa & cập nhật -->
          <td class="p-3 flex gap-2">
            <button class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded delete" data-id="${
              item.id
            }">Delete</button>
            <button class="bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded update" data-id="${
              item.id
            }">Update</button>
          </td>
        </tr>
      `
      )
      .join("");

    attachEvents(data); // Gắn sự kiện sau khi render
    calcTotal(data); // Tính tổng tiền ban đầu
  } catch (err) {
    console.error("Lỗi tải sản phẩm:", err);
  }
}

// 📌 Gắn các sự kiện click vào nút trong bảng
function attachEvents(data) {
  document
    .querySelectorAll(".delete")
    .forEach((btn) => btn.addEventListener("click", handleDelete));
  document
    .querySelectorAll(".update")
    .forEach((btn) => btn.addEventListener("click", handleEdit));
  document
    .querySelectorAll(".increase")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        updateQuantity(btn.dataset.id, 1, data)
      )
    );
  document
    .querySelectorAll(".decrease")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        updateQuantity(btn.dataset.id, -1, data)
      )
    );
}

// 📌 Hàm cập nhật số lượng (tăng/giảm)
async function updateQuantity(id, step, data) {
  const product = data.find((item) => item.id == id);
  if (!product) return;

  const newQuantity = Math.max(product.quantity + step, 1); // không cho nhỏ hơn 1

  try {
    await axios.patch(`${url}/${id}`, { quantity: newQuantity });

    // ✅ Update trực tiếp DOM để tránh re-render cả bảng
    const row = document.querySelector(`tr[data-id="${id}"]`);
    row.querySelector(".quantity").textContent = newQuantity;
    row.querySelector(".total").textContent =
      (product.price * newQuantity).toLocaleString() + " ₫";

    // 🎨 Hiệu ứng highlight khi số lượng thay đổi
    row.querySelector(".total").classList.add("bg-yellow-100");
    setTimeout(
      () => row.querySelector(".total").classList.remove("bg-yellow-100"),
      400
    );

    product.quantity = newQuantity; // Cập nhật data cục bộ để tính tổng
    calcTotal(data); // Tính lại tổng tiền
  } catch (err) {
    console.error("Lỗi cập nhật số lượng:", err);
  }
}

// 📌 Hàm tính tổng tiền của toàn bộ sản phẩm
function calcTotal(data) {
  const total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalAmount.textContent = total.toLocaleString();
}

// 📌 Xử lý submit form (thêm hoặc sửa sản phẩm)
formProduct.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const data = {
    title: titleEle.value.trim(),
    price: Number(priceEle.value),
    quantity: Number(quantityEle.value),
  };

  // ✅ Validate dữ liệu trước khi gửi
  if (!data.title || data.title.length < 3) {
    alert("Tên sản phẩm phải từ 3 ký tự trở lên!");
    return;
  }
  if (isNaN(data.price) || data.price <= 0) {
    alert("Giá sản phẩm phải lớn hơn 0!");
    return;
  }
  if (isNaN(data.quantity) || data.quantity < 1) {
    alert("Số lượng phải lớn hơn hoặc bằng 1!");
    return;
  }

  try {
    if (editingId) {
      // Nếu đang edit thì gọi PUT để cập nhật
      await axios.put(`${url}/${editingId}`, data);
      editingId = null;
    } else {
      // Nếu thêm mới thì gọi POST
      await axios.post(url, data);
    }
    formProduct.reset();
    quantityEle.value = 1;
    renderProducts(); // render lại bảng
  } catch (err) {
    console.error("Lỗi lưu sản phẩm:", err);
  }
});

// 📌 Xử lý xóa sản phẩm
async function handleDelete(e) {
  const id = e.target.dataset.id;
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    try {
      await axios.delete(`${url}/${id}`);
      renderProducts();
    } catch (err) {
      console.error("Lỗi xóa sản phẩm:", err);
    }
  }
}

// 📌 Xử lý khi nhấn nút Update → đưa dữ liệu lên form
async function handleEdit(e) {
  try {
    const id = e.target.dataset.id;
    const res = await axios.get(`${url}/${id}`);
    const product = res.data;

    // Gán dữ liệu lên form để người dùng chỉnh sửa
    titleEle.value = product.title;
    priceEle.value = product.price;
    quantityEle.value = product.quantity;
    editingId = product.id;
  } catch (err) {
    console.error("Lỗi lấy sản phẩm:", err);
  }
}

// 📌 Reset form khi nhấn nút + Add new
btnAddNew.addEventListener("click", () => {
  editingId = null;
  formProduct.reset();
  quantityEle.value = 1;
});

// Gọi render lần đầu khi load trang
renderProducts();
