// ========================================
// EXPRESS EATS - CHECKOUT
// ========================================

const checkoutForm =
    document.getElementById("checkout-form");

const checkoutItems =
    document.getElementById("checkout-items");

const checkoutItemCount =
    document.getElementById("checkout-item-count");

const checkoutSubtotal =
    document.getElementById("checkout-subtotal");

const checkoutDelivery =
    document.getElementById("checkout-delivery");

const checkoutDiscount =
    document.getElementById("checkout-discount");

const checkoutTotal =
    document.getElementById("checkout-total");


// ========================================
// GET CART
// ========================================

function getCheckoutCart() {

    return JSON.parse(
        localStorage.getItem("expressEatsCart")
    ) || [];

}


// ========================================
// DISPLAY CHECKOUT SUMMARY
// ========================================

function displayCheckoutSummary() {

    const currentCart =
        getCheckoutCart();


    checkoutItems.innerHTML = "";


    if (currentCart.length === 0) {

        checkoutItems.innerHTML = `
            <div class="checkout-empty">
                <span>🛒</span>
                <p>Your cart is empty.</p>
                <a href="menu.html">
                    Browse Menu
                </a>
            </div>
        `;

        checkoutItemCount.textContent =
            "0 items";

        checkoutSubtotal.textContent =
            "₹0";

        checkoutDelivery.textContent =
            "₹0";

        checkoutDiscount.textContent =
            "- ₹0";

        checkoutTotal.textContent =
            "₹0";

        return;

    }


    let subtotal = 0;

    let totalQuantity = 0;


    currentCart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;


        subtotal += itemTotal;

        totalQuantity += item.quantity;


        const itemElement =
            document.createElement("div");

        itemElement.className =
            "checkout-item";


        itemElement.innerHTML = `

            <div class="checkout-item-icon">

                ${getCheckoutEmoji(item.category)}

            </div>

            <div class="checkout-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ${item.quantity} × ₹${item.price}
                </p>

            </div>

            <strong>
                ₹${itemTotal}
            </strong>

        `;


        checkoutItems.appendChild(
            itemElement
        );

    });


    const delivery =
        subtotal >= 500 ? 0 : 40;


    const discount =
        subtotal >= 500
            ? Math.round(subtotal * 0.20)
            : 0;


    const total =
        subtotal + delivery - discount;


    checkoutItemCount.textContent =
        `${totalQuantity} item${totalQuantity !== 1 ? "s" : ""}`;


    checkoutSubtotal.textContent =
        `₹${subtotal}`;


    checkoutDelivery.textContent =
        delivery === 0
            ? "FREE"
            : `₹${delivery}`;


    checkoutDiscount.textContent =
        `- ₹${discount}`;


    checkoutTotal.textContent =
        `₹${total}`;

}


// ========================================
// EMOJI
// ========================================

function getCheckoutEmoji(category) {

    const emojiMap = {

    "Pizza": "🍕",
    "Burgers": "🍔",
    "Fast Food": "🍟",
    "Desserts": "🍰",
    "Beverages": "🥤",
    "Healthy": "🥗",
    "South Indian": "🥞",
    "Biryani": "🍛"

};


    return emojiMap[category] || "🍽️";

}


// ========================================
// VALIDATION
// ========================================

function validateCheckoutForm() {

    let valid = true;


    const name =
        document.getElementById("customer-name");

    const phone =
        document.getElementById("customer-phone");

    const email =
        document.getElementById("customer-email");

    const address =
        document.getElementById("customer-address");


    const nameError =
        document.getElementById("name-error");

    const phoneError =
        document.getElementById("phone-error");

    const emailError =
        document.getElementById("email-error");

    const addressError =
        document.getElementById("address-error");


    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    addressError.textContent = "";


    // NAME

    if (name.value.trim().length < 3) {

        nameError.textContent =
            "Please enter your full name.";

        valid = false;

    }


    // PHONE

    const phonePattern =
        /^[6-9][0-9]{9}$/;


    if (!phonePattern.test(
        phone.value.trim()
    )) {

        phoneError.textContent =
            "Enter a valid 10-digit mobile number.";

        valid = false;

    }


    // EMAIL

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(
        email.value.trim()
    )) {

        emailError.textContent =
            "Enter a valid email address.";

        valid = false;

    }


    // ADDRESS

    if (address.value.trim().length < 10) {

        addressError.textContent =
            "Please enter your complete delivery address.";

        valid = false;

    }


    return valid;

}


// ========================================
// PLACE ORDER
// ========================================

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const currentCart =
                getCheckoutCart();


            if (currentCart.length === 0) {

                showNotification(
                    "Your cart is empty!"
                );

                return;

            }


            if (!validateCheckoutForm()) {

                showNotification(
                    "Please correct the form details."
                );

                return;

            }


            const selectedPayment =
                document.querySelector(
                    'input[name="payment"]:checked'
                );


            const order = {

                id:
                    "EE" +
                    Date.now()
                    .toString()
                    .slice(-8),

                date:
                    new Date().toLocaleString(),

                customer: {

                    name:
                        document.getElementById(
                            "customer-name"
                        ).value.trim(),

                    phone:
                        document.getElementById(
                            "customer-phone"
                        ).value.trim(),

                    email:
                        document.getElementById(
                            "customer-email"
                        ).value.trim(),

                    address:
                        document.getElementById(
                            "customer-address"
                        ).value.trim(),

                    instructions:
                        document.getElementById(
                            "delivery-instructions"
                        ).value.trim()

                },

                payment:
                    selectedPayment
                        ? selectedPayment.value
                        : "Cash on Delivery",

                items:
                    currentCart,

                status:
                    "Order Confirmed"

            };


            // Calculate total

            let subtotal = 0;


            currentCart.forEach(item => {

                subtotal +=
                    item.price *
                    item.quantity;

            });


            const delivery =
                subtotal >= 500 ? 0 : 40;


            const discount =
                subtotal >= 500
                    ? Math.round(subtotal * 0.20)
                    : 0;


            order.subtotal =
                subtotal;

            order.delivery =
                delivery;

            order.discount =
                discount;

            order.total =
                subtotal +
                delivery -
                discount;


            // Save order

            const orders =
                JSON.parse(
                    localStorage.getItem(
                        "expressEatsOrders"
                    )
                ) || [];


            orders.unshift(order);


            localStorage.setItem(
                "expressEatsOrders",
                JSON.stringify(orders)
            );


            // Clear cart

            localStorage.removeItem(
                "expressEatsCart"
            );


            // Save latest order

            localStorage.setItem(
                "expressEatsLatestOrder",
                JSON.stringify(order)
            );


            // Go to confirmation

            window.location.href =
                "order-success.html";

        }
    );

}


// ========================================
// INITIALIZE
// ========================================

displayCheckoutSummary();