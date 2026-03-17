import Reveal from "./Reveal";

export default function SellSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="zoom">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-14 text-white">
                <Reveal variant="up" delay={100}>
                  <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
                    Thu mua điện thoại cũ
                  </span>
                </Reveal>
                <Reveal variant="up" delay={200}>
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                    Nhận giá tốt nhất
                    <br />
                    <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                      cho điện thoại cũ của bạn
                    </span>
                  </h2>
                </Reveal>
                <Reveal variant="up" delay={300}>
                  <p className="text-gray-300 mb-8 text-lg">
                    Chúng tôi thu mua iPhone, Samsung, Xiaomi ở mọi tình trạng.
                    Định giá ngay online, gửi máy miễn phí và nhận tiền trong vòng 24 giờ.
                  </p>
                </Reveal>
                <Reveal variant="up" delay={400}>
                  <ul className="space-y-3 mb-8">
                    {[
                      "✓ Định giá ngay lập tức online",
                      "✓ Tem gửi hàng miễn phí",
                      "✓ Thanh toán nhanh trong 24 giờ",
                      "✓ Nhận cả máy bị hỏng, màn vỡ",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-200 text-sm">{item}</li>
                    ))}
                  </ul>
                  <a
                    href="/sell"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 hover:shadow-green-500/30"
                  >
                    Định giá ngay →
                  </a>
                </Reveal>
              </div>

              <Reveal variant="left" delay={200} className="relative hidden lg:flex items-center justify-center p-10 bg-white/5">
                <div className="text-center">
                  <div className="text-8xl mb-4">💰</div>
                  <div className="bg-white/10 rounded-2xl p-6 text-white border border-white/10">
                    <div className="text-sm text-gray-300 mb-1">Samsung Galaxy S24 của bạn trị giá</div>
                    <div className="text-5xl font-extrabold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                      6.500.000₫
                    </div>
                    <div className="text-sm text-gray-300 mt-1">256 GB · Tình trạng tốt</div>
                    <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2.5 rounded-xl transition-all text-sm hover:scale-105">
                      Bán ngay
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
