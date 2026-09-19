/* =========================================================
   EXPRESS EATS
   Main JavaScript
========================================================= */


/* =========================================================
   1. GET ELEMENTS
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const navLinks =
    document.querySelector(".nav-links");

const cartCountElement =
    document.querySelector(".cart-count");


/* =========================================================
   2. SHOPPING CART
========================================================= */

// Get existing cart from LocalStorage

let cart = JSON.parse(
    localStorage.getItem("expressEatsCart")
) || [];


/* =========================================================
   3. UPDATE CART COUNT
========================================================= */

function updateCartCount() {

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    if (cartCountElement) {

        cartCountElement.textContent = totalItems;

    }
}


/* =========================================================
   4. SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "expressEatsCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   5. ADD ITEM TO CART
========================================================= */

function addToCart(food) {

    const existingItem = cart.find(
        item => item.id === food.id
    );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            ...food,
            quantity: 1
        });

    }


    saveCart();

    updateCartCount();

    showNotification(
        `${food.name} added to your cart!`
    );

}


/* =========================================================
   6. REMOVE ITEM FROM CART
========================================================= */

function removeFromCart(foodId) {

    cart = cart.filter(
        item => item.id !== foodId
    );

    saveCart();

    updateCartCount();

}


/* =========================================================
   7. CLEAR CART
========================================================= */

function clearCart() {

    cart = [];

    saveCart();

    updateCartCount();

}


/* =========================================================
   8. MOBILE NAVIGATION
========================================================= */

if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("mobile-active");

        }
    );

}


/* =========================================================
   9. WISHLIST BUTTONS
========================================================= */

const wishlistButtons =
    document.querySelectorAll(
        ".wishlist-btn, .heart-button"
    );


wishlistButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            this.classList.toggle("liked");


            if (this.classList.contains("liked")) {

                this.textContent = "♥";

                showNotification(
                    "Added to favourites ❤️"
                );

            } else {

                this.textContent = "♡";

                showNotification(
                    "Removed from favourites"
                );

            }

        }
    );

});


/* =========================================================
   10. ADD BUTTONS
========================================================= */

const addButtons =
    document.querySelectorAll(".add-cart-btn");


addButtons.forEach((button, index) => {

    button.addEventListener(
        "click",
        function () {

            /*
                Temporary homepage food data.

                Later this will be moved into
                data.js and used throughout
                the entire application.
            */

            const foods = [

                {
                    id: 1,
                    name: "Margherita Pizza",
                    category: "Pizza",
                    price: 249
                },

                {
                    id: 2,
                    name: "Classic Chicken Burger",
                    category: "Burger",
                    price: 199
                },

                {
                    id: 3,
                    name: "Veg Noodles",
                    category: "Fast Food",
                    price: 169
                },

                {
                    id: 4,
                    name: "Chocolate Brownie",
                    category: "Dessert",
                    price: 149
                }

            ];


            addToCart(foods[index]);

        }
    );

});


/* =========================================================
   11. NOTIFICATION
========================================================= */

function showNotification(message) {

    const existingNotification =
        document.querySelector(
            ".notification"
        );


    if (existingNotification) {

        existingNotification.remove();

    }


    const notification =
        document.createElement("div");


    notification.className =
        "notification";


    notification.innerHTML = `
        <span>✓</span>
        <p>${message}</p>
    `;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.classList.add(
            "notification-hide"
        );

        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 2500);

}


/* =========================================================
   12. INITIALIZE CART
========================================================= */

updateCartCount();


/* =========================================================
   13. EXPOSE FUNCTIONS
========================================================= */

window.ExpressEats = {

    cart,

    addToCart,

    removeFromCart,

    clearCart,

    updateCartCount

};