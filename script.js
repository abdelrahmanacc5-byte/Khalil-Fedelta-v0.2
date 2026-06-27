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
    id:5,
    name:"Candeggina",
    category:"Detergenti",
    price:12.99,
    stock:20,
    rating:5,
    badge:"NEW",
    image:"images/candeggina.jpg"
},
   
];



/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(){

const productsContainer=document.getElementById("productsContainer");

productsContainer.innerHTML="";

products.forEach(product => {

productsContainer.innerHTML += `

<div class="product-card">

${product.badge ? `<div class="badge">${product.badge}</div>` : ""}

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="category">${product.category}</p>

<div class="stars">${"⭐".repeat(product.rating)}</div>

<h2>€ ${product.price}</h2>

<p class="stock">Disponibili: ${product.stock}</p>

<button class="buy-btn" onclick="addToCart(${product.id})">
<i class="fa-solid fa-cart-shopping"></i>
Aggiungi al Carrello
</button>

</div>

`;

});

}


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
/*================ WISHLIST =================*/

let wishlist = [];

function toggleWishlist(id){

    if(wishlist.includes(id)){

        wishlist = wishlist.filter(item => item !== id);

    }else{

        wishlist.push(id);

    }

    renderProducts(
        document.getElementById("searchInput")?.value || ""
    );

}
/*================ BOOKING =================*/

function openBooking(service){

document.getElementById("bookingModal").style.display="flex";

document.getElementById("serviceType").value=service;

}

function closeBooking(){

document.getElementById("bookingModal").style.display="none";

}

function sendBookingWhatsApp(){

const name=document.getElementById("customerName").value;

const phone=document.getElementById("customerPhone").value;

const address=document.getElementById("customerAddress").value;

const date=document.getElementById("customerDate").value;

const time=document.getElementById("customerTime").value;

const note=document.getElementById("customerNote").value;

const service=document.getElementById("serviceType").value;

const message=`Nuova Prenotazione

Nome: ${name}
Telefono: ${phone}
Servizio: ${service}
Data: ${date}
Ora: ${time}
Indirizzo: ${address}
Note: ${note}`;

window.open(
`https://wa.me/39رقم_واتساب_المحل?text=${encodeURIComponent(message)}`,
"_blank"
);

}
