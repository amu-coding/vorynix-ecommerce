function createProduct(id, category, name, model, description, price, imageUrl) {
  return { id, category, name, model, description, price, imageUrl };
}

const products = [
  // 📱 Electronics
  createProduct("P01", "electronics", "Laptop", "MacBook Air M4", "Lightweight and powerful laptop for everyday use.", 1200, "uploads/laptop.jpg"),
  createProduct("P02", "electronics", "Tablet", "iPad Pro M3", "Powerful tablet with Apple M3 chip and stunning display.", 1100, "uploads/tablet.jpg"),
  createProduct("P03", "electronics", "Monitor", "Dell UltraSharp U2723QE", "27-inch 4K monitor with USB-C and color accuracy.", 650, "uploads/monitor.jpg"),

  // 🏋️ Sport
  createProduct("P04", "sport", "Treadmill", "ProForm Carbon T7", "Foldable treadmill with incline and screen.", 900, "uploads/treadmill.jpg"),
  createProduct("P05", "sport", "Yoga Mat", "Lululemon Reversible Mat", "Durable and grippy yoga mat for all levels.", 78, "uploads/yoga mat.jpg"),
  createProduct("P06", "sport", "Dumbbells", "Bowflex SelectTech 552", "Adjustable dumbbells from 5 to 52.5 lbs.", 429, "uploads/dumbell.jpg"),

  // 🪑 Furniture
  createProduct("P07", "furniture", "Office Chair", "Herman Miller Aeron", "Ergonomic chair with lumbar support.", 1400, "uploads/office chair.jpg"),
  createProduct("P08", "furniture", "Desk", "IKEA Bekant", "Height-adjustable desk for home offices.", 299, "uploads/desk.jpg"),
  createProduct("P09", "furniture", "Couch", "Modern Fabric Couch", "Comfortable and stylish couch perfect for any living room.", 120, "uploads/couch.jpg"),

  // 🍳 Kitchen
  createProduct("P10", "kitchen", "Blender", "Vitamix 5200", "High-performance blender for smoothies and soups.", 480, "uploads/blender.jpg"),
  createProduct("P11", "kitchen", "Coffee Maker", "Breville Barista Express", "Espresso machine with grinder built-in.", 700, "uploads/coffee maker.jpg"),
  createProduct("P12", "kitchen", "Air Fryer", "Ninja Foodi DualZone", "Dual-basket air fryer with independent cooking zones.", 180, "uploads/air fryer.jpg"),

  // 👕 Clothing
  createProduct("P13", "clothing", "Jacket", "North Face Thermoball", "Lightweight insulated jacket for all weather.", 199, "uploads/jacket.jpg"),
  createProduct("P14", "clothing", "Jeans", "Levi's 511 Slim", "Slim-fit jeans made from stretch denim.", 89, "uploads/jean.jpg"),
  createProduct("P15", "clothing", "Sneakers", "Nike Air Max 270", "Comfortable everyday sneakers.", 150, "uploads/sneaker.jpg"),

  // 📱 Smartphone
  createProduct("P16", "smartphone", "Phone", "iPhone 16 Pro", "Latest iPhone with A18 chip and ProMotion display.", 1099, "uploads/iphone 16.jpg"),
  createProduct("P17", "smartphone", "Phone", "Samsung Galaxy S25 Ultra", "Flagship Android with quad camera system.", 1199, "uploads/s25 ultra.jpg"),
  createProduct("P18", "smartphone", "Phone", "Google Pixel 9", "Pixel phone with AI features and clean Android.", 899, "uploads/pixel 9.jpg")
];

// Get container
const heroProductsContainer = document.getElementById("hero-products-container");

// Select which products to display (first 5 here)
const heroProducts = products.slice(0, 4);

// Add products dynamically
heroProducts.forEach(product => {
    const productHTML = `
        <a href="#" class="clickable-product flex">
            <div class="product-img-box flex">
                <img src="${product.imageUrl}" alt="${product.name} image" class="product-img">
            </div>
            <div class="product-description-box flex">
                <h2>${product.name}</h2>
                <p>${product.model}</p>
            </div>
        </a>
    `;
    heroProductsContainer.insertAdjacentHTML("beforeend", productHTML);
});

// Function to get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Function to get a random product from a category
function getRandomProductFromCategory(category) {
    const categoryProducts = getProductsByCategory(category);
    if (categoryProducts.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * categoryProducts.length);
    return categoryProducts[randomIndex];
}

// Function to create discounted product HTML
function createDiscountedProductHTML(product) {
    return `
        <div class="product-template container">
            <img src="${product.imageUrl}" alt="${product.name} image">
            <h2>${product.name}</h2>
            <div class="cart-price flex">
                <div class="cart-box container">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="price-box flex">
                    <h2>${product.price}</h2>
                    <p>$</p>
                </div>
            </div>
        </div>
    `;
}

// Populate discounted products section
function populateDiscountedProducts() {
    const discountedProductsContainer = document.querySelector('.discounted-products-grid');
    
    if (!discountedProductsContainer) return;
    
    // Clear existing content
    discountedProductsContainer.innerHTML = '';
    
    // Select one product from each of three different categories
    const selectedCategories = ['electronics', 'sport', 'furniture'];
    const selectedProducts = [];
    
    selectedCategories.forEach(category => {
        const product = getRandomProductFromCategory(category);
        if (product) {
            selectedProducts.push(product);
        }
    });
    
    // If we don't have enough products from selected categories, fill with random products
    while (selectedProducts.length < 3) {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        if (!selectedProducts.find(p => p.id === randomProduct.id)) {
            selectedProducts.push(randomProduct);
        }
    }
    
    // Add products to the container
    selectedProducts.forEach(product => {
        const productHTML = createDiscountedProductHTML(product);
        discountedProductsContainer.insertAdjacentHTML("beforeend", productHTML);
    });
}

// Initialize discounted products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateDiscountedProducts();
    startCountdownTimer();
});

// Countdown Timer Function
function startCountdownTimer() {
    // Set target date (24 hours from now)
    const now = new Date();
    const targetDate = new Date(now.getTime() + (24 * 60 * 60 * 1000)); // 24 hours from now
    
    function updateTimer() {
        const currentDate = new Date();
        const difference = targetDate - currentDate;
        
        if (difference <= 0) {
            // Timer finished, reset to 24 hours
            targetDate.setTime(targetDate.getTime() + (24 * 60 * 60 * 1000));
            return;
        }
        
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update timer elements
        const timerElements = document.querySelectorAll('.timer-parts');
        if (timerElements.length >= 4) {
            timerElements[0].textContent = days.toString().padStart(2, '0');
            timerElements[1].textContent = hours.toString().padStart(2, '0');
            timerElements[2].textContent = minutes.toString().padStart(2, '0');
            timerElements[3].textContent = seconds.toString().padStart(2, '0');
        }
    }
    
    // Update timer immediately
    updateTimer();
    
    // Update timer every second
    setInterval(updateTimer, 1000);
}
