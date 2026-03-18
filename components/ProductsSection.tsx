"use client";
import { useState, useMemo } from "react";
import { Product } from "@/lib/products-data";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 12;

const BRAND_LABELS: Record<string, string> = {
  iphone: "iPhone",
  samsung: "Samsung",
  xiaomi: "Xiaomi",
  oppo: "Oppo",
  realme: "Realme",
  vivo: "Vivo",
  honor: "Honor",
};

export default function ProductsSection({ products }: { products: Product[] }) {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [page, setPage] = useState(1);

  // Derive available brands from data
  const brands = useMemo(() => {
    const seen = new Set<string>();
    for (const p of products) {
      const key = Object.keys(BRAND_LABELS).find((k) =>
        p.name.toLowerCase().startsWith(k)
      );
      if (key && !seen.has(key)) seen.add(key);
    }
    return Array.from(seen).map((k) => BRAND_LABELS[k] ?? k);
  }, [products]);

  const filters = ["Tất cả", ...brands];

  const filtered = useMemo(() => {
    if (activeFilter === "Tất cả") return products;
    return products.filter((p) =>
      p.name.toLowerCase().startsWith(activeFilter.toLowerCase())
    );
  }, [products, activeFilter]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  function handleFilter(f: string) {
    setActiveFilter(f);
    setPage(1);
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Bảng giá thu mua
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Giá cập nhật liên tục từ thị trường. Tất cả đều được kiểm tra 52 điểm và thanh toán trong 24h.
          </p>
        </div>

        {/* Brand filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === f
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600"
              }`}
            >
              {f}
              {f !== "Tất cả" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({products.filter((p) => p.name.toLowerCase().startsWith(f.toLowerCase())).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Total count */}
        <p className="text-center text-sm text-gray-400 mb-6">
          Hiển thị {visible.length} / {filtered.length} sản phẩm
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((product) => (
            <ProductCard key={`${product.id}-${product.name}`} product={product} />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="inline-flex items-center gap-2 border-2 border-green-500 text-green-500 font-bold px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:border-transparent transition-all duration-200"
            >
              Xem thêm {Math.min(PAGE_SIZE, filtered.length - visible.length)} sản phẩm →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
