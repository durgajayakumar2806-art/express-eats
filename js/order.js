// ========================================
// EXPRESS EATS - ORDER SUCCESS
// ========================================

const latestOrder =
    JSON.parse(
        localStorage.getItem(
            "expressEatsLatestOrder"
        )
    );


// ========================================
// CHECK ORDER
// ========================================

if (!latestOrder) {

    window.location.href =
        "index.html";

}


// ========================================
// BASIC DETAILS
// ========================================

if (latestOrder) {

    document.getElementById(
        "success-order-id"
    ).textContent =
        "#" + latestOrder.id;


    document.getElementById(
        "success-name"
    ).textContent =
        latestOrder.customer.name;


    document.getElementById(
        "success-phone"
    ).textContent =
        latestOrder.customer.phone;


    document.getElementById(
        "success-email"
    ).textContent =
        latestOrder.customer.email;


    document.getElementById(
        "success-address"
    ).textContent =
        latestOrder.customer.address;


    document.getElementById(
        "success-payment"
    ).textContent =
        latestOrder.payment;

}


// ========================================
// ORDER ITEMS
// ========================================

const successItems =
    document.getElementById(
        "success-items"
    );


let totalQuantity = 0;


if (latestOrder) {

    latestOrder.items.forEach(item => {

        totalQuantity += item.quantity;


        const itemElement =
            document.createElement("div");

        itemElement.className =
            "success-order-item";


        itemElement.innerHTML = `

            <div class="success-item-icon">

                ${getOrderEmoji(item.category)}

            </div>


            <div class="success-item-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.quantity}
                    × ₹${item.price}
                </p>

            </div>


            <strong>
                ₹${item.price * item.quantity}
            </strong>

        `;


        successItems.appendChild(
            itemElement
        );

    });


    document.getElementById(
        "success-item-count"
    ).textContent =
        `${totalQuantity} item${totalQuantity !== 1 ? "s" : ""}`;


    // ========================================
    // TOTALS
    // ========================================

    document.getElementById(
        "success-subtotal"
    ).textContent =
        `₹${latestOrder.subtotal}`;


    document.getElementById(
        "success-delivery"
    ).textContent =
        latestOrder.delivery === 0
            ? "FREE"
            : `₹${latestOrder.delivery}`;


    document.getElementById(
        "success-discount"
    ).textContent =
        `- ₹${latestOrder.discount}`;


    document.getElementById(
        "success-total"
    ).textContent =
        `₹${latestOrder.total}`;

}


// ========================================
// EMOJI
// ========================================

function getOrderEmoji(category) {

    const emojiMap = {

        "Pizza": "🍕",

        "Burgers": "🍔",

        "Fast Food": "🍜",

        "Desserts": "🍰",

        "Beverages": "🥤",

        "Healthy": "🥗"

    };


    return emojiMap[category] || "🍽️";

}