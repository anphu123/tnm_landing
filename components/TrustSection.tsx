import { trustPoints } from "@/lib/data";
import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Tại sao chọn Easy Swap?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Chúng tôi đã thu mua hàng chục nghìn điện thoại cũ từ khách hàng trên toàn Việt Nam.
            Minh bạch, nhanh chóng và được tin tưởng.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, i) => (
            <Reveal key={point.title} variant="up" delay={i * 100}>
              <div className="text-center p-6 rounded-2xl bg-green-50 hover:bg-green-100 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50K+", label: "Điện thoại đã thu mua" },
            { value: "4.8★", label: "Đánh giá App Store" },
            { value: "24h", label: "Thanh toán sau kiểm tra" },
            { value: "100%", label: "Minh bạch, không ẩn phí" },
          ].map((stat, i) => (
            <Reveal key={stat.label} variant="zoom" delay={i * 80} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
