window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(function () {

            document.getElementById("loader").style.display = "none";

        }, 700);

    }, 1800);

};

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const update = () => {

            const increment = Math.ceil(target / 80);

            count += increment;

            if (count < target) {

                counter.innerText = count;

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

window.addEventListener("load", startCounter);
/*================ CART OPEN/CLOSE =================*/

/*================ PRODUCTS =================*/

const products = [

{
id:1,
name:"Detergente Ultra",
category:"Detergenti",
price:19.99,
stock:50,
rating:5,
badge:"BEST SELLER",
image:"https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600"
},

{
id:2,
name:"Sapone Professionale",
category:"Detergenti",
price:14.99,
stock:30,
rating:4,
badge:"NEW",
image:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600"
},

{
id:3,
name:"Mop Premium",
category:"Accessori",
price:24.99,
stock:18,
rating:5,
badge:"-20%",
image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600"
},

{
id:4,
name:"Secchio Cleaning",
category:"Accessori",
price:12.99,
stock:40,
rating:4,
badge:"",
image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600"
}

];

function renderProducts(){

const productsContainer=document.getElementById("productsContainer");

productsContainer.innerHTML="";

products.forEach(product=>{

productsContainer.innerHTML+=`

<div class="product-card">

${product.badge ? `<span class="badge">${product.badge}</span>` : ""}

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

<div class="product-actions">

<button class="action-btn">
<i class="fa-regular fa-heart"></i>
</button>

<button class="action-btn">
<i class="fa-solid fa-eye"></i>
</button>

</div>

</div>

<h3>${product.name}</h3>

<p>${product.category}</p>

<div class="stars">
${"⭐".repeat(product.rating)}
</div>

<h2>€ ${product.price}</h2>

<p class="stock">
Disponibili: ${product.stock}
</p>

<button class="buy-btn" onclick="addToCart(${product.id})">

<i class="fa-solid fa-cart-shopping"></i>

Aggiungi al Carrello

</button>

</div>



<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="category">${product.category}</p>

<div class="stars">${"⭐".repeat(product.rating)}</div>

<h2>€ ${product.price}</h2>

<p class="stock">Disponibili: ${product.stock}</p>

<button class="buy-btn" onclick="addToCart(${product.id}); this.innerHTML='✓ Aggiunto'; this.disabled=true;">

<i class="fa-solid fa-cart-shopping"></i>

Aggiungi al Carrello

</button>

</div>

`;

});

}

renderProducts();

const cartButton = document.getElementById("cartButton");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartOverlay = document.getElementById("cartOverlay");

cartButton.addEventListener("click", () => {

    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");

});

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");

});

cartOverlay.addEventListener("click", () => {

    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");

});
/*================ ADD TO CART =================*/

let cart = [];

const cartCount = document.getElementById("cartCount");

function updateCart(){

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div>

                <h4>${item.name}</h4>

                <p>€${item.price}</p>
            </div>

            <button onclick="removeItem(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

    if(cart.length==0){

        cartItems.innerHTML="<p class='empty-cart'>Il carrello è vuoto.</p>";

    }

    cartCount.innerText = cart.length;

    cartTotal.innerText = "€"+total.toFixed(2);

}

function removeItem(index){

    const product = cart[index];

    product.stock++;

    cart.splice(index,1);

    renderProducts();

    updateCart();

}

function addToCart(id){

    const product = products.find(p => p.id === id);

    if(!product) return;

    if(product.stock <= 0){

        alert("Prodotto esaurito!");

        return;

    }

    product.stock--;

    cart.push(product);

    renderProducts();

    updateCart();

}
