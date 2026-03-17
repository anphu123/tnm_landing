import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brands } from "@/lib/phones";
import { ChevronRight } from "lucide-react";

export default function SellLandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-500 opacity-10 rounded-full" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-green-500 opacity-10 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20 relative text-center">
          <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
            Thu mua điện thoại cũ
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Bán điện thoại cũ —
            <br />
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              nhanh, dễ, giá tốt
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Nhận báo giá ngay lập tức, gửi máy miễn phí và nhận tiền trong 24 giờ.
            Chúng tôi mua tất cả các hãng điện thoại ở mọi tình trạng.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["⚡ Báo giá trong 30 giây", "🚚 Gửi hàng miễn phí", "💳 Nhận tiền trong 24h"].map((t) => (
              <span key={t} className="text-sm text-gray-300">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Chọn hãng */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              Bạn đang bán điện thoại hãng nào?
            </h2>
            <p className="text-gray-500">Chọn hãng để xem báo giá chính xác nhất.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <a
                key={brand.slug}
                href={`/sell/${brand.slug}/model`}
                className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-300 hover:shadow-xl p-6 flex flex-col items-center text-center transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-3xl mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                  {brand.logo}
                </div>
                <span className="font-bold text-gray-900 text-base">{brand.name}</span>
                <span className="text-xs text-gray-400 mt-1">{brand.count}+ model</span>
                <span className="mt-3 text-xs text-green-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Chọn <ChevronRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vì sao bán cho Easy Swap */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Tại sao chọn Easy Swap?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "💰", title: "Giá tốt nhất", desc: "Cao hơn cửa hàng thu mua thông thường đến 30%" },
              { icon: "⚡", title: "Thanh toán nhanh", desc: "Chuyển khoản trong 24h sau khi nhận máy" },
              { icon: "🔒", title: "An toàn & uy tín", desc: "Dữ liệu cá nhân xóa sạch, cam kết bảo mật" },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{p.title}</div>
                <div className="text-sm text-gray-500">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
