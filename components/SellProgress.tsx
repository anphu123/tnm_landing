import { ChevronRight, Check } from "lucide-react";

const STEPS = ["Chọn model", "Bộ nhớ", "Tình trạng pin", "Chức năng", "Báo giá"];

export default function SellProgress({ current }: { current: number }) {
  // current: 0-indexed
  const pct = Math.round(((current + 1) / STEPS.length) * 100);

  return (
    <div className="bg-white border-b border-gray-100 px-4 py-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-1 sm:gap-2 mb-3">
          {STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-1 sm:gap-2 min-w-0">
              <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < current
                  ? "bg-gradient-to-br from-green-500 to-green-600 text-white"
                  : i === current
                  ? "bg-gradient-to-br from-green-500 to-green-600 text-white ring-4 ring-green-100"
                  : "bg-gray-100 text-gray-400"
              }`}>
                {i < current ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`text-xs hidden sm:block truncate ${
                i === current ? "font-bold text-green-600" : i < current ? "text-gray-400" : "text-gray-300"
              }`}>
                {step}
              </span>
              {i < STEPS.length - 1 && <ChevronRight className="w-3 h-3 text-gray-200 shrink-0" />}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
