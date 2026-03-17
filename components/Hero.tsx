const SCREENSHOTS = [
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/06/74/c30674c2-0563-3d4b-ea32-8efc285a3d40/simulator_screenshot_6F8C11F2-7373-4570-998C-B4CE1B5D66BC.png/460x996bb.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/db/02/da/db02dabd-5801-62c8-3e0f-4dafab6e04b0/simulator_screenshot_2642CDE2-C156-4C34-9B8E-9F5E41F20EF4.png/460x996bb.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/78/fa/d5/78fad557-b9ea-c76a-1f17-625699b7eeb8/simulator_screenshot_C76315F2-E6A5-411F-AD33-6685775F2823.png/460x996bb.webp",
];

function PhoneFrame({ src, alt, style, glow }: { src: string; alt: string; style?: React.CSSProperties; glow?: boolean }) {
  return (
    <div
      className={`relative bg-gray-900 rounded-[2.6rem] p-[7px] shadow-2xl ${glow ? "ring-2 ring-green-500/40 shadow-green-500/20" : "ring-1 ring-white/8"}`}
      style={style}
    >
      {glow && <div className="absolute -inset-3 bg-green-400 opacity-10 rounded-[3rem] blur-2xl -z-10" />}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-[14px] bg-black rounded-full z-10" />
      <img src={src} alt={alt} className="w-full rounded-[2.2rem] object-cover" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* ── Mesh gradient background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0" style={{backgroundImage:"radial-gradient(rgba(34,197,94,0.15) 1px, transparent 1px)", backgroundSize:"32px 32px"}} />
        {/* Orbs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl" style={{background:"radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)"}} />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{background:"radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)"}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full blur-3xl" style={{background:"radial-gradient(ellipse, rgba(34,197,94,0.05) 0%, transparent 70%)"}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0 sm:pt-14 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-end">

          {/* ── LEFT ── */}
          <div className="pb-4 lg:pb-20 space-y-5 sm:space-y-6">
            {/* Social proof pill */}
            <div className="animate-fade-up delay-100 inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="flex gap-0.5">
                {[1,2,3,4,5].map(s=>(
                  <svg key={s} className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </span>
              <span className="text-white text-xs font-semibold">4.8/5</span>
              <span className="text-gray-500 text-xs">·</span>
              <span className="text-gray-400 text-xs">50.000+ khách hàng</span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up delay-200">
              <h1 className="text-[2rem] xs:text-[2.4rem] sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.05] tracking-tight">
                Bán điện thoại cũ
                <br />
                <span style={{background:"linear-gradient(135deg, #4ade80 0%, #22c55e 40%, #86efac 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>
                  nhận tiền ngay hôm nay.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="animate-fade-up delay-300 text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
              Định giá iPhone, Samsung, Xiaomi trong&nbsp;<strong className="text-white">1 phút</strong>.
              Gửi máy miễn phí — nhận tiền trong&nbsp;<strong className="text-white">24 giờ</strong>.
            </p>

            {/* Download CTA */}
            <div className="animate-fade-up delay-400 flex flex-row gap-3 flex-wrap">
              <a href="https://apps.apple.com/us/app/easy-swap/id6756199408" target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-3 bg-white text-gray-950 font-bold pl-4 pr-6 py-3.5 rounded-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-xl overflow-hidden">
                <div className="animate-shimmer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg className="w-7 h-7 shrink-0 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="relative z-10">
                  <div className="text-gray-400 text-[9px] uppercase tracking-widest font-medium leading-none">Tải về trên</div>
                  <div className="font-extrabold text-sm leading-snug">App Store</div>
                </div>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.swap.rentino" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 pl-4 pr-6 py-3.5 rounded-2xl font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg"
                style={{background:"linear-gradient(135deg, #22c55e, #16a34a)", boxShadow:"0 8px 32px rgba(34,197,94,0.35)"}}>
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.18-.06l11.29-6.51-2.88-2.88L3.18 23.76zm16.57-10.7L17.1 11.5l-2.96 2.96 2.96 2.96 2.67-1.55a1.5 1.5 0 0 0-.02-2.81zM3 1.24 13.77 12 10.9 14.87.82 4.8A2 2 0 0 1 3 1.24zm9.82 9.33L3.18.24A2 2 0 0 0 1 2.06v19.88l11.82-11.37z"/>
                </svg>
                <div>
                  <div className="text-green-200 text-[9px] uppercase tracking-widest font-medium leading-none">Tải về trên</div>
                  <div className="font-extrabold text-sm leading-snug">Google Play</div>
                </div>
              </a>
            </div>

            {/* Trust row */}
            <div className="animate-fade-up delay-500 flex flex-wrap gap-x-6 gap-y-2 pt-1">
              {[
                {icon:"💰", label:"Định giá 1 phút"},
                {icon:"📦", label:"Gửi máy miễn phí"},
                {icon:"⚡", label:"Nhận tiền 24h"},
              ].map(b=>(
                <span key={b.label} className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                  <span>{b.icon}</span>{b.label}
                </span>
              ))}
            </div>

            {/* Partner row */}
            <div className="animate-fade-up delay-600 flex items-center gap-3 pt-1">
              <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold shrink-0">Đối tác:</span>
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-400/25 rounded-lg px-3 py-1.5">
                <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center shrink-0">
                  <span className="text-white text-[7px] font-black leading-none">Mi</span>
                </div>
                <span className="text-white text-[11px] font-bold">Xiaomi Store</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-400/25 rounded-lg px-3 py-1.5">
                <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center shrink-0">
                  <span className="text-white text-[7px] font-black leading-none">V+</span>
                </div>
                <span className="text-white text-[11px] font-bold">Viettel Store</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT – phone fan (adaptive) ── */}
          <div className="animate-fade-right delay-300 relative flex justify-center items-end"
            style={{height:"clamp(340px,50vw,520px)"}}>
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-14 rounded-full blur-3xl" style={{background:"rgba(34,197,94,0.2)"}} />

            {/* Left phone – desktop only */}
            <div className="hidden lg:block absolute animate-float-badge-3" style={{left:"2%",bottom:0,zIndex:1}}>
              <PhoneFrame src={SCREENSHOTS[1]} alt="app screen 2"
                style={{width:"140px",transform:"rotate(-9deg) translateY(24px)",opacity:0.65,filter:"brightness(0.85)"}} />
            </div>

            {/* Right phone – desktop only */}
            <div className="hidden lg:block absolute animate-float-badge-1" style={{right:"2%",bottom:0,zIndex:1}}>
              <PhoneFrame src={SCREENSHOTS[2]} alt="app screen 3"
                style={{width:"140px",transform:"rotate(9deg) translateY(24px)",opacity:0.65,filter:"brightness(0.85)"}} />
            </div>

            {/* Side phones – mobile (smaller, closer) */}
            <div className="lg:hidden absolute animate-float-badge-3" style={{left:"4%",bottom:0,zIndex:1}}>
              <PhoneFrame src={SCREENSHOTS[1]} alt="app screen 2"
                style={{width:"100px",transform:"rotate(-8deg) translateY(20px)",opacity:0.5,filter:"brightness(0.8)"}} />
            </div>
            <div className="lg:hidden absolute animate-float-badge-1" style={{right:"4%",bottom:0,zIndex:1}}>
              <PhoneFrame src={SCREENSHOTS[2]} alt="app screen 3"
                style={{width:"100px",transform:"rotate(8deg) translateY(20px)",opacity:0.5,filter:"brightness(0.8)"}} />
            </div>

            {/* Center phone */}
            <div className="absolute animate-float" style={{left:"50%",transform:"translateX(-50%)",bottom:0,zIndex:10}}>
              <PhoneFrame src={SCREENSHOTS[0]} alt="Easy Swap App"
                style={{width:"clamp(160px,28vw,210px)"}}
                glow />
            </div>

            {/* Badge top-left */}
            <div className="animate-float-badge-2 absolute z-20 bg-gray-900/90 backdrop-blur border border-white/10 text-white rounded-xl px-3 py-2 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap shadow-xl"
              style={{left:"5%",top:"12%"}}>
              📱 Nhận diện máy tự động
            </div>

            {/* Badge right-mid */}
            <div className="animate-float-badge-1 absolute z-20 text-white rounded-xl px-3 py-2 text-[10px] sm:text-[11px] font-bold whitespace-nowrap shadow-xl"
              style={{right:"3%",top:"32%",background:"linear-gradient(135deg,#22c55e,#16a34a)",boxShadow:"0 4px 20px rgba(34,197,94,0.4)"}}>
              ⚡ Báo giá tức thì
            </div>

            {/* Badge bottom-left */}
            <div className="animate-float-badge-3 absolute z-20 bg-gray-900/90 backdrop-blur border border-white/10 text-white rounded-xl px-3 py-2 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap shadow-xl"
              style={{left:"6%",bottom:"16%"}}>
              🔒 Kiểm tra Pin & RAM
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
