document.addEventListener("DOMContentLoaded", function () {

    let cart = JSON.parse(localStorage.getItem("expressEatsCart")) || [];

    const cartItemsContainer = document.getElementById("cart-items-container");

    const subtotalElement = document.getElementById("cart-subtotal");

    const deliveryElement = document.getElementById("delivery-fee");

    const discountElement = document.getElementById("discount");

    const totalElement = document.getElementById("cart-total");

    const clearCartButton = document.getElementById("clear-cart-btn");

    const cartCountElement = document.getElementById("cart-count");


    function saveCart() {
        localStorage.setItem("expressEatsCart", JSON.stringify(cart));
    }


    function updateCartCount() {

        const totalQuantity = cart.reduce(function (total, item) {
            return total + item.quantity;
        }, 0);

        if (cartCountElement) {
            cartCountElement.textContent = totalQuantity;
        }
    }


    function renderCart() {

        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {

            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-icon">🛒</div>

                    <h2>Your cart is empty</h2>

                    <p>
                        Looks like you haven't added anything delicious yet.
                    </p>

                    <a href="menu.html" class="checkout-btn">
                        Explore Food
                    </a>
                </div>
            `;

            subtotalElement.textContent = "₹0";
            deliveryElement.textContent = "₹0";
            discountElement.textContent = "₹0";
            totalElement.textContent = "₹0";

            updateCartCount();

            return;
        }


        let subtotal = 0;


        cart.forEach(function (item) {

            const itemTotal = item.price * item.quantity;

            subtotal += itemTotal;


            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";


            cartItem.innerHTML = `
                <div class="cart-item-image">
                    ${item.image || "🍽️"}
                </div>

                <div class="cart-item-details">

                    <h3>${item.name}</h3>

                    <p>${item.category || "Delicious Food"}</p>

                    <div class="cart-item-price">
                        ₹${item.price}
                    </div>

                    <div class="quantity-control">

                        <button class="decrease-btn">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button class="increase-btn">
                            +
                        </button>

                    </div>

                    <button class="remove-item">
                        Remove
                    </button>

                </div>

                <strong>
                    ₹${itemTotal}
                </strong>
            `;


            const decreaseButton =
                cartItem.querySelector(".decrease-btn");

            const increaseButton =
                cartItem.querySelector(".increase-btn");

            const removeButton =
                cartItem.querySelector(".remove-item");


            decreaseButton.addEventListener("click", function () {

                if (item.quantity > 1) {

                    item.quantity--;

                } else {

                    cart = cart.filter(function (cartProduct) {
                        return cartProduct.id !== item.id;
                    });

                }

                saveCart();

                renderCart();

            });


            increaseButton.addEventListener("click", function () {

                item.quantity++;

                saveCart();

                renderCart();

            });


            removeButton.addEventListener("click", function () {

                cart = cart.filter(function (cartProduct) {
                    return cartProduct.id !== item.id;
                });

                saveCart();

                renderCart();

            });


            cartItemsContainer.appendChild(cartItem);

        });


        const deliveryFee = subtotal >= 499 ? 0 : 40;

        const discount = 0;

        const total = subtotal + deliveryFee - discount;


        subtotalElement.textContent = `₹${subtotal}`;

        deliveryElement.textContent =
            deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;

        discountElement.textContent = `₹${discount}`;

        totalElement.textContent = `₹${total}`;


        updateCartCount();

    }


    clearCartButton.addEventListener("click", function () {

        if (cart.length === 0) {
            alert("Your cart is already empty.");
            return;
        }


        const confirmClear = confirm(
            "Are you sure you want to clear your cart?"
        );


        if (confirmClear) {

            cart = [];

            saveCart();

            renderCart();

        }

    });


    renderCart();

});