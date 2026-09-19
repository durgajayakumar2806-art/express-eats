// ========================================
// EXPRESS EATS - MENU PAGE
// ========================================


// ========================================
// GET ELEMENTS
// ========================================

const foodList =
    document.getElementById("food-list");

const foodSearch =
    document.getElementById("food-search");

const categoryFilter =
    document.getElementById("category-filter");

const restaurantFilter =
    document.getElementById("restaurant-filter");

const priceFilter =
    document.getElementById("price-filter");

const foodSort =
    document.getElementById("food-sort");

const foodResultCount =
    document.getElementById("food-result-count");

const foodEmpty =
    document.getElementById("food-empty");


// ========================================
// CURRENT FILTER
// ========================================

let selectedCategory = "all";

// Read category from homepage URL
const urlParams = new URLSearchParams(window.location.search);
const urlCategory = urlParams.get("category");

if (urlCategory) {
    selectedCategory = decodeURIComponent(urlCategory);
}


// ========================================
// LOAD RESTAURANTS
// INTO RESTAURANT FILTER
// ========================================

function loadRestaurantFilter() {

    if (!restaurantFilter) return;


    restaurants.forEach(restaurant => {

        const option =
            document.createElement("option");


        option.value =
            restaurant.id;


        option.textContent =
            restaurant.name;


        restaurantFilter.appendChild(
            option
        );

    });

}


// ========================================
// CREATE FOOD CARD
// ========================================

function createFoodCard(food) {

    const restaurant =
        getRestaurantById(
            food.restaurantId
        );


    const card =
        document.createElement("article");


    card.className =
        "food-menu-card";


    card.innerHTML = `

        <!-- FOOD IMAGE -->

        <div class="food-menu-image">

            <img
                src="${food.image}"
                alt="${food.name}"
                loading="lazy"
            >


            <span class="food-category-badge">
                ${food.category}
            </span>


            <button
                class="food-wishlist-btn"
                onclick="toggleFoodWishlist(this)"
                aria-label="Add ${food.name} to wishlist"
            >
                ♡
            </button>

        </div>


        <!-- FOOD INFORMATION -->

        <div class="food-menu-content">


            <div class="food-menu-top">

                <h3>
                    ${food.name}
                </h3>


                <span class="food-rating">
                    ⭐ ${food.rating}
                </span>

            </div>


            <p class="food-restaurant">

                🏪 ${restaurant.name}

            </p>


            <p class="food-description">

                ${food.description}

            </p>


            <div class="food-menu-bottom">


                <div class="food-price">

                    ₹${food.price}

                </div>


                <button
                    class="add-food-btn"
                    onclick="addFoodToCart(${food.id})"
                >
                    + Add
                </button>

            </div>

        </div>

    `;


    return card;

}


// ========================================
// DISPLAY FOOD
// ========================================

function displayFood(data) {

    foodList.innerHTML = "";


    // No food found

    if (data.length === 0) {

        foodEmpty.style.display =
            "block";


        foodResultCount.textContent =
            "0 food items found";


        return;

    }


    foodEmpty.style.display =
        "none";


    foodResultCount.textContent =
        `Showing ${data.length} food item${
            data.length > 1 ? "s" : ""
        }`;


    data.forEach(food => {

        foodList.appendChild(
            createFoodCard(food)
        );

    });

}


// ========================================
// FILTER FOOD
// ========================================

