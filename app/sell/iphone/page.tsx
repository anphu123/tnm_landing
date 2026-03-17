import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Shield, RotateCcw, Truck, Banknote } from "lucide-react";

const steps = [
  { num: "1", title: "Chọn model", desc: "Cho chúng tôi biết bạn đang bán iPhone nào" },
  { num: "2", title: "Mô tả tình trạng", desc: "Trả lời vài câu hỏi nhanh về máy của bạn" },
  { num: "3", title: "Nhận báo giá", desc: "Xem ngay mức giá chúng tôi trả" },
  { num: "4", title: "Gửi máy & nhận tiền", desc: "Gửi miễn phí, nhận thanh toán trong 24h" },
];

const whyPoints = [
  { icon: <Banknote className="w-6 h-6" />, title: "Giá tốt nhất thị trường", desc: "Chúng tôi trả giá cao hơn các cửa hàng thu mua thông thường đến 30%." },
  { icon: <Truck className="w-6 h-6" />, title: "Gửi hàng hoàn toàn miễn phí", desc: "In nhãn gửi hàng ngay trên website, đóng gói và gửi đi không tốn xu nào." },
  { icon: <Banknote className="w-6 h-6" />, title: "Thanh toán trong 24 giờ", desc: "Ngay khi nhận và kiểm tra máy, chúng tôi chuyển khoản cho bạn ngay lập tức." },
  { icon: <Shield className="w-6 h-6" />, title: "An toàn & bảo mật", desc: "Dữ liệu cá nhân của bạn được xóa sạch hoàn toàn trước khi tân trang." },
  { icon: <RotateCcw className="w-6 h-6" />, title: "Chúng tôi nhận mọi tình trạng", desc: "Màn hình vỡ, pin yếu, máy bị khóa — chúng tôi vẫn mua." },
];

const recentSales = [
  { model: "iPhone 15 Pro Max", storage: "256 GB", condition: "Xuất sắc", price: "22.500.000₫" },
  { model: "iPhone 14 Pro", storage: "128 GB", condition: "Tốt", price: "14.200.000₫" },
  { model: "iPhone 13", storage: "128 GB", condition: "Xuất sắc", price: "9.800.000₫" },
  { model: "iPhone 12 Pro", storage: "256 GB", condition: "Khá", price: "7.100.000₫" },
  { model: "iPhone 15", storage: "128 GB", condition: "Tốt", price: "12.300.000₫" },
  { model: "iPhone 14", storage: "128 GB", condition: "Xuất sắc", price: "11.500.000₫" },
];

export default function SellIPhonePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero bán máy */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-500 opacity-10 rounded-full" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-green-500 opacity-10 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
          <div className="max-w-2xl">
            <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
              Thu mua iPhone
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Bán iPhone cũ —
              <br />
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                nhanh, dễ, giá tốt
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Nhận báo giá ngay lập tức, gửi máy miễn phí và nhận tiền trong 24 giờ.
              Chúng tôi mua tất cả các dòng iPhone ở mọi tình trạng.
            </p>
            <a
              href="/sell/iphone/model"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-xl"
            >
              Bắt đầu ngay
              <ChevronRight className="w-5 h-5" />
            </a>
            <div className="flex flex-wrap gap-6 mt-8">
              {["⚡ Báo giá trong 30 giây", "🚚 Gửi hàng miễn phí", "💳 Nhận tiền trong 24h"].map(t => (
                <span key={t} className="text-sm text-gray-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Các bước */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Bán trong 4 bước đơn giản</h2>
            <p className="text-gray-500">Toàn bộ quá trình chỉ mất vài phút.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-green-600 z-0 -translate-x-1/2" />
                )}
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/sell/iphone/model"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-600 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg"
            >
              Chọn model iPhone →
            </a>
          </div>
        </div>
      </section>

      {/* Giá mua gần đây */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Giá thu mua gần đây</h2>
            <p className="text-gray-500">Giá thực tế chúng tôi đã trả cho khách hàng.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentSales.map((sale) => (
              <div key={`${sale.model}-${sale.storage}`} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between hover:border-green-200 hover:shadow-md transition-all">
                <div>
                  <div className="font-bold text-gray-900">{sale.model}</div>
                  <div className="text-sm text-gray-500">{sale.storage} · {sale.condition}</div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-lg bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    {sale.price}
                  </div>
                  <a href="/sell/iphone/model" className="text-xs text-green-500 hover:underline">Bán ngay →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tại sao chọn Easy Swap */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              Tại sao bán cho Easy Swap?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((p) => (
              <div key={p.title} className="flex gap-4 p-5 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl flex items-center justify-center shadow">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA cuối */}
      <section className="py-14 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">Sẵn sàng bán iPhone của bạn?</h2>
          <p className="text-green-100 mb-7">Nhận báo giá miễn phí ngay bây giờ — chỉ mất 30 giây.</p>
          <a
            href="/sell/iphone/model"
            className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-green-50 transition-all shadow-xl"
          >
            Bắt đầu ngay <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
