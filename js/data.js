// ==========================================
// EXPRESS EATS - RESTAURANT DATA
// ==========================================

const restaurants = [
    {
        id: 1,
        name: "Spice Route",
        cuisine: "Indian • North Indian • Biryani",
        rating: 4.8,
        deliveryTime: "20–25 mins",
        availability: "Open",
        badge: "20% OFF",
        popularity: 98,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Urban Bites",
        cuisine: "Burgers • Fast Food • Beverages",
        rating: 4.6,
        deliveryTime: "25–30 mins",
        availability: "Open",
        badge: "Popular",
        popularity: 95,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Pizza Palace",
        cuisine: "Pizza • Italian • Fast Food",
        rating: 4.9,
        deliveryTime: "20–30 mins",
        availability: "Open",
        badge: "Top Rated",
        popularity: 99,
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Green Bowl",
        cuisine: "Healthy • Salads • Vegan",
        rating: 4.7,
        deliveryTime: "25–35 mins",
        availability: "Open",
        badge: "Healthy",
        popularity: 90,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Sweet Cravings",
        cuisine: "Desserts • Bakery • Ice Cream",
        rating: 4.5,
        deliveryTime: "15–25 mins",
        availability: "Open",
        badge: "20% OFF",
        popularity: 87,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Chennai Tiffin House",
        cuisine: "South Indian • Breakfast",
        rating: 4.8,
        deliveryTime: "15–20 mins",
        availability: "Open",
        badge: "Local Favourite",
        popularity: 93,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Royal Biryani",
        cuisine: "Biryani • Indian • Mughlai",
        rating: 4.7,
        deliveryTime: "30–35 mins",
        availability: "Open",
        badge: "Best Seller",
        popularity: 94,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Fresh Sip Cafe",
        cuisine: "Beverages • Cafe • Snacks",
        rating: 4.4,
        deliveryTime: "15–20 mins",
        availability: "Open",
        badge: "Trending",
        popularity: 82,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
    }
];


// ==========================================
// EXPRESS EATS - FOOD DATA
// ==========================================

