"use client";

export default function CartSummary({
  cart,
  products,
  itemCount,
  totalPrice,
  onDecrement,
  onReset,
}) {
  const items = Object.entries(cart);

  return (
    <div
      className="cart-summary"
      style={{ margin: "12px 0", padding: 8, border: "1px solid #ccc" }}
    >
      <strong>Cart</strong> — {itemCount} item{itemCount !== 1 ? "s" : ""}, $
      {totalPrice}
      {items.length === 0 ? (
        <div style={{ marginTop: 6 }}>Your cart is empty.</div>
      ) : (
        <ul style={{ marginTop: 6 }}>
          {items.map(([id, qty]) => {
            const p = products.find((x) => x.id === id);
            return (
              <li key={id}>
                {p?.name} × {qty}{" "}
                <button type="button" onClick={() => onDecrement(id)}>
                  -
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <button type="button" onClick={onReset} style={{ marginTop: 6 }}>
        Reset Cart
      </button>
    </div>
  );
}
