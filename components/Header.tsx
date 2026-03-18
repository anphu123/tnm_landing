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
              src="/img/logo-tnm.jpg"
              alt="Tầm Nhìn Mới"
              className="h-9 w-auto object-contain rounded-sm"
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
              className="hidden md:flex hover:scale-105 transition-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png"
                alt="Tải về trên Google Play"
                className="h-9 w-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/easy-swap/id6756199408"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex hover:scale-105 transition-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Tải về trên App Store"
                className="h-8 w-auto"
              />
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
            <div className="flex gap-3 mt-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/easy-swap/id6756199408"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Tải về trên App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.swap.rentino"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png"
                  alt="Tải về trên Google Play"
                  className="h-[42px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
