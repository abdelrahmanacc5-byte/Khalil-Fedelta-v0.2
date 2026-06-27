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

    cart.splice(index,1);

    updateCart();

}
