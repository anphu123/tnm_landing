"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellProgress from "@/components/SellProgress";
import { iPhoneModels } from "@/lib/data";
import { modelToSlug } from "@/lib/sellUtils";
import { Search, ChevronRight, ArrowLeft } from "lucide-react";
import PhoneImage from "@/components/PhoneImage";

const years = ["Tất cả", "2024", "2023", "2022", "2021", "2020", "2019"];

export default function SellModelPage() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("Tất cả");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = iPhoneModels.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchYear = yearFilter === "Tất cả" || m.year === yearFilter;
    return matchSearch && matchYear;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-green-500 transition-colors">Trang chủ</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/sell/iphone" className="hover:text-green-500 transition-colors">Bán iPhone</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Chọn model</span>
        </div>
      </div>

      <SellProgress current={0} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <a href="/sell/iphone" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Quay lại
          </a>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
            Bạn đang bán iPhone nào?
          </h1>
          <p className="text-gray-500">Chọn model chính xác để nhận báo giá tốt nhất.</p>
        </div>

        {/* Tìm kiếm & lọc năm */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm model, ví dụ: iPhone 15 Pro..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 bg-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYearFilter(y)}
                className={`px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                  yearFilter === y
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-500"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Lưới model */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((model) => (
            <button
              key={model.name}
              onClick={() => setSelected(model.name)}
              className={`group relative bg-white rounded-2xl border-2 p-4 flex flex-col items-center text-center transition-all hover:shadow-lg ${
                selected === model.name
                  ? "border-green-500 shadow-lg shadow-green-100"
                  : "border-gray-100 hover:border-green-200"
              }`}
            >
              {selected === model.name && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              <PhoneImage
                src={model.image}
                alt={model.name}
                className="h-20 w-auto object-contain mb-3 group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-xs font-bold text-gray-800 leading-tight">{model.name}</span>
              <span className="text-xs text-gray-400 mt-0.5">{model.year}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">🔍</div>
            <div className="font-semibold">Không tìm thấy model nào</div>
            <div className="text-sm mt-1">Thử từ khóa khác hoặc xóa bộ lọc</div>
          </div>
        )}

        {/* Sticky bottom bar khi đã chọn */}
        {selected && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 shadow-2xl p-4 z-40">
            <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-gray-500">Model đã chọn</div>
                <div className="font-bold text-gray-900">{selected}</div>
              </div>
              <a
                href={`/sell/iphone/${modelToSlug(selected)}/memory`}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-600 text-white font-bold px-7 py-3 rounded-full transition-all shadow-lg whitespace-nowrap"
              >
                Tiếp theo <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
        {selected && <div className="h-24" />}
      </main>

      <Footer />
    </div>
  );
}
