"use client";
import { Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellProgress from "@/components/SellProgress";
import { slugToModel, storageLabel, formatPrice } from "@/lib/sellUtils";
import { Check, ArrowLeft, ChevronRight } from "lucide-react";

const batteryLabel: Record<string, string> = {
  above90: "Trên 90%",
  "80-90": "80–90%",
  "70-80": "70–80%",
  below70: "Dưới 70%",
};

function QuoteContent() {
  const rawParams = useParams();
  const modelSlug = rawParams.modelSlug as string;
  const storage = rawParams.storage as string;
  const sp = useSearchParams();
  const battery = sp.get("battery") ?? "80-90";
  const price = Number(sp.get("price") ?? "0");

  const model = slugToModel(modelSlug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/sell/iphone/model" className="hover:text-green-500">Model</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/iphone/${modelSlug}/memory`} className="hover:text-green-500">Bộ nhớ</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/iphone/${modelSlug}/${storage}/battery`} className="hover:text-green-500">Pin</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/iphone/${modelSlug}/${storage}/functionality?battery=${battery}`} className="hover:text-green-500">Chức năng</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Báo giá</span>
        </div>
      </div>

      <SellProgress current={4} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <a
          href={`/sell/iphone/${modelSlug}/${storage}/functionality?battery=${battery}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </a>

        {/* Giá lớn */}
        <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-600 rounded-3xl p-8 text-white text-center mb-6 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="relative">
            <div className="text-5xl mb-3">🎉</div>
            <p className="text-green-100 text-sm mb-2">Báo giá của bạn</p>
            <div className="text-5xl sm:text-6xl font-extrabold mb-2">{formatPrice(price)}</div>
            <p className="text-green-100 text-sm">
              {model?.name ?? modelSlug} · {storageLabel(storage)} · Pin {batteryLabel[battery]}
            </p>
          </div>
        </div>

        {/* Tóm tắt */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-5">
          <h2 className="font-bold text-gray-900 mb-4">Tóm tắt đơn bán</h2>
          <div className="space-y-3 text-sm">
            {[
              ["Model", model?.name ?? modelSlug],
              ["Bộ nhớ", storageLabel(storage)],
              ["Tình trạng pin", batteryLabel[battery]],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-gray-900">{value}</span>
              </div>
            ))}
            <div className="border-t border-gray-100 pt-3 flex justify-between">
              <span className="font-bold text-gray-900">Giá ước tính</span>
              <span className="font-extrabold text-green-600 text-base">{formatPrice(price)}</span>
            </div>
          </div>
        </div>

        {/* Cam kết */}
        <div className="bg-green-50 rounded-2xl p-5 mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Cam kết của Easy Swap</h3>
          <ul className="space-y-2">
            {[
              "Nhận máy, kiểm tra và chuyển khoản trong 24 giờ",
              "Giá cuối không thấp hơn 10% so với báo giá này",
              "Gửi hàng hoàn toàn miễn phí, có bảo hiểm",
              "Nếu không đồng ý giá, máy được gửi trả lại miễn phí",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Các bước tiếp theo */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-8">
          <h3 className="font-bold text-gray-900 mb-4">Bước tiếp theo</h3>
          <div className="space-y-4">
            {[
              { num: "1", title: "Xác nhận đơn bán", desc: "Điền thông tin cá nhân và tài khoản nhận tiền" },
              { num: "2", title: "In tem gửi hàng", desc: "Miễn phí, in ngay tại nhà hoặc bưu điện" },
              { num: "3", title: "Đóng gói & gửi đi", desc: "Bọc kỹ máy, dán tem và gửi tại bưu điện gần nhất" },
              { num: "4", title: "Nhận tiền", desc: "Thanh toán trong 24h sau khi chúng tôi nhận máy" },
            ].map((step) => (
              <div key={step.num} className="flex gap-3">
                <div className="shrink-0 w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {step.num}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 rounded-full transition-all shadow-lg text-center">
            Xác nhận bán — {formatPrice(price)}
          </button>
          <a
            href="/sell/iphone/model"
            className="flex-1 border-2 border-gray-200 text-gray-700 font-semibold py-4 rounded-full hover:border-green-300 hover:text-green-600 transition-all text-center"
          >
            Thử model khác
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense>
      <QuoteContent />
    </Suspense>
  );
}
