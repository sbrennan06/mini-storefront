"use client";

export default function ProductCard({ product, onAdd }) {
  const { name, price, category, stock } = product;
  const out = stock === 0;
  return (
    <div className="product-card">
      <div>
        <strong>{name}</strong>
      </div>
      <div>
        ${price} | {category}
      </div>
      <div>{out ? "Out Of Stock" : `In Stock: ${stock}`}</div>
      <button
        type="button"
        disabled={out}
        onClick={() => {
          console.log("add clicked for", product.id);
          onAdd?.(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
