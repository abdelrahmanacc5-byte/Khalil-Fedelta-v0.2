/* =========================
   LOADING SCREEN
========================= */

window.onload = () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },700);

        }

    },1800);

};

/* =========================
   COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

function startCounter(){

    counters.forEach(counter=>{

        const target = Number(counter.dataset.target);

        let current = 0;

        const update=()=>{

            const increment=Math.ceil(target/80);

            current+=increment;

            if(current<target){

                counter.innerText=current;

                requestAnimationFrame(update);

            }else{

                counter.innerText=target;

            }

        }

        update();

    });

}

window.addEventListener("load",startCounter);

/* =========================
   PRODUCTS
========================= */

const products=[

{
id:1,
name:"Candeggina",
category:"Detergenti",
price:12.99,
stock:20,
rating:5,
badge:"NEW",
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Chanteclair Sgrassatore",
category:"Detergenti",
price:4.99,
stock:30,
rating:5,
badge:"HOT",
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Dash Pods",
category:"Detergenti",
price:9.99,
stock:18,
rating:5,
badge:"SALE",
image:"https://picsum.photos/300?3"
}

];

/* =========================
   CART
========================= */

let cart=[];

/* =========================
   WISHLIST
========================= */

let wishlist=[];

/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(search=""){

const container=document.getElementById("productsContainer");

if(!container) return;

container.innerHTML="";

const filtered=products.filter(product=>{

return product.name.toLowerCase().includes(search.toLowerCase()) ||

product.category.toLowerCase().includes(search.toLowerCase());

});

if(filtered.length===0){

container.innerHTML=`
<h2 style="grid-column:1/-1;text-align:center;">
Nessun prodotto trovato
</h2>
`;

return;

}

filtered.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

${product.badge?`<div class="badge">${product.badge}</div>`:""}

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<div>${"⭐".repeat(product.rating)}</div>

<h2>€${product.price}</h2>

<p>Disponibili: ${product.stock}</p>

<button class="buy-btn"

onclick="addToCart(${product.id})">

<i class="fa-solid fa-cart-shopping"></i>

Aggiungi al Carrello

</button>

</div>

`;

});
/* =========================
   SEARCH
========================= */

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input",(e)=>{

renderProducts(e.target.value);

});

}

/* =========================
   WISHLIST
========================= */

function toggleWishlist(id){

if(wishlist.includes(id)){

wishlist=wishlist.filter(item=>item!==id);

}else{

wishlist.push(id);

}

}

/* =========================
   OPEN / CLOSE CART
========================= */

const cartButton=document.getElementById("cartButton");
const cartSidebar=document.getElementById("cartSidebar");
const cartOverlay=document.getElementById("cartOverlay");
const closeCart=document.getElementById("closeCart");

const cartItems=document.getElementById("cartItems");
const cartTotal=document.getElementById("cartTotal");
const cartCount=document.getElementById("cartCount");

cartButton.onclick=()=>{

cartSidebar.classList.add("active");
cartOverlay.classList.add("active");

};

closeCart.onclick=()=>{

cartSidebar.classList.remove("active");
cartOverlay.classList.remove("active");

};

cartOverlay.onclick=()=>{

cartSidebar.classList.remove("active");
cartOverlay.classList.remove("active");

};

/* =========================
   ADD TO CART
========================= */

function addToCart(id){

const product=products.find(p=>p.id===id);

if(!product) return;

if(product.stock<=0){

alert("Prodotto esaurito");

return;

}

const existing=cart.find(item=>item.id===id);

if(existing){

existing.quantity++;

}else{

cart.push({

id:product.id,
name:product.name,
image:product.image,
price:product.price,
quantity:1

});

}

product.stock--;

renderProducts(searchInput?.value||"");

updateCart();

}
/* =========================
   UPDATE CART
========================= */

function updateCart(){

cartItems.innerHTML="";

let total=0;
let totalItems=0;

if(cart.length===0){

cartItems.innerHTML="<p class='empty-cart'>Il carrello è vuoto.</p>";

cartTotal.innerText="€0.00";

cartCount.innerText="0";

return;

}

cart.forEach(item=>{

total+=item.price*item.quantity;

totalItems+=item.quantity;

cartItems.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div class="cart-info">

<h4>${item.name}</h4>

<p>€${item.price}</p>

<div class="qty-box">

<button onclick="decreaseQuantity(${item.id})">-</button>

<span>${item.quantity}</span>

<button onclick="increaseQuantity(${item.id})">+</button>

</div>

</div>

<button class="delete-btn"

onclick="removeItem(${item.id})">

<i class="fa-solid fa-trash"></i>

</button>

</div>

`;

});

cartTotal.innerText="€"+total.toFixed(2);

cartCount.innerText=totalItems;

}

/* =========================
   INCREASE
========================= */

function increaseQuantity(id){

const item=cart.find(i=>i.id===id);

const product=products.find(p=>p.id===id);

if(!item || !product) return;

if(product.stock<=0){

alert("Prodotto esaurito");

return;

}

item.quantity++;

product.stock--;

renderProducts(searchInput?.value||"");

updateCart();

}

/* =========================
   DECREASE
========================= */

function decreaseQuantity(id){

const item=cart.find(i=>i.id===id);

const product=products.find(p=>p.id===id);

if(!item || !product) return;

item.quantity--;

product.stock++;

if(item.quantity<=0){

cart=cart.filter(i=>i.id!==id);

}

renderProducts(searchInput?.value||"");

updateCart();

}

/* =========================
   DELETE ITEM
========================= */

function removeItem(id){

const item=cart.find(i=>i.id===id);

const product=products.find(p=>p.id===id);

if(item && product){

product.stock+=item.quantity;

}

cart=cart.filter(i=>i.id!==id);

renderProducts(searchInput?.value||"");

updateCart();

}
renderProducts();
updateCart();
/* =========================
   WHATSAPP ORDER
========================= */

function sendOrderWhatsApp(){

if(cart.length===0){

alert("Il carrello è vuoto!");

return;

}

let message=`🛒 *Nuovo Ordine*%0A%0A`;

let total=0;

cart.forEach(item=>{

const sub=item.price*item.quantity;

total+=sub;

message+=`• ${item.name}%0A`;

message+=`Quantità: ${item.quantity}%0A`;

message+=`Prezzo: €${sub.toFixed(2)}%0A%0A`;

});

message+=`💰 Totale: €${total.toFixed(2)}%0A%0A`;

message+=`👤 Nome:%0A`;

message+=`📞 Telefono:%0A`;

message+=`📍 Indirizzo:%0A`;

message+=`📝 Note:%0A`;

window.open(

"https://wa.me/393934020090?text="+message,

"_blank"

);

}

}
/* =========================
   PRODUCT DETAILS
========================= */

function showDetails(id){

const product=products.find(p=>p.id===id);

if(!product) return;

alert(

`${product.name}

Categoria: ${product.category}

Prezzo: €${product.price}

Disponibili: ${product.stock}`

);

}
