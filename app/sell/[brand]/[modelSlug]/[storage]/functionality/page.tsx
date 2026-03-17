"use client";
import { useState, Suspense } from "react";
import { use } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellProgress from "@/components/SellProgress";
import {
  getBrand, slugToModelInBrand, storageLabel,
  classifyCondition, getBuyBackPrice, GRADE_CONFIG,
  DYNAMIC_ISLAND_MODELS, isFoldableModel, formatPrice,
} from "@/lib/phones";
import { ArrowLeft, ChevronRight } from "lucide-react";

type Option = { value: string; label: string; sub: string };
type Question = { id: string; label: string; icon: string; desc: string; options: Option[] };

// ─── A. Câu hỏi chung (mọi thiết bị) ───────────────────────────────────────
const COMMON_QUESTIONS: Question[] = [
  {
    id: "account",
    label: "Tài khoản & Bảo mật",
    icon: "🔐",
    desc: "Có thể đăng xuất hoàn toàn khỏi tài khoản (iCloud, Google, Samsung Account...)?",
    options: [
      { value: "can_logout",  label: "Có thể đăng xuất hoàn toàn", sub: "Máy sẵn sàng cho người mua mới" },
      { value: "cant_logout", label: "Không thể đăng xuất",        sub: "Máy đang bị khoá tài khoản" },
    ],
  },
  {
    id: "simlock",
    label: "Khoá mạng (SIM Lock)",
    icon: "📡",
    desc: "Máy có sử dụng được mọi SIM tại Việt Nam không?",
    options: [
      { value: "unlocked", label: "Đã mở khoá — dùng được mọi SIM", sub: "" },
      { value: "locked",   label: "Vẫn bị khoá mạng hoặc không xác định", sub: "" },
    ],
  },
  {
    id: "screen_display",
    label: "Hiển thị & Cảm ứng",
    icon: "📱",
    desc: "Bật màn hình nền sáng trắng, kiểm tra sọc, đốm đen, ám màu và cảm ứng.",
    options: [
      { value: "perfect", label: "Hoàn hảo — không sọc, không đốm, cảm ứng mượt mà", sub: "" },
      { value: "broken",  label: "Có lỗi màn hình", sub: "Ám màu (burn-in), điểm chết, chảy mực, sọc hoặc đã thay màn hình lô" },
    ],
  },
  {
    id: "front_glass",
    label: "Kính mặt trước",
    icon: "🪟",
    desc: "Quan sát kỹ dưới ánh đèn, dùng móng tay kiểm tra vết gợn.",
    options: [
      { value: "perfect",     label: "Kính đẹp như mới, không trầy xước",          sub: "" },
      { value: "few",         label: "Có 1–3 vết trầy nhỏ",                         sub: "Vết xước mờ, không gợn móng tay" },
      { value: "many",        label: "Nhiều hơn 3 vết trầy xước",                   sub: "" },
      { value: "heavy",       label: "Trầy xước nặng",                              sub: "Nhìn thấy rõ hoặc thấy gợn móng tay" },
      { value: "cracked",     label: "Kính đã bị nứt hoặc vỡ",                     sub: "" },
    ],
  },
  {
    id: "back",
    label: "Mặt sau thiết bị",
    icon: "🔲",
    desc: "Lật mặt sau, kiểm tra kính, vỏ nhựa hoặc vỏ kim loại.",
    options: [
      { value: "perfect",      label: "Hoàn hảo, không trầy xước",            sub: "" },
      { value: "few_scratch",  label: "Có 1–3 vết trầy xước nhẹ",             sub: "" },
      { value: "many_scratch", label: "Trầy xước nhiều nơi (hơn 3 vết)",      sub: "" },
      { value: "heavy_dent",   label: "Trầy xước nặng hoặc có vết cấn móp",   sub: "Kính chưa vỡ" },
      { value: "cracked",      label: "Mặt lưng nứt, vỡ hoặc cấn móp nặng",  sub: "" },
    ],
  },
  {
    id: "frame",
    label: "Cạnh viền",
    icon: "🔳",
    desc: "Kiểm tra 4 cạnh viền xung quanh thiết bị.",
    options: [
      { value: "perfect",      label: "Không trầy xước",                          sub: "" },
      { value: "few_scratch",  label: "Có 1–3 vết trầy nhỏ",                      sub: "" },
      { value: "many_scratch", label: "Trầy xước nhiều (hơn 3 vết)",              sub: "" },
      { value: "cracked",      label: "Có vết nứt, vỡ hoặc cấn móp rõ ràng",     sub: "Chưa làm hở sườn" },
      { value: "deformed",     label: "Khung viền bị biến dạng nặng",             sub: "Nứt, vỡ, cấn móp làm hở sườn" },
    ],
  },
];

