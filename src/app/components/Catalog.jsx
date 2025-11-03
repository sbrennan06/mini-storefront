"use client";

import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //add filter state
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

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

  if (loading) return <div className="catalog">Loading...</div>;
  if (error) return <div className="catalog">Error: {error}</div>;

  const filtered = products.filter((p) => {
    const CatOK = category === "All" || p.category === category;
    return CatOK;
  });

  return (
    <div className="catalog">
      <h1>Mini-Storefront</h1>
      <p>{products.length} products loaded.</p>
      <CategoryFilter
        categories={["All", "Electronics", "Furniture", "Books"]}
        value={category}
        onChange={setCategory}
      />
      <p>{filtered.length} shown</p>
      <ProductList products={filtered} />
    </div>
  );
}
