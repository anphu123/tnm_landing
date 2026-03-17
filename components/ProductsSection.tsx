"use client";
import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

const filters = ["Tất cả", "iPhone", "Samsung", "Xiaomi"];

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");

  const filtered = activeFilter === "Tất cả"
    ? products
    : products.filter((p) => p.name.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Điện thoại phổ biến nhất
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tất cả điện thoại đều được tân trang chuyên nghiệp, kiểm tra chất lượng và bảo hành 12 tháng.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === f
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-green-500 text-green-500 font-bold px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:border-transparent transition-all duration-200"
          >
            Xem tất cả điện thoại →
          </a>
        </div>
      </div>
    </section>
  );
}
