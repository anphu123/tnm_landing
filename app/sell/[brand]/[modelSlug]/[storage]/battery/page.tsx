import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellProgress from "@/components/SellProgress";
import { getBrand, slugToModelInBrand, storageLabel } from "@/lib/phones";
import { ArrowLeft, ChevronRight } from "lucide-react";

const batteryOptions = [
  {
    id: "above87", label: "Từ 87% trở lên", emoji: "🔋",
    desc: "Pin còn rất tốt — không ảnh hưởng giá trị máy.",
    color: "border-green-400 hover:border-green-500 hover:bg-green-50",
    badge: "bg-green-100 text-green-700", badgeLabel: "Loại 1",
  },
  {
    id: "below87", label: "Dưới 87%", emoji: "🪫",
    desc: "Pin đã giảm — ảnh hưởng đến giá thu mua.",
    color: "border-green-400 hover:border-green-500 hover:bg-green-50",
    badge: "bg-green-100 text-green-700", badgeLabel: "Loại 4",
  },
];

export default async function BatteryPage({
  params,
}: {
  params: Promise<{ brand: string; modelSlug: string; storage: string }>;
}) {
  const { brand: brandSlug, modelSlug, storage } = await params;
  const brand = getBrand(brandSlug);
  const model = slugToModelInBrand(brandSlug, modelSlug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href={`/sell/${brandSlug}/model`} className="hover:text-green-500">{brand?.name}</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/${brandSlug}/${modelSlug}/memory`} className="hover:text-green-500">Bộ nhớ</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Tình trạng pin</span>
        </div>
      </div>

      <SellProgress current={2} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <a
          href={`/sell/${brandSlug}/${modelSlug}/memory`}
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
          Kiểm tra trong <strong>Cài đặt → Pin → Tình trạng pin và sạc</strong>. Ngưỡng quan trọng là 87%.
        </p>

        <div className="space-y-3">
          {batteryOptions.map((opt) => (
            <a
              key={opt.id}
              href={`/sell/${brandSlug}/${modelSlug}/${storage}/functionality?battery=${opt.id}`}
              className={`group flex items-center gap-4 bg-white rounded-2xl border-2 p-5 transition-all hover:shadow-md ${opt.color}`}
            >
              <span className="text-3xl shrink-0">{opt.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-gray-900">{opt.label}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${opt.badge}`}>{opt.badgeLabel}</span>
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
            Vào <strong>Cài đặt</strong> → <strong>Pin</strong> → <strong>Tình trạng pin và sạc</strong> để xem số % chính xác. Nếu không vào được, chọn &quot;Dưới 87%&quot;.
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
