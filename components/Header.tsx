"use client";
import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-950 shadow-lg">
      {/* Thanh thông báo */}
      <div className="bg-green-500 text-white text-center text-sm py-2 px-4 font-medium">
        🎉 Miễn phí vận chuyển cho đơn hàng trên 500.000₫ &nbsp;|&nbsp; Đổi trả miễn phí 30 ngày &nbsp;|&nbsp; Bảo hành 12 tháng
      </div>

      {/* Nav chính */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Tầm Nhìn Mới"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-0.5 text-sm font-medium text-gray-300 hover:text-green-400 px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icon phải */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden sm:flex items-center gap-2 border border-white/20 rounded-full px-3 py-1.5 text-sm text-gray-400 hover:border-green-400 hover:text-green-400 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">Tìm kiếm</span>
            </button>

            {/* App download buttons */}
            <a
              href="https://play.google.com/store/apps/details?id=com.swap.rentino"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2 2 0 0 0 2.18-.06l11.29-6.51-2.88-2.88L3.18 23.76zm16.57-10.7L17.1 11.5l-2.96 2.96 2.96 2.96 2.67-1.55a1.5 1.5 0 0 0-.02-2.81zM3 1.24 13.77 12 10.9 14.87.82 4.8A2 2 0 0 1 3 1.24zm9.82 9.33L3.18.24A2 2 0 0 0 1 2.06v19.88l11.82-11.37z"/>
              </svg>
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/easy-swap/id6756199408"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors border border-white/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>

            <button className="relative p-2 text-gray-400 hover:text-green-400 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>

            <button
              className="lg:hidden p-2 text-gray-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Tìm kiếm theo dòng máy, dung lượng..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
          </div>
        )}
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-gray-950">
          <div className="px-4 py-3">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-medium text-gray-300 border-b border-white/5 hover:text-green-400"
              >
                {link.label}
              </a>
            ))}
            {/* App buttons on mobile */}
            <div className="flex gap-2 mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.swap.rentino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-bold py-2.5 rounded-xl"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.18-.06l11.29-6.51-2.88-2.88L3.18 23.76zm16.57-10.7L17.1 11.5l-2.96 2.96 2.96 2.96 2.67-1.55a1.5 1.5 0 0 0-.02-2.81zM3 1.24 13.77 12 10.9 14.87.82 4.8A2 2 0 0 1 3 1.24zm9.82 9.33L3.18.24A2 2 0 0 0 1 2.06v19.88l11.82-11.37z"/>
                </svg>
                Google Play
              </a>
              <a
                href="https://apps.apple.com/us/app/easy-swap/id6756199408"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold py-2.5 rounded-xl"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
