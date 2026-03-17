import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://easyswap.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Easy Swap – Bán Điện Thoại Cũ Giá Tốt | Thu Mua iPhone, Samsung, Xiaomi",
    template: "%s | Easy Swap",
  },
  description:
    "Thu mua iPhone, Samsung, Xiaomi cũ giá cao nhất Việt Nam. Định giá online trong 1 phút, gửi máy miễn phí, nhận tiền trong 24 giờ. Tải app Easy Swap ngay!",
  keywords: [
    "bán điện thoại cũ",
    "thu mua iPhone cũ",
    "thu mua Samsung cũ",
    "bán iPhone giá cao",
    "bán Samsung cũ",
    "bán Xiaomi cũ",
    "easy swap",
    "thu mua điện thoại cũ",
    "định giá điện thoại cũ",
    "bán máy cũ nhận tiền nhanh",
    "app bán điện thoại cũ",
  ],
  authors: [{ name: "Tầm Nhìn Mới Solution & Distribution" }],
  creator: "Tầm Nhìn Mới",
  publisher: "Tầm Nhìn Mới",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Easy Swap",
    title: "Easy Swap – Bán Điện Thoại Cũ Giá Tốt Nhất",
    description:
      "Thu mua iPhone, Samsung, Xiaomi cũ giá cao. Định giá online, gửi máy miễn phí, nhận tiền 24 giờ. Tải app Easy Swap!",
    images: [
      {
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/06/74/c30674c2-0563-3d4b-ea32-8efc285a3d40/simulator_screenshot_6F8C11F2-7373-4570-998C-B4CE1B5D66BC.png/460x996bb.webp",
        width: 460,
        height: 996,
        alt: "Easy Swap App – Đánh giá và định giá điện thoại cũ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Swap – Bán Điện Thoại Cũ Giá Tốt Nhất",
    description:
      "Thu mua iPhone, Samsung, Xiaomi cũ giá cao. Định giá online, gửi máy miễn phí, nhận tiền 24 giờ.",
    images: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/06/74/c30674c2-0563-3d4b-ea32-8efc285a3d40/simulator_screenshot_6F8C11F2-7373-4570-998C-B4CE1B5D66BC.png/460x996bb.webp",
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Easy Swap",
      url: siteUrl,
      description:
        "Dịch vụ thu mua điện thoại cũ uy tín — iPhone, Samsung, Xiaomi. Định giá minh bạch, thanh toán nhanh trong 24 giờ.",
      sameAs: [
        "https://apps.apple.com/us/app/easy-swap/id6756199408",
        "https://play.google.com/store/apps/details?id=com.swap.rentino",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Easy Swap",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "vi-VN",
    },
    {
      "@type": "MobileApplication",
      name: "Easy Swap",
      operatingSystem: ["iOS", "ANDROID"],
      applicationCategory: "ShoppingApplication",
      description:
        "Thu mua iPhone, Samsung, Xiaomi cũ giá cao nhất. Định giá online trong 1 phút, nhận tiền trong 24 giờ.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "VND" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1200",
      },
    },
    {
      "@type": "Service",
      name: "Thu mua điện thoại cũ",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Buyback",
      areaServed: { "@type": "Country", name: "Vietnam" },
      description:
        "Thu mua iPhone, Samsung, Xiaomi ở mọi tình trạng. Gửi máy miễn phí, nhận tiền trong 24 giờ.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