// ─── B. iPhone-specific ───────────────────────────────────────────────────────
const DYNAMIC_ISLAND_QUESTION: Question = {
  id: "dynamic_island",
  label: "Viền Dynamic Island",
  icon: "🫧",
  desc: "Nhìn vào vùng Dynamic Island, kiểm tra viền xung quanh.",
  options: [
    { value: "perfect", label: "Viền mượt, đều, bo tròn chuẩn xác", sub: "" },
    { value: "uneven",  label: "Viền hơi dày hoặc không đều nhẹ",   sub: "" },
    { value: "jagged",  label: "Viền răng cưa, gồ ghề, không tròn đều", sub: "" },
  ],
};

const PARTS_QUESTION: Question = {
  id: "parts",
  label: "Linh kiện & Lịch sử sửa chữa",
  icon: "🔩",
  desc: "Máy đã từng được sửa chữa hay thay linh kiện chưa?",
  options: [
    { value: "original",       label: "Nguyên bản — chưa từng sửa chữa",        sub: "" },
    { value: "genuine_repair", label: "Đã thay linh kiện chính hãng",             sub: "" },
    { value: "unknown_or_lot", label: "Linh kiện không xác định / đã thay màn hình lô / mất tính năng", sub: "" },
  ],
};

// ─── C. Foldable-specific ─────────────────────────────────────────────────────
const FOLDABLE_QUESTIONS: Question[] = [
  {
    id: "hinge",
    label: "Bản lề & Khả năng gập mở",
    icon: "📐",
    desc: "Gập mở máy nhiều lần, kiểm tra độ chắc và âm thanh của bản lề.",
    options: [
      { value: "perfect",     label: "Bản lề chắc chắn, mở phẳng 180°, không tiếng kêu lạ", sub: "" },
      { value: "loose_noisy", label: "Bản lề bị lỏng, quá cứng hoặc phát tiếng kêu",         sub: "" },
      { value: "stuck",       label: "Không thể mở phẳng, bản lề lệch hoặc kẹt cứng",        sub: "" },
    ],
  },
  {
    id: "fold_screens",
    label: "Màn hình chính & Màn hình phụ",
    icon: "🖥️",
    desc: "Kiểm tra cả hai màn hình: hiển thị, cảm ứng, không lỗi.",
    options: [
      { value: "perfect", label: "Cả hai màn hình hoàn hảo, cảm ứng mượt", sub: "" },
      { value: "broken",  label: "Một màn hình bị lỗi",                     sub: "Ám màu, đốm đen, sọc hoặc không cảm ứng được" },
    ],
  },
];

function buildQuestions(brandSlug: string, modelSlug: string): Question[] {
  const questions = [...COMMON_QUESTIONS];
  if (brandSlug === "apple") {
    if (DYNAMIC_ISLAND_MODELS.has(modelSlug)) questions.push(DYNAMIC_ISLAND_QUESTION);
    questions.push(PARTS_QUESTION);
  }
  if (isFoldableModel(modelSlug)) {
    questions.push(...FOLDABLE_QUESTIONS);
  }
  return questions;
}

