export default function PartnersStrip() {
  return (
    <div className="relative bg-gray-950 overflow-hidden">
      {/* Subtle green glow behind */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-24 bg-green-500 opacity-[0.06] blur-3xl rounded-full" />
      </div>

      <div className="relative border-y border-green-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">

            <div className="flex items-center gap-2 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-green-400 text-xs uppercase tracking-widest font-bold">
                Đối tác độc quyền
              </p>
            </div>

            <div className="h-px w-px sm:w-10 sm:h-px bg-white/10 hidden sm:block" />

            {/* Xiaomi Store */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-400/5 border border-orange-400/30 rounded-2xl px-5 py-3 shadow-lg shadow-orange-500/10 hover:border-orange-400/60 hover:shadow-orange-500/20 transition-all duration-300">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
                <span className="text-white text-sm font-black">Mi</span>
              </div>
              <div>
                <div className="text-white font-extrabold text-sm leading-none">Xiaomi Store</div>
                <div className="text-orange-400/70 text-[10px] mt-0.5 font-medium">Đối tác thu mua chính thức</div>
              </div>
            </div>

            {/* Viettel Store */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-400/5 border border-blue-400/30 rounded-2xl px-5 py-3 shadow-lg shadow-blue-500/10 hover:border-blue-400/60 hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                <span className="text-white text-xs font-black">V+</span>
              </div>
              <div>
                <div className="text-white font-extrabold text-sm leading-none">Viettel Store</div>
                <div className="text-blue-400/70 text-[10px] mt-0.5 font-medium">Đối tác thu mua chính thức</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
