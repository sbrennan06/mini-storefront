"use client";

import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <div>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <ProductCard product={p} onAdd={onAdd} />
          </li>
        ))}
      </ul>
    </div>
  );
}
