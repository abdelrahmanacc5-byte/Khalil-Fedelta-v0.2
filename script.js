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