const foods = [

    // ---------- PIZZA ----------
    {
        id: 101,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 249,
        rating: 4.8,
        restaurantId: 3,
        popularity: 98,
        description: "Classic pizza topped with tomato, mozzarella and fresh basil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 102,
        name: "Farmhouse Pizza",
        category: "Pizza",
        price: 329,
        rating: 4.7,
        restaurantId: 3,
        popularity: 94,
        description: "Loaded with fresh vegetables, mozzarella and delicious herbs.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 103,
        name: "Chicken Pepperoni Pizza",
        category: "Pizza",
        price: 399,
        rating: 4.9,
        restaurantId: 3,
        popularity: 99,
        description: "Cheesy pizza topped with spicy chicken pepperoni.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        vegetarian: false
    },


    // ---------- BURGERS ----------
    {
        id: 201,
        name: "Classic Chicken Burger",
        category: "Burgers",
        price: 199,
        rating: 4.7,
        restaurantId: 2,
        popularity: 97,
        description: "Crispy chicken patty with lettuce, cheese and special sauce.",
       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        vegetarian: false
    },

    {
        id: 202,
        name: "Veggie Supreme Burger",
        category: "Burgers",
        price: 169,
        rating: 4.5,
        restaurantId: 2,
        popularity: 88,
        description: "Delicious vegetable patty with fresh lettuce and creamy sauce.",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 203,
        name: "Double Cheese Burger",
        category: "Burgers",
        price: 249,
        rating: 4.8,
        restaurantId: 2,
        popularity: 96,
        description: "Juicy double patty burger with double cheese.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        vegetarian: false
    },


    // ---------- FAST FOOD ----------
    {
        id: 301,
        name: "Veg Noodles",
        category: "Fast Food",
        price: 169,
        rating: 4.6,
        restaurantId: 1,
        popularity: 91,
        description: "Stir-fried noodles tossed with fresh vegetables and sauces.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 302,
        name: "Chicken Fried Rice",
        category: "Fast Food",
        price: 219,
        rating: 4.7,
        restaurantId: 1,
        popularity: 95,
        description: "Aromatic fried rice with tender chicken and vegetables.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
        vegetarian: false
    },

    {
        id: 303,
        name: "Crispy French Fries",
        category: "Fast Food",
        price: 129,
        rating: 4.5,
        restaurantId: 2,
        popularity: 90,
        description: "Golden crispy fries seasoned with our special spice mix.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },


    // ---------- DESSERTS ----------
    {
        id: 401,
        name: "Chocolate Brownie",
        category: "Desserts",
        price: 149,
        rating: 4.9,
        restaurantId: 5,
        popularity: 97,
        description: "Rich and fudgy chocolate brownie served fresh.",
        image: "https://images.unsplash.com/photo-1676984613116-885048eef82d?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 402,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 179,
        rating: 4.8,
        restaurantId: 5,
        popularity: 93,
        description: "Soft chocolate cake layered with smooth chocolate cream.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 403,
        name: "Vanilla Ice Cream",
        category: "Desserts",
        price: 99,
        rating: 4.5,
        restaurantId: 5,
        popularity: 85,
        description: "Creamy vanilla ice cream made for a refreshing finish.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },


    // ---------- BEVERAGES ----------
    {
        id: 501,
        name: "Cold Coffee",
        category: "Beverages",
        price: 129,
        rating: 4.6,
        restaurantId: 8,
        popularity: 92,
        description: "Chilled creamy coffee topped with a smooth foam layer.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 502,
        name: "Fresh Lime Soda",
        category: "Beverages",
        price: 89,
        rating: 4.5,
        restaurantId: 8,
        popularity: 84,
        description: "Refreshing lime drink with a perfect sweet and tangy taste.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 503,
        name: "Mango Smoothie",
        category: "Beverages",
        price: 159,
        rating: 4.8,
        restaurantId: 8,
        popularity: 89,
        description: "Fresh mango blended into a creamy and delicious smoothie.",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },


    // ---------- HEALTHY ----------
    {
        id: 601,
        name: "Fresh Garden Salad",
        category: "Healthy",
        price: 179,
        rating: 4.7,
        restaurantId: 4,
        popularity: 86,
        description: "Fresh vegetables with a light and healthy dressing.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 602,
        name: "Avocado Power Bowl",
        category: "Healthy",
        price: 249,
        rating: 4.8,
        restaurantId: 4,
        popularity: 91,
        description: "Nutritious bowl with avocado, vegetables, grains and seeds.",
        image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80",
        vegetarian: true
    },

    {
        id: 603,
        name: "Protein Salad Bowl",
        category: "Healthy",
        price: 279,
        rating: 4.9,
        restaurantId: 4,
        popularity: 94,
        description: "High-protein healthy bowl packed with fresh ingredients.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        vegetarian: false
    },


    // ---------- SOUTH INDIAN ----------
    {
        id: 701,
        name: "Masala Dosa",
        category: "South Indian",
        price: 99,
        rating: 4.8,
        restaurantId: 6,
        popularity: 96,
        description: "Crispy dosa filled with flavorful potato masala.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Masala_Dosa_or_Dosai.JPG",
        vegetarian: true
    },

    {
        id: 702,
        name: "Idli Sambar",
        category: "South Indian",
        price: 79,
        rating: 4.7,
        restaurantId: 6,
        popularity: 92,
        description: "Soft steamed idlis served with hot sambar and chutney.",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/2/16/dde749d2-67b2-42b8-a877-3fc05071dba3_2a5a1119-588e-451b-a939-07c438a97741.jpg",
        vegetarian: true
    },

    {
        id: 703,
        name: "Ghee Pongal",
        category: "South Indian",
        price: 109,
        rating: 4.8,
        restaurantId: 6,
        popularity: 90,
        description: "Traditional creamy pongal cooked with ghee and spices.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Venpongal.jpg",
        vegetarian: true
    },


    // ---------- BIRYANI ----------
    {
        id: 801,
        name: "Chicken Biryani",
        category: "Biryani",
        price: 249,
        rating: 4.9,
        restaurantId: 7,
        popularity: 99,
        description: "Fragrant basmati rice cooked with tender chicken and spices.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Tamilnadu_Chicken_Biryani.jpg",
        vegetarian: false
    },

    {
        id: 802,
        name: "Mutton Biryani",
        category: "Biryani",
        price: 329,
        rating: 4.8,
        restaurantId: 7,
        popularity: 95,
        description: "Rich and aromatic biryani prepared with tender mutton.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mutton_biryani.JPG",
        vegetarian: false
    },

    {
        id: 803,
        name: "Veg Biryani",
        category: "Biryani",
        price: 199,
        rating: 4.6,
        restaurantId: 7,
        popularity: 87,
        description: "Aromatic basmati rice cooked with fresh vegetables and spices.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Baby_Potato_Vegetarian_Biryani_Recipe.jpg",
        vegetarian: true
    }
];


// ==========================================
// EXPRESS EATS - CATEGORIES
// ==========================================

const categories = [
    {
        id: 1,
        name: "Pizza",
        icon: "🍕"
    },
    {
        id: 2,
        name: "Burgers",
        icon: "🍔"
    },
    {
        id: 3,
        name: "Fast Food",
        icon: "🍟"
    },
    {
        id: 4,
        name: "Desserts",
        icon: "🍰"
    },
    {
        id: 5,
        name: "Beverages",
        icon: "🥤"
    },
    {
        id: 6,
        name: "Healthy",
        icon: "🥗"
    },
    {
        id: 7,
        name: "South Indian",
        icon: "🥞"
    },
    {
        id: 8,
        name: "Biryani",
        icon: "🍛"
    }
];


// ==========================================
// EXPRESS EATS - OFFERS
// ==========================================

const offers = [
    {
        id: 1,
        title: "20% OFF",
        description: "Get 20% off on your first order.",
        code: "WELCOME20"
    },
    {
        id: 2,
        title: "FREE DELIVERY",
        description: "Free delivery on orders above ₹499.",
        code: "FREE499"
    },
    {
        id: 3,
        title: "FLAT ₹100 OFF",
        description: "Save ₹100 on selected restaurants.",
        code: "SAVE100"
    }
];
// ========================================
// FIND RESTAURANT BY ID
// ========================================

function getRestaurantById(id) {

    return restaurants.find(
        restaurant => restaurant.id === Number(id)
    );

}
// ========================================
// FIND FOOD BY ID
// ========================================

function getFoodById(id) {

    return foods.find(
        food => food.id === Number(id)
    );

}