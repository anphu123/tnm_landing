import Reveal from "./Reveal";

const steps = [
  {
    step: "01",
    icon: "📱",
    title: "Định giá ngay online",
    description: "Chọn dòng máy, dung lượng và tình trạng điện thoại. Nhận báo giá thu mua ngay lập tức — không cần đến cửa hàng.",
  },
  {
    step: "02",
    icon: "📦",
    title: "Gửi máy miễn phí",
    description: "In tem vận chuyển miễn phí, đóng gói máy và gửi qua bưu điện hoặc đặt lịch shipper đến lấy tận nơi.",
  },
  {
    step: "03",
    icon: "🧪",
    title: "Chúng tôi kiểm tra máy",
    description: "Đội ngũ kỹ thuật kiểm tra máy theo đúng tình trạng bạn khai báo. Quy trình minh bạch, nhanh chóng trong 24 giờ.",
  },
  {
    step: "04",
    icon: "💰",
    title: "Nhận tiền ngay",
    description: "Sau khi kiểm tra xong, tiền được chuyển thẳng vào tài khoản ngân hàng hoặc ví điện tử của bạn trong ngày.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Bán điện thoại cũ dễ dàng
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Chỉ 4 bước đơn giản — định giá, gửi máy, kiểm tra và nhận tiền ngay trong ngày.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Reveal key={step.step} variant="up" delay={idx * 120} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-green-600 z-0 -translate-x-1/2" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