function filterFood() {

    const searchTerm =
        foodSearch.value
            .toLowerCase()
            .trim();


    const restaurantValue =
        restaurantFilter.value;


    const priceValue =
        priceFilter.value;


    let filtered =
        foods.filter(food => {


            // ----------------------------
            // SEARCH
            // ----------------------------

            const restaurant =
                getRestaurantById(
                    food.restaurantId
                );


            const matchesSearch =

            food.name.toLowerCase().includes(searchTerm)

               ||

            food.category.toLowerCase().includes(searchTerm)

               ||

            food.description.toLowerCase().includes(searchTerm)

               ||

            restaurant.name.toLowerCase().includes(searchTerm)

               ||

            restaurant.cuisine.toLowerCase().includes(searchTerm);

            // ----------------------------
            // CATEGORY
            // ----------------------------

            const matchesCategory =

                selectedCategory === "all"

                ||

                food.category ===
                    selectedCategory;


            // ----------------------------
            // RESTAURANT
            // ----------------------------

            const matchesRestaurant =

                restaurantValue === "all"

                ||

                food.restaurantId ===
                    Number(restaurantValue);


            // ----------------------------
            // PRICE
            // ----------------------------

            let matchesPrice = true;


            if (priceValue === "under150") {

                matchesPrice =
                    food.price < 150;

            }


            else if (
                priceValue === "150to250"
            ) {

                matchesPrice =
                    food.price >= 150 &&
                    food.price <= 250;

            }


            else if (
                priceValue === "250to350"
            ) {

                matchesPrice =
                    food.price > 250 &&
                    food.price <= 350;

            }


            else if (
                priceValue === "above350"
            ) {

                matchesPrice =
                    food.price > 350;

            }


            return (

                matchesSearch &&
                matchesCategory &&
                matchesRestaurant &&
                matchesPrice

            );

        });


    // SORT

    filtered =
        sortFood(filtered);


    displayFood(filtered);

}


// ========================================
// SORT FOOD
// ========================================

function sortFood(data) {

    const sortValue =
        foodSort.value;


    const sorted =
        [...data];


    // Popularity

    if (
        sortValue === "popularity"
    ) {

        sorted.sort(
            (a, b) =>
                b.popularity -
                a.popularity
        );

    }


    // Rating

    else if (
        sortValue === "rating"
    ) {

        sorted.sort(
            (a, b) =>
                b.rating -
                a.rating
        );

    }


    // Low price

    else if (
        sortValue === "low-price"
    ) {

        sorted.sort(
            (a, b) =>
                a.price -
                b.price
        );

    }


    // High price

    else if (
        sortValue === "high-price"
    ) {

        sorted.sort(
            (a, b) =>
                b.price -
                a.price
        );

    }


    return sorted;

}


// ========================================
// ADD FOOD TO CART
// ========================================

function addFoodToCart(foodId) {

    const food =
        getFoodById(foodId);


    if (!food) return;


    const restaurant =
        getRestaurantById(
            food.restaurantId
        );


    const cartItem = {

        id: food.id,

        name: food.name,

        price: food.price,

        category: food.category,

        restaurant: restaurant.name,

        quantity: 1

    };


    addToCart(cartItem);


    showNotification(
        `${food.name} added to cart 🛒`
    );

}


// ========================================
// FOOD WISHLIST
// ========================================

function toggleFoodWishlist(button) {

    button.classList.toggle(
        "liked"
    );


    if (
        button.classList.contains(
            "liked"
        )
    ) {

        button.textContent = "♥";


        showNotification(
            "Added to favourites ❤️"
        );

    }


    else {

        button.textContent = "♡";


        showNotification(
            "Removed from favourites"
        );

    }

}


// ========================================
// CATEGORY BUTTONS
// ========================================

const categoryButtons =
    document.querySelectorAll(
        ".category-filter-btn"
    );


categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {


            categoryButtons.forEach(
                btn => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            selectedCategory =
                button.dataset.category;


            if (categoryFilter) {

                categoryFilter.value =
                    selectedCategory;

            }


            filterFood();

        }
    );

});


// ========================================
// CATEGORY DROPDOWN
// ========================================

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        () => {


            selectedCategory =
                categoryFilter.value;


            categoryButtons.forEach(
                btn => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            const activeButton =
                document.querySelector(
                    `[data-category="${selectedCategory}"]`
                );


            if (activeButton) {

                activeButton.classList.add(
                    "active"
                );

            }


            filterFood();

        }
    );

}


// ========================================
// SEARCH
// ========================================

if (foodSearch) {

    foodSearch.addEventListener("input", function () {
        filterFood();
    });

}


// ========================================
// RESTAURANT FILTER
// ========================================

if (restaurantFilter) {

    restaurantFilter.addEventListener(
        "change",
        filterFood
    );

}


// ========================================
// PRICE FILTER
// ========================================

if (priceFilter) {

    priceFilter.addEventListener(
        "change",
        filterFood
    );

}


// ========================================
// SORT FILTER
// ========================================

if (foodSort) {

    foodSort.addEventListener(
        "change",
        filterFood
    );

}


// ========================================
// INITIALIZE MENU
// ========================================

loadRestaurantFilter();

filterFood();