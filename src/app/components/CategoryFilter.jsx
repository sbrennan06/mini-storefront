"use client";

//create catgory filter function
export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className="category-filter">
      <label>
        Category:{""}
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
