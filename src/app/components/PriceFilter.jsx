"use client";

export default function PriceFilter({ value, onChange }) {
  return (
    <div className="price-filter">
      <label>
        Max Price:{""}
        <input
          type="number"
          min="0"
          step="1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
