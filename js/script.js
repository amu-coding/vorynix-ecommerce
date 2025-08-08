function createProduct(id, category, name, model, description, price, imageUrl) {
  return { id, category, name, model, description, price, imageUrl };
}

const products = [
  // 📱 Electronics
  createProduct("P01", "electronics", "Laptop", "MacBook Air M4", "Lightweight and powerful laptop for everyday use.", 1200, "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P02", "electronics", "Tablet", "iPad Pro M3", "Powerful tablet with Apple M3 chip and stunning display.", 1100, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P03", "electronics", "Monitor", "Dell UltraSharp U2723QE", "27-inch 4K monitor with USB-C and color accuracy.", 650, "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),

  // 🏋️ Sport
  createProduct("P04", "sport", "Treadmill", "ProForm Carbon T7", "Foldable treadmill with incline and screen.", 900, "https://images.unsplash.com/photo-1590080877777-7b8b1313a703?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P05", "sport", "Yoga Mat", "Lululemon Reversible Mat", "Durable and grippy yoga mat for all levels.", 78, "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P06", "sport", "Dumbbells", "Bowflex SelectTech 552", "Adjustable dumbbells from 5 to 52.5 lbs.", 429, "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),

  // 🪑 Furniture
  createProduct("P07", "furniture", "Office Chair", "Herman Miller Aeron", "Ergonomic chair with lumbar support.", 1400, "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P08", "furniture", "Desk", "IKEA Bekant", "Height-adjustable desk for home offices.", 299, "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P09", "furniture", "Bookshelf", "Sauder 5-Shelf Bookcase", "Classic bookshelf for storage and decor.", 120, "https://images.unsplash.com/photo-1493666438817-866a91353ca9?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),

  // 🍳 Kitchen
  createProduct("P10", "kitchen", "Blender", "Vitamix 5200", "High-performance blender for smoothies and soups.", 480, "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P11", "kitchen", "Coffee Maker", "Breville Barista Express", "Espresso machine with grinder built-in.", 700, "https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P12", "kitchen", "Air Fryer", "Ninja Foodi DualZone", "Dual-basket air fryer with independent cooking zones.", 180, "https://images.unsplash.com/photo-1617191513702-9a9f6849cc0a?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),

  // 👕 Clothing
  createProduct("P13", "clothing", "Jacket", "North Face Thermoball", "Lightweight insulated jacket for all weather.", 199, "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P14", "clothing", "Jeans", "Levi's 511 Slim", "Slim-fit jeans made from stretch denim.", 89, "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P15", "clothing", "Sneakers", "Nike Air Max 270", "Comfortable everyday sneakers.", 150, "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),

  // 📱 Smartphone
  createProduct("P16", "smartphone", "Phone", "iPhone 16 Pro", "Latest iPhone with A18 chip and ProMotion display.", 1099, "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P17", "smartphone", "Phone", "Samsung Galaxy S25 Ultra", "Flagship Android with quad camera system.", 1199, "https://images.unsplash.com/photo-1512499617640-c2f999fa70ee?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600"),
  createProduct("P18", "smartphone", "Phone", "Google Pixel 9", "Pixel phone with AI features and clean Android.", 899, "https://images.unsplash.com/photo-1510557880182-3c5f9f30114c?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=600")
];
