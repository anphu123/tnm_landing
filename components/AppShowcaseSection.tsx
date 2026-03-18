"use client";
import { useState, useEffect } from "react";
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
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i + 1) % screens.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

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
                <Reveal variant="spin" delay={i*90} duration={600} className="shrink-0">
                  <div className="text-lg">{f.icon}</div>
                </Reveal>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[11px] leading-tight truncate">{f.title}</div>
                  <div className="text-gray-600 text-[10px] mt-0.5 leading-tight line-clamp-2">{f.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Main layout desktop */}
        <div className="hidden lg:block relative mb-16" style={{height:"540px"}}>
          {/* Left features – absolute left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 w-56 z-10">
            {features.slice(0,2).map((f,i)=>(
              <Reveal key={f.title} variant="right" delay={i*120}>
                <div className="flex items-start gap-3 bg-white/[0.04] border border-white/8 rounded-2xl p-4 hover:bg-white/[0.07] hover:border-green-500/30 transition-all duration-300 group cursor-default">
                  <Reveal variant="spin" delay={i*120 + 200} duration={650} className="shrink-0">
                    <div className="text-xl group-hover:scale-110 transition-transform">{f.icon}</div>
                  </Reveal>
                  <div>
                    <div className="text-white font-bold text-sm leading-snug">{f.title}</div>
                    <div className="text-gray-600 text-xs mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── 5-phone fan – truly centered ── */}
          <div className="relative w-full h-full overflow-visible">
            {/* Floor glow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-96 h-16 rounded-full blur-3xl pointer-events-none" style={{background:"rgba(34,197,94,0.18)"}} />

            {/* Far-left phone — entrance spins in from center-left */}
            <div className="hidden lg:block absolute animate-phone-fan-far-left" style={{left:"50%",bottom:0,zIndex:1}}>
              <div className="animate-float-badge-3">
                <div className="relative bg-gray-900 rounded-[2rem] p-[5px] shadow-xl"
                  style={{width:"108px",opacity:0.45,filter:"brightness(0.7)",border:"1px solid rgba(255,255,255,0.06)"}}>
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-9 h-[10px] bg-black rounded-full z-10" />
                  <img src={screens[(activeIdx - 2 + screens.length) % screens.length].img} alt="" className="w-full rounded-[1.6rem] transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Left phone — entrance spins in from center */}
            <div className="hidden lg:block absolute animate-phone-fan-left" style={{left:"50%",bottom:0,zIndex:5}}>
              <div className="animate-float-badge-1">
                <div className="relative bg-gray-900 rounded-[2.4rem] p-[7px] shadow-2xl"
                  style={{width:"158px",opacity:0.78,filter:"brightness(0.88)",border:"1px solid rgba(255,255,255,0.1)"}}>
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-[13px] bg-black rounded-full z-10" />
                  <img src={screens[(activeIdx - 1 + screens.length) % screens.length].img} alt="" className="w-full rounded-[2rem] transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* CENTER — spins in from nothing, then floats */}
            <div className="absolute animate-phone-fan-center" style={{left:"50%",bottom:0,zIndex:20}}>
              <div className="animate-float">
                {/* Glow */}
                <div className="absolute -inset-6 rounded-[3.5rem] blur-3xl -z-10" style={{background:"rgba(34,197,94,0.14)"}} />
                {/* Carousel */}
                <div style={{width:"230px",overflow:"hidden"}}>
                  <div style={{
                    display:"flex",
                    transform:`translateX(calc(-${activeIdx} * 230px))`,
                    transition:"transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                  }}>
                    {screens.map((screen, i) => (
                      <div key={i} className="relative bg-gray-900 shrink-0" style={{
                        width:"230px",
                        borderRadius:"3rem",
                        padding:"8px",
                        border: i === activeIdx ? "2px solid rgba(34,197,94,0.45)" : "2px solid rgba(255,255,255,0.08)",
                        boxShadow: i === activeIdx ? "0 0 60px rgba(34,197,94,0.25),0 30px 60px rgba(0,0,0,0.5)" : "none",
                        transition:"border 0.4s, box-shadow 0.4s",
                      }}>
                        <div style={{position:"absolute",top:"12px",left:"50%",transform:"translateX(-50%)",width:"56px",height:"15px",background:"#000",borderRadius:"9999px",zIndex:30}} />
                        <img src={screen.img} alt="Easy Swap App" style={{width:"100%",borderRadius:"2.3rem",display:"block"}} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right phone — entrance spins in from center */}
            <div className="hidden lg:block absolute animate-phone-fan-right" style={{left:"50%",bottom:0,zIndex:5}}>
              <div className="animate-float-badge-2">
                <div className="relative bg-gray-900 rounded-[2.4rem] p-[7px] shadow-2xl"
                  style={{width:"158px",opacity:0.78,filter:"brightness(0.88)",border:"1px solid rgba(255,255,255,0.1)"}}>
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-[13px] bg-black rounded-full z-10" />
                  <img src={screens[(activeIdx + 1) % screens.length].img} alt="" className="w-full rounded-[2rem] transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Far-right phone — entrance spins in from center-right */}
            <div className="hidden lg:block absolute animate-phone-fan-far-right" style={{left:"50%",bottom:0,zIndex:1}}>
              <div className="animate-float-badge-3">
                <div className="relative bg-gray-900 rounded-[2rem] p-[5px] shadow-xl"
                  style={{width:"108px",opacity:0.45,filter:"brightness(0.7)",border:"1px solid rgba(255,255,255,0.06)"}}>
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-9 h-[10px] bg-black rounded-full z-10" />
                  <img src={screens[(activeIdx + 2) % screens.length].img} alt="" className="w-full rounded-[1.6rem] transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right features – absolute right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 w-56 z-10">
            {features.slice(2,4).map((f,i)=>(
              <Reveal key={f.title} variant="left" delay={i*120}>
                <div className="flex items-start gap-3 bg-white/[0.04] border border-white/8 rounded-2xl p-4 hover:bg-white/[0.07] hover:border-green-500/30 transition-all duration-300 group cursor-default">
                  <Reveal variant="spin-r" delay={i*120 + 200} duration={650} className="shrink-0">
                    <div className="text-xl group-hover:scale-110 transition-transform">{f.icon}</div>
                  </Reveal>
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

          {/* Center phone – mobile carousel (whole frame slides) */}
          <div className="absolute animate-float" style={{left:"50%",bottom:0,zIndex:20,transform:"translateX(-50%)"}}>
            <div className="absolute -inset-4 rounded-[3rem] blur-2xl -z-10" style={{background:"rgba(34,197,94,0.11)"}} />
            <div style={{width:"168px",overflow:"hidden"}}>
              <div style={{
                display:"flex",
                transform:`translateX(calc(-${activeIdx} * 168px))`,
                transition:"transform 0.55s cubic-bezier(0.4,0,0.2,1)",
              }}>
                {screens.map((screen, i) => (
                  <div key={i} className="relative bg-gray-900 shrink-0" style={{
                    width:"168px",
                    borderRadius:"2.6rem",
                    padding:"7px",
                    border: i === activeIdx ? "2px solid rgba(34,197,94,0.38)" : "2px solid rgba(255,255,255,0.08)",
                    boxShadow: i === activeIdx ? "0 0 50px rgba(34,197,94,0.24),0 24px 50px rgba(0,0,0,0.55)" : "none",
                    transition:"border 0.4s, box-shadow 0.4s",
                  }}>
                    <div style={{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",width:"50px",height:"13px",background:"#000",borderRadius:"9999px",zIndex:30}} />
                    <img src={screen.img} alt="Easy Swap App" style={{width:"100%",borderRadius:"2rem",display:"block"}} />
                  </div>
                ))}
              </div>
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

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === activeIdx ? "w-6 h-2 bg-green-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>

        {/* Download CTA */}
        <Reveal variant="up" delay={200} className="flex flex-row gap-4 justify-center flex-wrap">
          <a href="https://apps.apple.com/us/app/easy-swap/id6756199408" target="_blank" rel="noopener noreferrer"
            className="hover:scale-105 active:scale-95 transition-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Tải về trên App Store"
              className="h-14 w-auto drop-shadow-lg"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.swap.rentino" target="_blank" rel="noopener noreferrer"
            className="hover:scale-105 active:scale-95 transition-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png"
              alt="Tải về trên Google Play"
              className="h-[58px] w-auto drop-shadow-lg"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