// ─── Component ───────────────────────────────────────────────────────────────
function FunctionalityContent({ params }: { params: Promise<{ brand: string; modelSlug: string; storage: string }> }) {
  const { brand: brandSlug, modelSlug, storage } = use(params);
  const searchParams = useSearchParams();
  const battery = searchParams.get("battery") ?? "above87";

  const brand = getBrand(brandSlug);
  const model = slugToModelInBrand(brandSlug, modelSlug);
  const questions = buildQuestions(brandSlug, modelSlug);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const answeredCount = Object.keys(answers).length;
  const allDone = answeredCount === questions.length;

  const grade = allDone ? classifyCondition(battery, answers) : null;
  const gradeInfo = grade ? GRADE_CONFIG[grade] : null;
  const price = grade ? getBuyBackPrice(brandSlug, modelSlug, storage, grade) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <a href={`/sell/${brandSlug}/model`} className="hover:text-green-500">{brand?.name}</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/${brandSlug}/${modelSlug}/memory`} className="hover:text-green-500">Bộ nhớ</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/${brandSlug}/${modelSlug}/${storage}/battery`} className="hover:text-green-500">Pin</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Tình trạng</span>
        </div>
      </div>

      <SellProgress current={3} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <a
          href={`/sell/${brandSlug}/${modelSlug}/${storage}/battery`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </a>

        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-green-500">
          <span>{model?.name ?? modelSlug}</span>
          <span className="text-gray-300">·</span>
          <span>{storageLabel(storage)}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">Kiểm tra tình trạng máy</h1>
        <p className="text-gray-500 mb-2">
          Trả lời {questions.length} câu hỏi — câu trả lời xác định tình trạng và giá thu mua.
        </p>

        {/* Mini progress */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 bg-gray-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 shrink-0">{answeredCount}/{questions.length}</span>
        </div>

        <div className="space-y-5 mb-8">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border-2 p-5 transition-all ${answers[q.id] ? "border-green-200" : "border-gray-100"}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{q.icon}</span>
                <span className="font-bold text-gray-900">{q.label}</span>
                {answers[q.id] && (
                  <span className="ml-auto w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-3">{q.desc}</p>
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      answers[q.id] === opt.value
                        ? "border-green-400 bg-green-50 shadow-sm"
                        : "border-gray-100 hover:border-green-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className={`shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      answers[q.id] === opt.value ? "border-green-500 bg-green-500" : "border-gray-300"
                    }`}>
                      {answers[q.id] === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{opt.label}</div>
                      {opt.sub && <div className="text-xs text-gray-400">{opt.sub}</div>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Kết quả — chỉ hiện sau khi trả lời hết */}
        {allDone && grade && gradeInfo ? (
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{gradeInfo.emoji}</span>
              <div className="flex-1">
                <div className="text-green-100 text-xs">Tình trạng máy của bạn</div>
                <div className="font-extrabold text-xl">{gradeInfo.badge}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-green-100 text-xs">Giá thu mua</div>
                <div className="text-3xl font-extrabold">{formatPrice(price)}</div>
              </div>
            </div>
            <div className="bg-white/15 rounded-xl px-4 py-2 text-green-100 text-xs mb-5">
              {gradeInfo.desc} · {model?.name} · {storageLabel(storage)}
            </div>
            <p className="text-green-100 text-sm mb-5">
              Giá cuối xác nhận sau khi nhận máy. Cam kết không thấp hơn 10% so với báo giá này.
            </p>
            <a
              href={`/sell/${brandSlug}/${modelSlug}/${storage}/quote?battery=${battery}&grade=${grade}&price=${price}`}
              className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-7 py-3 rounded-full hover:bg-green-50 transition-all shadow"
            >
              Xem báo giá chi tiết <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="bg-white border border-dashed border-green-200 rounded-2xl p-5 text-center text-gray-400">
            <div className="text-2xl mb-2">🔍</div>
            <div className="text-sm">Trả lời tất cả câu hỏi để xem tình trạng và giá thu mua</div>
            <div className="text-xs mt-1">Còn {questions.length - answeredCount} câu hỏi</div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function FunctionalityPage({ params }: { params: Promise<{ brand: string; modelSlug: string; storage: string }> }) {
  return <Suspense><FunctionalityContent params={params} /></Suspense>;
}
