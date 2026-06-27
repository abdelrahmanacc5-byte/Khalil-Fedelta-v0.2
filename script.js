/* =========================
   LOADING SCREEN
========================= */

window.onload = function () {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 700);

    }, 1800);

};


/* =========================
   COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const update = () => {

            const increment = Math.ceil(target / 80);

            current += increment;

            if (current < target) {

                counter.innerText = current;

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

}

window.addEventListener("load", startCounter);



/* =========================
   PRODUCTS
========================= */

const products = [

{
    id:1,
    name:"Detergente Premium",
    category:"Detergenti",
    price:14.99,
    stock:30,
    rating:5,
    badge:"-15%",
    image:"https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600"
},

{
    id:2,
    name:"Mop Premium",
    category:"Accessori",
    price:24.99,
    stock:18,
    rating:5,
    badge:"-20%",
    image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600"
},

{
    id:3,
    name:"Spray Cleaner",
    category:"Detergenti",
    price:9.99,
    stock:40,
    rating:4,
    badge:"",
    image:"https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600"
},

{
    id:4,
    name:"Vacuum Cleaner",
    category:"Macchine",
    price:129.99,
    stock:7,
    rating:5,
    badge:"NEW",
    image:"https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600"
}

];



/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(){

const productsContainer=document.getElementById("productsContainer");

productsContainer.innerHTML="";

products.forEach(product=>{

productsContainer.innerHTML+=`

<div class="product-card">

${product.badge


/* =========================
   CART
========================= */

let cart = [];

const cartButton = document.getElementById("cartButton");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");


cartButton.onclick = () => {

    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");

};

closeCart.onclick = () => {

    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");

};

cartOverlay.onclick = () => {

    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");

};


function addToCart(id){

    const product = products.find(p => p.id === id);

    if(!product) return;

    if(product.stock <= 0){

        alert("Prodotto esaurito!");

        return;

    }

    product.stock--;

    cart.push({

        id:product.id,

        name:product.name,

        image:product.image,

        price:product.price

    });

    renderProducts();

    updateCart();

}


function updateCart(){

    cartItems.innerHTML="";

    let total=0;

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

    if(cart.length===0){

        cartItems.innerHTML="<p class='empty-cart'>Il carrello è vuoto.</p>";

    }

    cartCount.innerText=cart.length;

    cartTotal.innerText="€"+total.toFixed(2);

}


function removeItem(index){

    const removed = cart[index];

    const product = products.find(p => p.id === removed.id);

    if(product){

        product.stock++;

    }

    cart.splice(index,1);

    renderProducts();

    updateCart();

}

/*================ TOAST =================*/

function showToast(text){

const toast=document.getElementById("toast");

const toastText=document.getElementById("toastText");

toastText.innerText=text;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}
