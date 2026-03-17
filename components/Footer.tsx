import { footerLinks } from "@/lib/data";

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 rounded-full flex items-center justify-center transition-all">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          {/* Thương hiệu */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">ES</span>
              </div>
              <span className="text-xl font-extrabold">
                <span className="text-green-400">Easy</span>
                <span className="text-green-400">Swap</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Dịch vụ thu mua điện thoại cũ uy tín — iPhone, Samsung, Xiaomi.
              Định giá minh bạch, thanh toán nhanh trong 24 giờ.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <SocialIcon href="#">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon href="#">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </SocialIcon>
              {/* TikTok */}
              <SocialIcon href="#">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                </svg>
              </SocialIcon>
              {/* YouTube */}
              <SocialIcon href="#">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Phương thức thanh toán
        <div className="py-6 border-b border-gray-800">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-500">Thanh toán an toàn:</span>
            {["Visa", "Mastercard", "PayPal", "MoMo", "ZaloPay", "VNPay"].map((method) => (
              <span key={method} className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-lg">
                {method}
              </span>
            ))}
          </div>
        </div> */}

        {/* Cuối trang */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          {/* <p>© 2024 Easy Swap Vietnam. Tất cả quyền được bảo lưu. MST: 0123456789</p> */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách Bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Chính sách Cookie</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản Sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
