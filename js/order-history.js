// ========================================
// EXPRESS EATS - ORDER HISTORY
// ========================================


// ========================================
// GET ELEMENTS
// ========================================

const orderList =
    document.getElementById("order-list");

const noOrders =
    document.getElementById("no-orders");


// ========================================
// LOAD ORDERS
// ========================================

function loadOrderHistory() {

    const orders =
        JSON.parse(
            localStorage.getItem("expressEatsOrders")
        ) || [];


    // No orders

    if (orders.length === 0) {

        orderList.innerHTML = "";

        noOrders.style.display = "block";

        return;

    }


    noOrders.style.display = "none";


    orderList.innerHTML = "";


    // Display newest order first

    orders
        .slice()
        .reverse()
        .forEach(order => {

            const orderCard =
                document.createElement("div");

            orderCard.className =
                "order-history-card";


            const itemsHTML =
                order.items.map(item => `

                    <div class="order-item">

                        <span>
                            ${item.name}
                            × ${item.quantity}
                        </span>

                        <strong>
                            ₹${item.price * item.quantity}
                        </strong>

                    </div>

                `).join("");


            orderCard.innerHTML = `

                <div class="order-card-header">

                    <div>

                        <h3>
                            Order #${order.id}
                        </h3>

                        <p>
                            ${order.date || "Recent Order"}
                        </p>

                    </div>

                    <span class="order-status">
                        ${order.status || "Confirmed"}
                    </span>

                </div>


                <div class="order-items">

                    ${itemsHTML}

                </div>


                <div class="order-card-footer">

                    <strong>
                        Total: ₹${order.total}
                    </strong>

                    <span>
                        ${order.customer?.name || "Customer"}
                    </span>

                </div>

            `;


            orderList.appendChild(
                orderCard
            );

        });

}


// ========================================
// CLEAR ORDER HISTORY
// ========================================

function clearOrderHistory() {

    const confirmClear =
        confirm(
            "Are you sure you want to clear your order history?"
        );


    if (!confirmClear) return;


    localStorage.removeItem(
        "expressEatsOrders"
    );


    loadOrderHistory();

}


// ========================================
// INITIALIZE
// ========================================

loadOrderHistory();