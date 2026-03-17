"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-gray-950">
      {/* Full-bleed gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{background:"linear-gradient(135deg,rgba(34,197,94,0.12) 0%,rgba(16,185,129,0.06) 40%,rgba(34,197,94,0.1) 100%)"}} />
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(rgba(34,197,94,0.06) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="zoom">
          <div className="bg-gray-900/80 backdrop-blur-xl border border-green-500/20 rounded-3xl p-10 sm:p-14 shadow-2xl" style={{boxShadow:"0 0 80px rgba(34,197,94,0.08),0 40px 80px rgba(0,0,0,0.4)"}}>
            {/* Top icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
              style={{background:"linear-gradient(135deg,#22c55e,#16a34a)",boxShadow:"0 8px 32px rgba(34,197,94,0.4)"}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Tải app — bán máy ngay hôm nay
            </h2>
            <p className="text-gray-400 mb-8 text-base max-w-md mx-auto leading-relaxed">
              Định giá iPhone, Samsung, Xiaomi trong 1 phút. Nhận tiền trong 24 giờ. Hoàn toàn miễn phí.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://apps.apple.com/us/app/easy-swap/id6756199408" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-900 font-bold px-7 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl justify-center">
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-gray-400 text-[9px] uppercase tracking-widest">Tải về trên</div>
                  <div className="font-extrabold text-sm">App Store</div>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.swap.rentino" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-7 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg justify-center"
                style={{background:"linear-gradient(135deg,#22c55e,#16a34a)",boxShadow:"0 8px 32px rgba(34,197,94,0.35)"}}>
                <svg className="w-7 h-7 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.18-.06l11.29-6.51-2.88-2.88L3.18 23.76zm16.57-10.7L17.1 11.5l-2.96 2.96 2.96 2.96 2.67-1.55a1.5 1.5 0 0 0-.02-2.81zM3 1.24 13.77 12 10.9 14.87.82 4.8A2 2 0 0 1 3 1.24zm9.82 9.33L3.18.24A2 2 0 0 0 1 2.06v19.88l11.82-11.37z"/>
                </svg>
                <div className="text-left">
                  <div className="text-green-200 text-[9px] uppercase tracking-widest">Tải về trên</div>
                  <div className="font-extrabold text-sm text-white">Google Play</div>
                </div>
              </a>
            </div>

            <div className="border-t border-white/8 pt-7">
              <p className="text-gray-500 text-sm mb-4">Hoặc nhận thông báo giá thu mua mới nhất qua email</p>
              {submitted ? (
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-6 py-3 font-semibold text-sm">
                  ✅ Đăng ký thành công!
                </div>
              ) : (
                <form onSubmit={e=>{e.preventDefault();if(email)setSubmitted(true)}}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                    placeholder="Email của bạn"
                    required
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30"
                  />
                  <button type="submit"
                    className="bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all shrink-0 hover:scale-105">
                    Đăng ký
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
