// ========================================
// EXPRESS EATS - RESTAURANTS PAGE
// ========================================


// ========================================
// GET ELEMENTS
// ========================================

const restaurantList =
    document.getElementById("restaurant-list");

const restaurantSearch =
    document.getElementById("restaurant-search");

const restaurantSort =
    document.getElementById("restaurant-sort");

const restaurantCount =
    document.getElementById("restaurant-count");

const restaurantEmpty =
    document.getElementById("restaurant-empty");


// ========================================
// DISPLAY RESTAURANTS
// ========================================

function displayRestaurants(data) {

    restaurantList.innerHTML = "";


    // No restaurants found

    if (data.length === 0) {

        restaurantEmpty.style.display = "block";

        restaurantCount.textContent =
            "0 restaurants found";

        return;
    }


    restaurantEmpty.style.display = "none";


    restaurantCount.textContent =
        `Showing ${data.length} restaurant${data.length > 1 ? "s" : ""}`;


    // Create restaurant cards

    data.forEach(restaurant => {

        const card =
            document.createElement("article");

        card.className =
            "restaurant-card";


        card.innerHTML = `

            <!-- Restaurant Image -->

            <div class="restaurant-image">
                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                    loading="lazy"
                >

            <span class="restaurant-badge">
                    ${restaurant.badge}
            </span>

            <button
                    class="restaurant-heart"
                    onclick="toggleRestaurantWishlist(this)"
                    aria-label="Add restaurant to wishlist"
            >
               ♡
            </button>
            </div>

            <!-- Restaurant Information -->

            <div class="restaurant-content">


                <div class="restaurant-title-row">

                    <h3>
                        ${restaurant.name}
                    </h3>


                    <span class="restaurant-rating">
                        ⭐ ${restaurant.rating}
                    </span>

                </div>


                <p class="restaurant-cuisine">
                    ${restaurant.cuisine}
                </p>


                <p class="restaurant-description">
                    ${restaurant.description}
                </p>


                <div class="restaurant-meta">

                    <span>
                        🕒 ${restaurant.deliveryTime}
                    </span>


                    <span
                        class="${
                            restaurant.availability
                                ? "available"
                                : "unavailable"
                        }"
                    >
                        ${
                            restaurant.availability
                                ? "● Open"
                                : "● Closed"
                        }
                    </span>

                </div>


                <a
                    href="menu.html?restaurant=${restaurant.id}"
                    class="restaurant-menu-button"
                >
                    View Menu →
                </a>

            </div>

        `;


        restaurantList.appendChild(card);

    });

}


// ========================================
// SEARCH RESTAURANTS
// ========================================

function searchRestaurants() {

    const searchTerm =
        restaurantSearch.value
            .toLowerCase()
            .trim();


    let filteredRestaurants =
        restaurants.filter(restaurant => {

            return (

                restaurant.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                restaurant.cuisine
                    .toLowerCase()
                    .includes(searchTerm)

            );

        });


    filteredRestaurants =
        sortRestaurants(filteredRestaurants);


    displayRestaurants(filteredRestaurants);

}


// ========================================
// SORT RESTAURANTS
// ========================================

function sortRestaurants(data) {

    const sortValue =
        restaurantSort.value;


    const sortedData =
        [...data];


    // Highest rating first

    if (sortValue === "rating") {

        sortedData.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    // Fastest delivery first

    else if (sortValue === "delivery") {

        sortedData.sort(
            (a, b) =>
                parseInt(a.deliveryTime) -
                parseInt(b.deliveryTime)
        );

    }


    // Alphabetical order

    else if (sortValue === "name") {

        sortedData.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    return sortedData;

}


// ========================================
// RESTAURANT WISHLIST
// ========================================

function toggleRestaurantWishlist(button) {

    button.classList.toggle("liked");


    if (
        button.classList.contains("liked")
    ) {

        button.textContent = "♥";


        showNotification(
            "Restaurant added to favourites ❤️"
        );

    }

    else {

        button.textContent = "♡";


        showNotification(
            "Restaurant removed from favourites"
        );

    }

}


// ========================================
// SEARCH EVENT
// ========================================

if (restaurantSearch) {

    restaurantSearch.addEventListener(
        "input",
        searchRestaurants
    );

}


// ========================================
// SORT EVENT
// ========================================

if (restaurantSort) {

    restaurantSort.addEventListener(
        "change",
        searchRestaurants
    );

}


// ========================================
// INITIAL LOAD
// ========================================

displayRestaurants(restaurants);