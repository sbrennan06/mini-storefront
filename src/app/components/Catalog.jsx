"use client";

import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //add filter state
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState({});

  //add to cart function - with increment, decrement, and reset
  function addToCart(product) {
    setCart((prev) => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }));
  }

  function decrementItem(id) {
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      if (qty <= 0) {
        const { [id]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: qty };
    });
  }

  function resetCart() {
    setCart({});
  }

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (alive) setProducts(data);
      } catch (err) {
        if (alive)
          setError(
            err instanceof Error ? err.message : "Failed to fetch products"
          );
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProducts((prev) =>
        prev.map((p) => {
          if (p.stock === 0 || Math.random() > 0.4) return p; // ~40% chance
          return { ...p, stock: Math.max(0, p.stock - 1) };
        })
      );
    }, 5000);

    return () => clearInterval(timer); // cleanup
  }, []);

  if (loading) return <StatusMessage state="loading" />;
  if (error) return <StatusMessage state="error" message={error} />;

  const filtered = products.filter((p) => {
    const catOK = category === "All" || p.category === category;
    const priceOK = maxPrice === "" || p.price <= Number(maxPrice); //creates filter
    return catOK && priceOK;
  });

  //cart totals
  const entries = Object.entries(cart);
  const itemCount = entries.reduce((sum, [, q]) => sum + q, 0);
  const totalPrice = entries.reduce((sum, [id, q]) => {
    const prod = products.find((x) => x.id === id);
    return prod ? sum + prod.price * q : sum;
  }, 0);

  return (
    <div className="catalog">
      <h1>Mini-Storefront</h1>
      <p>{products.length} products loaded.</p>

      <CategoryFilter
        categories={["All", "Electronics", "Furniture", "Books"]}
        value={category}
        onChange={setCategory}
      />

      <PriceFilter value={maxPrice} onChange={setMaxPrice} />

      <p>{filtered.length} shown</p>
      <CartSummary
        cart={cart}
        products={products}
        itemCount={itemCount}
        totalPrice={totalPrice}
        onDecrement={decrementItem}
        onReset={resetCart}
      />

      <ProductList products={filtered} onAdd={addToCart} />
    </div>
  );
}
