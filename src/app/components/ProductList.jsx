"use client";

export default function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} ({p.category}) stock: {p.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
