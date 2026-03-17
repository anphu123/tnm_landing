import { reviews } from "@/lib/data";
import Reveal from "./Reveal";

function Stars({ n = 5, size = "4" }: { n?: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s=>(
        <svg key={s} className={`w-${size} h-${size} ${s<=n?"text-green-400":"text-white/15"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-950">
      {/* Gradient bg */}
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 80% 50% at 50% 100%,rgba(34,197,94,0.08) 0%,transparent 70%)"}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal variant="up" className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Stars n={5} size="5" />
            <span className="text-white font-extrabold text-xl">4.8</span>
            <span className="text-gray-500 text-sm">/ 5 · App Store</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Hơn <strong className="text-green-400">50.000</strong> khách hàng đã bán điện thoại cũ qua Easy Swap.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} variant="up" delay={i * 120}>
              <div className="relative rounded-2xl p-6 h-full flex flex-col justify-between group hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)"}}>
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{background:"radial-gradient(circle at 50% 0%,rgba(34,197,94,0.08) 0%,transparent 70%)"}} />
                {/* Quote mark */}
                <div className="absolute top-4 right-5 text-5xl font-serif text-green-500/10 leading-none select-none">"</div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Stars n={r.rating} />
                    <span className="text-gray-600 text-xs">{r.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">"{r.text}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
                    style={{background:"linear-gradient(135deg,#22c55e,#16a34a)"}}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{r.name}</div>
                    <div className="text-green-500/60 text-xs">{r.grade}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
