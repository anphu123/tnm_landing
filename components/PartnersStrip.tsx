const PARTNERS = [
  {
    key: "xiaomi",
    name: "Xiaomi Store",
    img: "/img/xiaomi.webp",
    cardClass:
      "flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-400/5 border border-orange-400/30 rounded-2xl px-5 py-3 shadow-lg shadow-orange-500/10 hover:border-orange-400/60 hover:shadow-orange-500/20 transition-all duration-300",
    frameClass: "w-24 h-14 rounded-xl overflow-hidden shrink-0 shadow-md shadow-orange-500/20",
    descClass: "text-orange-400/70 text-[10px] mt-0.5 font-medium whitespace-nowrap",
  },
  {
    key: "viettel",
    name: "Viettel Store",
    img: "/img/viettel.webp",
    cardClass:
      "flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-400/5 border border-blue-400/30 rounded-2xl px-5 py-3 shadow-lg shadow-blue-500/10 hover:border-blue-400/60 hover:shadow-blue-500/20 transition-all duration-300",
    frameClass: "w-24 h-14 rounded-xl overflow-hidden shrink-0 shadow-md shadow-blue-500/20",
    descClass: "text-blue-400/70 text-[10px] mt-0.5 font-medium whitespace-nowrap",
  },
  {
    key: "samsung",
    name: "Samsung",
    img: "/img/sam.jpg",
    cardClass:
      "flex items-center gap-3 bg-gradient-to-r from-sky-500/10 to-sky-400/5 border border-sky-400/30 rounded-2xl px-5 py-3 shadow-lg shadow-sky-500/10 hover:border-sky-400/60 hover:shadow-sky-500/20 transition-all duration-300",
    frameClass: "w-24 h-14 rounded-xl overflow-hidden shrink-0 shadow-md shadow-sky-500/20",
    descClass: "text-sky-400/70 text-[10px] mt-0.5 font-medium whitespace-nowrap",
  },
  {
    key: "sony",
    name: "Sony",
    img: "/img/OIP.webp",
    cardClass:
      "flex items-center gap-3 bg-gradient-to-r from-slate-400/10 to-slate-300/5 border border-slate-300/30 rounded-2xl px-5 py-3 shadow-lg shadow-slate-400/10 hover:border-slate-300/60 hover:shadow-slate-400/20 transition-all duration-300",
    frameClass: "w-24 h-14 rounded-xl overflow-hidden shrink-0 shadow-md shadow-slate-400/20",
    descClass: "text-slate-300/70 text-[10px] mt-0.5 font-medium whitespace-nowrap",
  },
];

function PartnerCards({ setKey }: { setKey: string }) {
  return (
    <>
      {PARTNERS.map((p) => (
        <div key={`${setKey}-${p.key}`} className={p.cardClass}>
          <div className={p.frameClass}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-white font-extrabold text-sm leading-none whitespace-nowrap">{p.name}</div>
            <div className={p.descClass}>Đối tác thu mua chính thức</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function PartnersStrip() {
  return (
    <div className="relative bg-gray-950 overflow-hidden">
      {/* Subtle green glow behind */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-24 bg-green-500 opacity-[0.06] blur-3xl rounded-full" />
      </div>

      <div className="relative border-y border-green-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 sm:gap-8">

            <div className="flex items-center gap-2 shrink-0 bg-green-500/10 border border-green-400/40 rounded-full px-4 py-2 shadow-lg shadow-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-green-300 text-xs uppercase tracking-widest font-extrabold whitespace-nowrap">
                Đối tác
              </p>
            </div>

            <div className="h-10 w-px bg-white/10 shrink-0 hidden sm:block" />

            {/* Auto-scrolling marquee track, content duplicated for a seamless loop */}
            <div className="relative flex-1 min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
              <div className="flex items-center gap-6 sm:gap-10 w-max animate-marquee hover:[animation-play-state:paused]">
                <PartnerCards setKey="a" />
                <PartnerCards setKey="b" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
