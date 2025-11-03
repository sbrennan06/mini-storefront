"use client";

import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((p, idx) => (
          <li key={p.id}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
