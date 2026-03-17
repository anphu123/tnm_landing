import Reveal from "./Reveal";

const screens = [
  { img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/06/74/c30674c2-0563-3d4b-ea32-8efc285a3d40/simulator_screenshot_6F8C11F2-7373-4570-998C-B4CE1B5D66BC.png/460x996bb.webp", label: "Đánh giá thiết bị" },
  { img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/db/02/da/db02dabd-5801-62c8-3e0f-4dafab6e04b0/simulator_screenshot_2642CDE2-C156-4C34-9B8E-9F5E41F20EF4.png/460x996bb.webp", label: "Kiểm tra sức khoẻ" },
  { img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/78/fa/d5/78fad557-b9ea-c76a-1f17-625699b7eeb8/simulator_screenshot_C76315F2-E6A5-411F-AD33-6685775F2823.png/460x996bb.webp", label: "Kiểm tra tình trạng" },
  { img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e2/4b/ee/e24bee92-86ca-112d-c268-cafc4136b8fc/simulator_screenshot_3415D029-C9F6-4C0E-B221-4ABDB79E278C.png/460x996bb.webp", label: "Chụp ảnh thiết bị" },
  { img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c5/31/4b/c5314b0f-7efd-bf60-798e-2f053a572099/simulator_screenshot_62B822BE-56EB-4D90-98B5-70FD9014DC5C.png/460x996bb.webp", label: "Nhận báo giá ngay" },
];

const features = [
  { icon: "⚡", title: "Định giá tức thì", desc: "Kết quả ngay trong 1 phút, không cần chờ đợi." },
  { icon: "🧪", title: "Kiểm tra 52 điểm", desc: "Quy trình chuẩn hoá, minh bạch từng bước." },
  { icon: "📦", title: "Shipper tận nơi", desc: "Đặt lịch lấy máy, không cần ra bưu điện." },
  { icon: "💰", title: "Thanh toán 24h", desc: "Chuyển khoản ngân hàng hoặc ví điện tử ngay." },
];

export default function AppShowcaseSection() {
  return (
    <section className="relative overflow-hidden py-24" style={{background:"linear-gradient(160deg,#020c05 0%,#041a0a 35%,#061f0d 65%,#020c05 100%)"}}>
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(34,197,94,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.05) 1px,transparent 1px)",backgroundSize:"56px 56px"}} />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(ellipse,rgba(34,197,94,0.1) 0%,transparent 65%)"}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal variant="up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Ứng dụng Easy Swap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Bán máy cũ chưa bao giờ
            <span style={{background:"linear-gradient(135deg,#4ade80,#22c55e,#86efac)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}> dễ đến thế</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Toàn bộ quy trình định giá, kiểm tra và bán máy nằm gọn trong lòng bàn tay bạn.
          </p>
        </Reveal>

        {/* ── Feature grid mobile (2×2) ── */}
        <div className="grid grid-cols-2 gap-2.5 lg:hidden mb-8">
          {features.map((f,i)=>(
            <Reveal key={f.title} variant="up" delay={i*70}>
              <div className="flex items-center gap-2.5 bg-white/[0.04] border border-white/8 rounded-2xl p-3 hover:border-green-500/30 transition-all">
                <div className="text-lg shrink-0">{f.icon}</div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[11px] leading-tight truncate">{f.title}</div>
                  <div className="text-gray-600 text-[10px] mt-0.5 leading-tight line-clamp-2">{f.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Main layout desktop */}
        <div className="hidden lg:flex items-center gap-8 mb-16">
          {/* Left features – fixed width */}
          <div className="flex flex-col gap-4 shrink-0 w-56">
            {features.slice(0,2).map((f,i)=>(
              <Reveal key={f.title} variant="right" delay={i*120}>
                <div className="flex items-start gap-3 bg-white/[0.04] border border-white/8 rounded-2xl p-4 hover:bg-white/[0.07] hover:border-green-500/30 transition-all duration-300 group cursor-default">
                  <div className="text-xl group-hover:scale-110 transition-transform shrink-0">{f.icon}</div>
                  <div>
                    <div className="text-white font-bold text-sm leading-snug">{f.title}</div>
                    <div className="text-gray-600 text-xs mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── 5-phone fan – center-anchored ── */}
          {/* overflow-visible so side phones can extend beyond flex-1 bounds */}
          <div className="relative flex-1 overflow-visible" style={{height:"540px"}}>
            {/* Floor glow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-96 h-16 rounded-full blur-3xl pointer-events-none" style={{background:"rgba(34,197,94,0.18)"}} />

            {/* Far-left (screen 4) */}
            <Reveal variant="up" delay={80} className="absolute animate-float-badge-3"
              style={{left:"50%",bottom:0,zIndex:1}}>
              <div className="bg-gray-900 rounded-[2rem] p-[5px] shadow-xl"
                style={{width:"108px",transform:"translateX(calc(-50% - 310px)) rotate(-10deg) translateY(44px)",opacity:0.45,filter:"brightness(0.7)",border:"1px solid rgba(255,255,255,0.06)"}}>
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-9 h-[10px] bg-black rounded-full z-10" />
                <img src={screens[3].img} alt="" className="w-full rounded-[1.6rem]" />
              </div>
            </Reveal>

            {/* Left (screen 2) */}
            <Reveal variant="up" delay={150} className="absolute animate-float-badge-1"
              style={{left:"50%",bottom:0,zIndex:5}}>
              <div className="bg-gray-900 rounded-[2.4rem] p-[7px] shadow-2xl"
                style={{width:"158px",transform:"translateX(calc(-50% - 190px)) rotate(-6deg) translateY(22px)",opacity:0.78,filter:"brightness(0.88)",border:"1px solid rgba(255,255,255,0.1)"}}>
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-[13px] bg-black rounded-full z-10" />
                <img src={screens[1].img} alt="" className="w-full rounded-[2rem]" />
              </div>
            </Reveal>

            {/* CENTER (screen 1) – hero phone */}
            <Reveal variant="up" delay={60} className="absolute animate-float"
              style={{left:"50%",bottom:0,zIndex:20}}>
              <div className="relative bg-gray-900 rounded-[3rem] p-2"
                style={{width:"230px",transform:"translateX(-50%)",boxShadow:"0 0 80px rgba(34,197,94,0.3),0 40px 80px rgba(0,0,0,0.6)",border:"2px solid rgba(34,197,94,0.35)"}}>
                <div className="absolute -inset-6 rounded-[3.5rem] blur-3xl -z-10" style={{background:"rgba(34,197,94,0.14)"}} />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[56px] h-[15px] bg-black rounded-full z-10" />
                <img src={screens[0].img} alt="Easy Swap App" className="w-full rounded-[2.6rem]" />
              </div>
            </Reveal>

            {/* Right (screen 3) */}
            <Reveal variant="up" delay={150} className="absolute animate-float-badge-2"
              style={{left:"50%",bottom:0,zIndex:5}}>
              <div className="bg-gray-900 rounded-[2.4rem] p-[7px] shadow-2xl"
                style={{width:"158px",transform:"translateX(calc(-50% + 190px)) rotate(6deg) translateY(22px)",opacity:0.78,filter:"brightness(0.88)",border:"1px solid rgba(255,255,255,0.1)"}}>
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-[13px] bg-black rounded-full z-10" />
                <img src={screens[2].img} alt="" className="w-full rounded-[2rem]" />
              </div>
            </Reveal>

            {/* Far-right (screen 5) */}
            <Reveal variant="up" delay={80} className="absolute animate-float-badge-3"
              style={{left:"50%",bottom:0,zIndex:1}}>
              <div className="bg-gray-900 rounded-[2rem] p-[5px] shadow-xl"
                style={{width:"108px",transform:"translateX(calc(-50% + 310px)) rotate(10deg) translateY(44px)",opacity:0.45,filter:"brightness(0.7)",border:"1px solid rgba(255,255,255,0.06)"}}>
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-9 h-[10px] bg-black rounded-full z-10" />
                <img src={screens[4].img} alt="" className="w-full rounded-[1.6rem]" />
              </div>
            </Reveal>
          </div>

          {/* Right features – fixed width */}
          <div className="flex flex-col gap-4 shrink-0 w-56">
            {features.slice(2,4).map((f,i)=>(
              <Reveal key={f.title} variant="left" delay={i*120}>
                <div className="flex items-start gap-3 bg-white/[0.04] border border-white/8 rounded-2xl p-4 hover:bg-white/[0.07] hover:border-green-500/30 transition-all duration-300 group cursor-default">
                  <div className="text-xl group-hover:scale-110 transition-transform shrink-0">{f.icon}</div>
                  <div>
                    <div className="text-white font-bold text-sm leading-snug">{f.title}</div>
                    <div className="text-gray-600 text-xs mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Phone fan mobile (< lg) – center-anchored ── */}
        <div className="lg:hidden relative mb-10" style={{height:"310px"}}>
          {/* Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-10 rounded-full blur-2xl pointer-events-none"
            style={{background:"rgba(34,197,94,0.22)"}} />

          {/* Left phone */}
          <div className="absolute animate-float-badge-1" style={{left:"50%",bottom:0,zIndex:5}}>
            <div className="bg-gray-900 rounded-[2rem] p-[6px] shadow-xl"
              style={{width:"112px",transform:"translateX(calc(-50% - 112px)) rotate(-8deg) translateY(20px)",opacity:0.7,filter:"brightness(0.83)",border:"1px solid rgba(255,255,255,0.08)"}}>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-[10px] bg-black rounded-full z-10" />
              <img src={screens[1].img} alt="" className="w-full rounded-[1.6rem]" />
            </div>
          </div>

          {/* Center phone */}
          <div className="absolute animate-float" style={{left:"50%",bottom:0,zIndex:20}}>
            <div className="relative bg-gray-900 rounded-[2.6rem] p-[7px] shadow-2xl"
              style={{width:"168px",transform:"translateX(-50%)",border:"1.5px solid rgba(34,197,94,0.38)",boxShadow:"0 0 50px rgba(34,197,94,0.24),0 24px 50px rgba(0,0,0,0.55)"}}>
              <div className="absolute -inset-4 rounded-[3rem] blur-2xl -z-10" style={{background:"rgba(34,197,94,0.11)"}} />
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[50px] h-[13px] bg-black rounded-full z-10" />
              <img src={screens[0].img} alt="Easy Swap App" className="w-full rounded-[2.2rem]" />
            </div>
          </div>

          {/* Right phone */}
          <div className="absolute animate-float-badge-2" style={{left:"50%",bottom:0,zIndex:5}}>
            <div className="bg-gray-900 rounded-[2rem] p-[6px] shadow-xl"
              style={{width:"112px",transform:"translateX(calc(-50% + 112px)) rotate(8deg) translateY(20px)",opacity:0.7,filter:"brightness(0.83)",border:"1px solid rgba(255,255,255,0.08)"}}>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-[10px] bg-black rounded-full z-10" />
              <img src={screens[2].img} alt="" className="w-full rounded-[1.6rem]" />
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <Reveal variant="up" delay={200} className="flex flex-col xs:flex-row gap-3 justify-center">
          <a href="https://apps.apple.com/us/app/easy-swap/id6756199408" target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-white text-gray-900 font-bold px-6 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl w-full xs:w-auto xs:min-w-[185px]">
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-gray-400 text-[9px] uppercase tracking-widest font-medium">Tải về trên</div>
              <div className="font-extrabold text-sm">App Store</div>
            </div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.swap.rentino" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg w-full xs:w-auto xs:min-w-[185px]"
            style={{background:"linear-gradient(135deg,#22c55e,#16a34a)",boxShadow:"0 8px 32px rgba(34,197,94,0.3)"}}>
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76a2 2 0 0 0 2.18-.06l11.29-6.51-2.88-2.88L3.18 23.76zm16.57-10.7L17.1 11.5l-2.96 2.96 2.96 2.96 2.67-1.55a1.5 1.5 0 0 0-.02-2.81zM3 1.24 13.77 12 10.9 14.87.82 4.8A2 2 0 0 1 3 1.24zm9.82 9.33L3.18.24A2 2 0 0 0 1 2.06v19.88l11.82-11.37z"/>
            </svg>
            <div className="text-left">
              <div className="text-green-200 text-[9px] uppercase tracking-widest font-medium">Tải về trên</div>
              <div className="font-extrabold text-sm text-white">Google Play</div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
