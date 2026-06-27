let products = [];

function addProduct(){

const name = document.getElementById("name").value;
const price = document.getElementById("price").value;
const stock = document.getElementById("stock").value;
const category = document.getElementById("category").value;
const image = document.getElementById("image").value;

if(name=="" || price=="" || stock=="" || category==""){

alert("Compila tutti i campi");

return;

}

products.push({

name,
price,
stock,
category,
image

});

updateTable();

document.getElementById("name").value="";
document.getElementById("price").value="";
document.getElementById("stock").value="";
document.getElementById("category").value="";
document.getElementById("image").value="";

}

function updateTable(){

const tbody=document.querySelector("#productsTable tbody");

tbody.innerHTML="";

products.forEach((product,index)=>{

tbody.innerHTML+=`

<tr>

<td>${product.name}</td>

<td>€${product.price}</td>

<td>${product.stock}</td>

<td>${product.category}</td>

<td>

<button class="delete-btn" onclick="deleteProduct(${index})">

Elimina

</button>

</td>

</tr>

`;

});

document.getElementById("productCount").innerText=products.length;

}

function deleteProduct(index){

products.splice(index,1);

updateTable();

}
