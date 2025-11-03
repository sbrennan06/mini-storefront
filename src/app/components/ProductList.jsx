"use client";

export default function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((p, idx) => (
          <li key={p.id}>
            {p.name} - ${p.price} ({p.category}) Stock: {p.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
