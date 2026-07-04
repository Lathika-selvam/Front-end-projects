import { useState } from "react";
import "./App.css";

import laptop from "./assets/laptop.jpg";
import phone from "./assets/phone.jpg";
import watch from "./assets/watch.jpg";
import headphones from "./assets/headphones.jpg";
import camera from "./assets/camera.jpg";
import shoes from "./assets/shoes.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "HP Victus Laptop",
      category: "Laptop",
      brand: "HP",
      image: laptop,
      rating: 4.8,
      reviews: 254,
      actualPrice: 75999,
      discountPrice: 59999,
      discount: "21% OFF",
      stock: true,
      badge: "🔥 Best Seller",
    },
    {
      id: 2,
      name: "iPhone 15",
      category: "Mobile",
      brand: "Apple",
      image: phone,
      rating: 4.9,
      reviews: 412,
      actualPrice: 79999,
      discountPrice: 69999,
      discount: "12% OFF",
      stock: true,
      badge: "🆕 New Arrival",
    },
    {
      id: 3,
      name: "Sony Headphones",
      category: "Audio",
      brand: "Sony",
      image: headphones,
      rating: 4.6,
      reviews: 190,
      actualPrice: 12999,
      discountPrice: 9999,
      discount: "23% OFF",
      stock: true,
      badge: "🔥 Best Seller",
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Watch",
      brand: "Noise",
      image: watch,
      rating: 4.5,
      reviews: 140,
      actualPrice: 4999,
      discountPrice: 2999,
      discount: "40% OFF",
      stock: true,
      badge: "🆕 New Arrival",
    },
    {
      id: 5,
      name: "Canon DSLR Camera",
      category: "Camera",
      brand: "Canon",
      image: camera,
      rating: 4.7,
      reviews: 96,
      actualPrice: 65999,
      discountPrice: 55999,
      discount: "15% OFF",
      stock: false,
      badge: "Limited Stock",
    },
    {
      id: 6,
      name: "Nike Running Shoes",
      category: "Shoes",
      brand: "Nike",
      image: shoes,
      rating: 4.4,
      reviews: 176,
      actualPrice: 7999,
      discountPrice: 5999,
      discount: "25% OFF",
      stock: true,
      badge: "🔥 Trending",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");

  let filteredProducts = products.filter((product) => {
    const matchName = product.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || product.category === category;

    return matchName && matchCategory;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.discountPrice - b.discountPrice);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.discountPrice - a.discountPrice);
  }
  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
    }
  };

  const displayProducts =
    page === "products"
      ? filteredProducts
      : page === "wishlist"
        ? wishlist
        : cart;

  return (
    <div className="app">
      <h1>🛍 Product Catalog</h1>
      <div className="menu">
        <button onClick={() => setPage("products")}>Products</button>

        <button onClick={() => setPage("wishlist")}>
          ❤️ Wishlist ({wishlist.length})
        </button>

        <button onClick={() => setPage("cart")}>🛒 Cart ({cart.length})</button>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Laptop</option>
          <option>Mobile</option>
          <option>Audio</option>
          <option>Watch</option>
          <option>Camera</option>
          <option>Shoes</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      <div className="product-grid">
        {displayProducts.map((product) => (
          <div className="card" key={product.id}>
            <span className="badge">{product.badge}</span>

            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p>
              <b>Brand:</b> {product.brand}
            </p>

            <p>
              <b>Category:</b> {product.category}
            </p>

            <p className="rating">
              ⭐ {product.rating} ({product.reviews} Reviews)
            </p>

            <div className="price">
              <span className="old">
                ₹{product.actualPrice.toLocaleString()}
              </span>

              <span className="new">
                ₹{product.discountPrice.toLocaleString()}
              </span>
            </div>

            <p className="discount">{product.discount}</p>

            <p className="delivery">🚚 Free Delivery</p>

            <p className={product.stock ? "stock" : "out"}>
              {product.stock ? "✔ In Stock" : "❌ Out of Stock"}
            </p>

            <div className="buttons">
              <button onClick={() => addToWishlist(product)}>
                ❤️ Wishlist
              </button>
              <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
