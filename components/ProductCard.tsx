import { ShoppingCart, Heart } from "lucide-react";
import PhoneImage from "./PhoneImage";

interface Product {
  id: number;
  name: string;
  storage: string;
  grade: string;
  color: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string | null;
  badgeColor: string;
}

function formatPrice(price: number) {
  return price.toLocaleString("vi-VN") + "₫";
}

export default function ProductCard({ product }: { product: Product }) {
  const savings = product.originalPrice - product.price;
  const savingsPct = Math.round((savings / product.originalPrice) * 100);

  const gradeColors: Record<string, string> = {
    "Xuất sắc": "text-green-600 bg-green-50 border-green-200",
    "Tốt": "text-green-700 bg-green-50 border-green-200",
    "Khá": "text-yellow-700 bg-yellow-50 border-yellow-200",
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative bg-gray-50 p-6 flex items-center justify-center min-h-[200px]">
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          -{savingsPct}%
        </span>
        <button className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full shadow hover:text-red-500 text-gray-400">
          <Heart className="w-4 h-4" />
        </button>
        <PhoneImage
          src={product.image}
          alt={product.name}
          className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-gray-900 text-base">{product.name}</h3>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${gradeColors[product.grade] ?? "text-gray-600 bg-gray-100 border-gray-200"}`}>
            {product.grade}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          {product.storage} · {product.color}
        </p>

        <div className="mt-auto">
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="text-xl font-extrabold text-gray-900">{formatPrice(product.price)}</span>
              <span className="ml-2 text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            </div>
            <span className="text-xs text-green-600 font-semibold">Tiết kiệm {formatPrice(savings)}</span>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md">
            <ShoppingCart className="w-4 h-4" />
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
}
