import {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "./firebase.js";

const productsCollection = collection(db, "products");

// إضافة منتج
window.addProduct = async function () {

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;

  if (!name || !price || !stock || !category) {
    alert("Compila tutti i campi");
    return;
  }

  await addDoc(productsCollection, {
    name,
    price: Number(price),
    stock: Number(stock),
    category,
    image
  });

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("category").value = "";
  document.getElementById("image").value = "";

  loadProducts();

};

// تحميل المنتجات
async function loadProducts() {

  const tbody = document.querySelector("#productsTable tbody");

  tbody.innerHTML = "";

  const snapshot = await getDocs(productsCollection);

  let count = 0;

  snapshot.forEach((item) => {

    count++;

    const product = item.data();

    tbody.innerHTML += `
      <tr>
        <td>${product.name}</td>
        <td>€${product.price}</td>
        <td>${product.stock}</td>
        <td>${product.category}</td>
        <td>
          <button class="delete-btn" onclick="deleteProduct('${item.id}')">
            Elimina
          </button>
        </td>
      </tr>
    `;

  });

  document.getElementById("productCount").innerText = count;

}

// حذف
window.deleteProduct = async function (id) {

  await deleteDoc(doc(db, "products", id));

  loadProducts();

};

// أول ما الصفحة تفتح
loadProducts();
