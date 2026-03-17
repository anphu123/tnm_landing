import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellProgress from "@/components/SellProgress";
import { slugToModel, storageLabel } from "@/lib/sellUtils";
import { ChevronRight, ArrowLeft } from "lucide-react";

const batteryOptions = [
  {
    id: "above90",
    label: "90% trở lên",
    emoji: "🔋",
    desc: "Pin còn rất tốt, sử dụng cả ngày không lo hết pin.",
    color: "border-green-400 hover:border-green-500 hover:bg-green-50",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: "80-90",
    label: "80% – 90%",
    emoji: "🔋",
    desc: "Pin ổn định, dùng bình thường trong ngày.",
    color: "border-green-400 hover:border-green-500 hover:bg-green-50",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: "70-80",
    label: "70% – 80%",
    emoji: "🪫",
    desc: "Pin hơi yếu, có thể cần sạc thêm trong ngày.",
    color: "border-green-400 hover:border-green-500 hover:bg-green-50",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: "below70",
    label: "Dưới 70%",
    emoji: "🪫",
    desc: "Pin đã xuống cấp nhiều, cần thay pin.",
    color: "border-red-300 hover:border-red-400 hover:bg-red-50",
    badge: "bg-red-100 text-red-600",
  },
];

export default async function BatteryPage({
  params,
}: {
  params: Promise<{ modelSlug: string; storage: string }>;
}) {
  const { modelSlug, storage } = await params;
  const model = slugToModel(modelSlug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/sell/iphone/model" className="hover:text-green-500">Chọn model</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/iphone/${modelSlug}/memory`} className="hover:text-green-500">Bộ nhớ</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Tình trạng pin</span>
        </div>
      </div>

      <SellProgress current={2} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <a
          href={`/sell/iphone/${modelSlug}/memory`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </a>

        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-green-500">
          <span>{model?.name ?? modelSlug}</span>
          <span className="text-gray-300">·</span>
          <span>{storageLabel(storage)}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
          Tình trạng pin như thế nào?
        </h1>
        <p className="text-gray-500 mb-8">
          Kiểm tra trong Cài đặt → Pin → Tình trạng pin và sạc.
        </p>

        <div className="space-y-3">
          {batteryOptions.map((opt) => (
            <a
              key={opt.id}
              href={`/sell/iphone/${modelSlug}/${storage}/functionality?battery=${opt.id}`}
              className={`group flex items-center gap-4 bg-white rounded-2xl border-2 p-5 transition-all hover:shadow-md ${opt.color}`}
            >
              <span className="text-3xl shrink-0">{opt.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-gray-900">{opt.label}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${opt.badge}`}>
                    {opt.id === "above90" ? "Tốt nhất" : opt.id === "80-90" ? "Tốt" : opt.id === "70-80" ? "Trung bình" : "Yếu"}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{opt.desc}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors shrink-0" />
            </a>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-4 text-sm text-gray-600 flex gap-3">
          <span className="text-xl">💡</span>
          <span>
            Xem tình trạng pin: <strong>Cài đặt</strong> → <strong>Pin</strong> →{" "}
            <strong>Tình trạng pin và sạc</strong>. Nếu máy không vào được cài đặt, chọn "Dưới 70%".
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
