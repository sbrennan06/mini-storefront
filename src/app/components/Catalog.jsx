"use client";

import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (alive) setProducts(data);
      } catch (err) {
        if (alive) setError(err.message);
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

  return (
    <div className="catalog">
      <h1>Mini-Storefront</h1>
      <p>{products.length} products loaded.</p>
    </div>
  );
}
