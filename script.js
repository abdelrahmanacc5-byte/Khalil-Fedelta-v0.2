/* =========================
   LOADING
========================= */

window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},700);

},1800);

}
/*================ COUNTER =================*/

const counters=document.querySelectorAll(".counter");

const startCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const update=()=>{

const increment=Math.ceil(target/80);

count+=increment;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

};

window.addEventListener("load",startCounter);

const products = [
{
id:1,
name:"Detergente Ultra",
price:19.99,
stock:50,
rating:5,
badge:"BEST SELLER",
category:"Detergenti",
image:"https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600"
},
{
id:2,
name:"Sapone Professionale",
price:14.99,
stock:30,
rating:4,
badge:"NEW",
category:"Detergenti",
image:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600"
},
{
id:3,
name:"Mop Premium",
price:24.99,
stock:18,
rating:5,
badge:"-20%",
category:"Accessori",
image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600"
},
{
id:4,
name:"Secchio Cleaning",
price:12.99,
stock:40,
rating:4,
badge:"",
category:"Accessori",
image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600"
}
];

const productsContainer=document.getElementById("productsContainer");

function renderProducts(){

productsContainer.innerHTML="";

products.forEach(product=>{

productsContainer.innerHTML+=`

<div class="product-card">

<div class="badge">${product.badge}</div>

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="price">€ ${product.price}</p>

<p>Disponibili: ${product.stock}</p>

<button>Aggiungi al Carrello</button>

</div>

`;

});

}

renderProducts();


/* ================= PRODUCTS ================= */

const products = [
const productsContainer = document.getElementById("productsContainer");

function renderProducts() {

    productsContainer.innerHTML = "";

    products.forEach(product => {

        const stars = "⭐".repeat(product.rating);

        productsContainer.innerHTML += `

        <div class="product-card">

            ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="category">${product.category}</p>

            <div class="stars">${stars}</div>

            <h2>€ ${product.price}</h2>

            <p class="stock">Disponibili: ${product.stock}</p>

            <button class="buy-btn">
                <i class="fa-solid fa-cart-shopping"></i>
                Aggiungi al Carrello
            </button>

        </div>

        `;

    });

}

renderProducts();
   
{
id:1,
name:"Detergente Ultra",
price:19.99,
stock:50,
rating:5,
badge:"BEST SELLER",
category:"Detergenti",
image:"https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800"
},

{
id:2,
name:"Sapone Professionale",
price:14.99,
stock:30,
rating:4,
badge:"NEW",
category:"Detergenti",
image:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800"
},

{
id:3,
name:"Mop Premium",
price:24.99,
stock:18,
rating:5,
badge:"-20%",
category:"Accessori",
image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800"
},

{
id:4,
name:"Secchio Cleaning",
price:12.99,
stock:40,
rating:4,
badge:"",
category:"Accessori",
image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800"
}

];
