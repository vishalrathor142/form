import React from "react";

export default function ProductCard({ name, price, inStock }) {
  const formatted = typeof price === "number" ? price.toLocaleString("en-IN", { style: "currency", currency: "INR" }) : price;
  return (
    <div className="max-w-sm p-4 bg-white rounded-2xl shadow-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className={`px-3 py-1 text-sm rounded-full font-medium ${inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {inStock ? "In stock" : "Out of stock"}
        </span>
      </div>
      <div className="text-2xl font-bold">{formatted}</div>
      <button className={`mt-2 py-2 rounded-full font-medium ${inStock ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`} disabled={!inStock}>
        {inStock ? "Buy Now" : "Notify Me"}
      </button>
    </div>
  );
}
