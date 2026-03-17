"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowLeft } from "lucide-react";

const conditions = [
  {
    id: "excellent",
    label: "Xuất sắc",
    emoji: "⭐",
    desc: "Như mới. Không có vết xước, không có vết móp. Màn hình hoàn hảo.",
    multiplier: 1.0,
    bg: "border-green-400 bg-green-50",
    selected: "border-green-500 bg-green-100 ring-2 ring-green-400",
  },
  {
    id: "good",
    label: "Tốt",
    emoji: "✅",
    desc: "Vài vết xước nhỏ trên thân máy hoặc màn hình. Không có vết móp.",
    multiplier: 0.85,
    bg: "border-green-400 bg-green-50",
    selected: "border-green-500 bg-green-100 ring-2 ring-green-400",
  },
  {
    id: "fair",
    label: "Khá",
    emoji: "👍",
    desc: "Vết xước rõ ràng trên thân máy. Màn hình có thể có vết trầy nhẹ.",
    multiplier: 0.70,
    bg: "border-yellow-400 bg-yellow-50",
    selected: "border-yellow-500 bg-yellow-100 ring-2 ring-yellow-400",
  },
  {
    id: "broken",
    label: "Hỏng một phần",
    emoji: "🔧",
    desc: "Màn hình nứt vỡ, camera lỗi, hoặc các bộ phận khác cần sửa chữa.",
    multiplier: 0.45,
    bg: "border-gray-300 bg-gray-50",
    selected: "border-gray-500 bg-gray-100 ring-2 ring-gray-400",
  },
];

const questions = [
  { id: "screen", label: "Màn hình", options: ["Hoàn hảo", "Vết xước nhỏ", "Nứt / vỡ"] },
  { id: "body", label: "Thân máy", options: ["Hoàn hảo", "Vết xước nhỏ", "Móp / trầy nặng"] },
  { id: "battery", label: "Dung lượng pin", options: ["85% trở lên", "70–85%", "Dưới 70%"] },
  { id: "power", label: "Máy có bật lên không?", options: ["Có", "Không"] },
];

// Base prices per model (VND)
const basePrices: Record<string, number> = {
  "iPhone 16 Pro Max": 24000000,
  "iPhone 16 Pro": 21000000,
  "iPhone 16 Plus": 18000000,
  "iPhone 16": 17000000,
  "iPhone 15 Pro Max": 20000000,
  "iPhone 15 Pro": 17000000,
  "iPhone 15 Plus": 14000000,
  "iPhone 15": 13000000,
  "iPhone 14 Pro Max": 16000000,
  "iPhone 14 Pro": 14000000,
  "iPhone 14 Plus": 11000000,
  "iPhone 14": 10000000,
  "iPhone 13 Pro Max": 13000000,
  "iPhone 13 Pro": 11000000,
  "iPhone 13": 9000000,
  "iPhone 12": 6000000,
  "iPhone 11": 4500000,
  "iPhone SE (2022)": 4000000,
};

function formatPrice(p: number) {
  return p.toLocaleString("vi-VN") + "₫";
}

function ConditionContent() {
  const params = useSearchParams();
  const model = params.get("model") ?? "iPhone";

  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showQuote, setShowQuote] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id]);
  const canProceed = selectedCondition !== null && allAnswered;

  const basePrice = basePrices[model] ?? 8000000;
  const conditionObj = conditions.find((c) => c.id === selectedCondition);
  const estimatedPrice = conditionObj
    ? Math.round((basePrice * conditionObj.multiplier) / 100000) * 100000
    : 0;

  useEffect(() => {
    if (canProceed) setShowQuote(true);
  }, [canProceed]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-green-500">Trang chủ</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/sell/iphone" className="hover:text-green-500">Bán iPhone</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/sell/iphone/model" className="hover:text-green-500">Chọn model</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Tình trạng</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            {["Chọn model", "Tình trạng", "Báo giá", "Gửi & nhận tiền"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  i < 1 ? "bg-gradient-to-br from-green-500 to-green-600 text-white"
                  : i === 1 ? "bg-gradient-to-br from-green-500 to-green-600 text-white"
                  : "bg-gray-100 text-gray-400"
                }`}>
                  {i < 1 ? "✓" : i + 1}
                </div>
                <span className={`text-sm hidden sm:block ${i === 1 ? "font-bold text-green-600" : i < 1 ? "text-gray-400" : "text-gray-400"}`}>
                  {step}
                </span>
                {i < 3 && <ChevronRight className="w-4 h-4 text-gray-300" />}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
            <div className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full transition-all" style={{ width: "50%" }} />
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <a href="/sell/iphone/model" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </a>

        <div className="mb-2">
          <span className="text-sm text-green-500 font-semibold">{model}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
          Máy của bạn trong tình trạng nào?
        </h1>
        <p className="text-gray-500 mb-8">Chọn mức độ phù hợp nhất để nhận báo giá chính xác.</p>

        {/* Chọn tình trạng tổng quan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {conditions.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCondition(c.id)}
              className={`text-left rounded-2xl border-2 p-4 transition-all ${
                selectedCondition === c.id ? c.selected : c.bg + " hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{c.emoji}</span>
                <span className="font-bold text-gray-900">{c.label}</span>
                {selectedCondition === c.id && (
                  <span className="ml-auto w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </button>
          ))}
        </div>

        {/* Câu hỏi chi tiết */}
        {selectedCondition && (
          <div className="space-y-5 mb-8">
            <h2 className="text-lg font-bold text-gray-900">Thêm vài câu hỏi nhanh</h2>
            {questions.map((q) => (
              <div key={q.id} className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="font-semibold text-gray-800 mb-3">{q.label}</div>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        answers[q.id] === opt
                          ? "bg-gradient-to-r from-green-500 to-green-600 text-white border-transparent shadow"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Báo giá ước tính */}
        {showQuote && canProceed && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white mb-6 shadow-xl">
            <div className="text-sm font-medium text-green-100 mb-1">Báo giá ước tính cho {model}</div>
            <div className="text-4xl font-extrabold mb-1">{formatPrice(estimatedPrice)}</div>
            <div className="text-green-100 text-sm">Giá chính xác sẽ được xác nhận sau khi chúng tôi nhận và kiểm tra máy.</div>
            <a
              href={`/sell/iphone/confirm?model=${encodeURIComponent(model)}&condition=${selectedCondition}&price=${estimatedPrice}`}
              className="mt-4 inline-flex items-center gap-2 bg-white text-green-600 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-all"
            >
              Xác nhận & tiếp tục <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Nút tiếp theo dạng sticky bottom */}
        {selectedCondition && !canProceed && (
          <div className="bg-white rounded-2xl border border-gray-100 p-4 text-sm text-gray-500 text-center">
            Vui lòng trả lời tất cả câu hỏi bên trên để xem báo giá.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function ConditionPage() {
  return (
    <Suspense>
      <ConditionContent />
    </Suspense>
  );
}
