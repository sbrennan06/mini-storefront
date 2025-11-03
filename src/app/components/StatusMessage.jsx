"use client";

export default function StatusMessage({ state, message }) {
  if (state === "loading") return <div className="status">Loading...</div>;
  if (state === "error") return <div className="status">Error: {message}</div>;
  if (state === "empty")
    return <div className="status">No products match your filters.</div>;
  return null;
}
