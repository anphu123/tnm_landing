import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellProgress from "@/components/SellProgress";
import { getBrand, slugToModelInBrand, getStorageOptions, storageLabel } from "@/lib/phones";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default async function MemoryPage({
  params,
}: {
  params: Promise<{ brand: string; modelSlug: string }>;
}) {
  const { brand: brandSlug, modelSlug } = await params;
  const brand = getBrand(brandSlug);
  const model = slugToModelInBrand(brandSlug, modelSlug);
  const storageOptions = getStorageOptions(brandSlug, modelSlug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/sell" className="hover:text-green-500">Bán máy</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/${brandSlug}/model`} className="hover:text-green-500">{brand?.name}</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Bộ nhớ</span>
        </div>
      </div>

      <SellProgress current={1} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <a
          href={`/sell/${brandSlug}/model`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </a>

        <div className="mb-2 text-sm font-semibold text-green-500">
          {model?.name ?? modelSlug}
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
          Dung lượng bộ nhớ là bao nhiêu?
        </h1>
        <p className="text-gray-500 mb-8">
          Kiểm tra trong Cài đặt → Giới thiệu → Dung lượng.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {storageOptions.map((storage) => (
            <a
              key={storage}
              href={`/sell/${brandSlug}/${modelSlug}/${storage}/battery`}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-400 hover:shadow-lg p-5 flex flex-col items-center text-center transition-all"
            >
              <div className="w-12 h-12 bg-green-50 group-hover:bg-green-100 rounded-full flex items-center justify-center mb-3 transition-colors">
                <span className="text-green-500 font-extrabold text-sm">
                  {storage.replace("gb", "").replace("tb", "")}
                </span>
              </div>
              <span className="font-bold text-gray-900">{storageLabel(storage)}</span>
              <span className="text-xs text-gray-400 mt-1 group-hover:text-green-400 transition-colors">Chọn →</span>
            </a>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-4 text-sm text-gray-600 flex gap-3">
          <span className="text-xl">💡</span>
          <span>
            Không chắc dung lượng? Vào <strong>Cài đặt</strong> → <strong>Cài đặt chung</strong> → <strong>Giới thiệu</strong> → xem dòng <strong>Dung lượng</strong>.
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
