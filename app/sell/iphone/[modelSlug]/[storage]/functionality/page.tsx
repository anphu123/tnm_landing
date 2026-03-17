"use client";
import { useState, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellProgress from "@/components/SellProgress";
import { slugToModel, storageLabel, calculatePrice, formatPrice } from "@/lib/sellUtils";
import { ArrowLeft, ChevronRight } from "lucide-react";

const questions = [
  {
    id: "screen",
    label: "Màn hình",
    icon: "📱",
    desc: "Kiểm tra màn hình khi hiển thị nội dung sáng (hình nền trắng).",
    options: [
      { value: "perfect", label: "Hoàn hảo", sub: "Không có vết xước, điểm chết, hay đốm sáng" },
      { value: "minor_scratch", label: "Xước nhỏ", sub: "Vài vết xước nhỏ không ảnh hưởng sử dụng" },
      { value: "cracked", label: "Nứt / Vỡ", sub: "Màn hình nứt, vỡ hoặc có điểm chết" },
    ],
  },
  {
    id: "body",
    label: "Thân máy & khung viền",
    icon: "🔲",
    desc: "Kiểm tra mặt sau và khung viền xung quanh máy.",
    options: [
      { value: "perfect", label: "Hoàn hảo", sub: "Không có vết xước hay móp méo" },
      { value: "minor_scratch", label: "Xước nhỏ", sub: "Vài vết xước nhỏ trên thân hoặc viền" },
      { value: "dented", label: "Móp / Trầy nặng", sub: "Có vết móp hoặc trầy xước rõ ràng" },
    ],
  },
  {
    id: "faceid",
    label: "Face ID / Touch ID",
    icon: "🔐",
    desc: "Mở khóa bằng khuôn mặt hoặc vân tay.",
    options: [
      { value: "works", label: "Hoạt động bình thường", sub: "Nhận diện nhanh, không lỗi" },
      { value: "broken", label: "Không hoạt động", sub: "Không nhận diện được hoặc báo lỗi" },
      { value: "na", label: "Không áp dụng", sub: "Model này không có tính năng này" },
    ],
  },
  {
    id: "camera",
    label: "Camera",
    icon: "📷",
    desc: "Chụp thử vài tấm ảnh để kiểm tra.",
    options: [
      { value: "works", label: "Hoạt động bình thường", sub: "Ảnh rõ nét, không bị mờ hay lỗi" },
      { value: "blurry", label: "Camera bị mờ", sub: "Ảnh mờ do kính camera vỡ hoặc cảm biến lỗi" },
      { value: "broken", label: "Không hoạt động", sub: "Không mở được camera hoặc màn hình đen" },
    ],
  },
  {
    id: "charging",
    label: "Sạc & kết nối",
    icon: "🔌",
    desc: "Cắm cáp sạc vào máy để kiểm tra.",
    options: [
      { value: "works", label: "Sạc bình thường", sub: "Cắm vào là sạc ngay, không bị lỏng" },
      { value: "loose", label: "Hơi lỏng cổng", sub: "Cần giữ dây mới sạc được" },
      { value: "broken", label: "Không sạc được", sub: "Cắm vào không nhận hoặc không sạc" },
    ],
  },
  {
    id: "activation",
    label: "Kích hoạt & tài khoản",
    icon: "🔓",
    desc: "Máy có bị khoá tài khoản iCloud không?",
    options: [
      { value: "unlocked", label: "Đã tắt Tìm iPhone", sub: "Máy sẵn sàng cho người mua mới" },
      { value: "locked", label: "Vẫn còn iCloud", sub: "Máy đang đăng nhập iCloud của bạn" },
      { value: "activation_lock", label: "Khoá kích hoạt", sub: "Máy yêu cầu nhập Apple ID cũ" },
    ],
  },
];

// Map issues to deduction keys
const issueMap: Record<string, Record<string, string[]>> = {
  screen: { cracked: ["screen_cracked"], minor_scratch: [] },
  faceid: { broken: ["faceid_broken"] },
  camera: { broken: ["camera_broken"], blurry: ["camera_broken"] },
  charging: { broken: ["charging_broken"] },
};

function FunctionalityContent() {
  const rawParams = useParams();
  const modelSlug = rawParams.modelSlug as string;
  const storage = rawParams.storage as string;
  const searchParams = useSearchParams();
  const battery = searchParams.get("battery") ?? "80-90";

  const model = slugToModel(modelSlug);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const answeredCount = Object.keys(answers).length;
  const allDone = answeredCount === questions.length;

  // Compute issues from answers
  const issues: string[] = [];
  for (const [qId, answer] of Object.entries(answers)) {
    const mapping = issueMap[qId]?.[answer];
    if (mapping) issues.push(...mapping);
  }

  const price = allDone ? calculatePrice(modelSlug, storage, battery, issues) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/sell/iphone/model" className="hover:text-green-500">Model</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/iphone/${modelSlug}/memory`} className="hover:text-green-500">Bộ nhớ</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/sell/iphone/${modelSlug}/${storage}/battery`} className="hover:text-green-500">Pin</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium">Chức năng</span>
        </div>
      </div>

      <SellProgress current={3} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <a
          href={`/sell/iphone/${modelSlug}/${storage}/battery`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </a>

        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-green-500">
          <span>{model?.name ?? modelSlug}</span>
          <span className="text-gray-300">·</span>
          <span>{storageLabel(storage)}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
          Kiểm tra chức năng
        </h1>
        <p className="text-gray-500 mb-2">
          Trả lời {questions.length} câu hỏi để nhận báo giá chính xác nhất.
        </p>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 bg-gray-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 shrink-0">{answeredCount}/{questions.length}</span>
        </div>

        {/* Câu hỏi */}
        <div className="space-y-5 mb-8">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border-2 p-5 transition-all ${
                answers[q.id] ? "border-green-200" : "border-gray-100"
              }`}
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
                      {answers[q.id] === opt.value && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{opt.label}</div>
                      <div className="text-xs text-gray-400">{opt.sub}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Báo giá live */}
        {allDone && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-green-100 text-sm mb-1">Báo giá ước tính</div>
                <div className="text-4xl font-extrabold">{formatPrice(price)}</div>
                <div className="text-green-100 text-xs mt-1">
                  {model?.name} · {storageLabel(storage)}
                </div>
              </div>
              <span className="text-4xl">💰</span>
            </div>
            <p className="text-green-100 text-sm mb-5">
              Giá cuối cùng được xác nhận sau khi chúng tôi nhận và kiểm tra máy. Cam kết không thấp hơn 10% so với báo giá này.
            </p>
            <a
              href={`/sell/iphone/${modelSlug}/${storage}/quote?battery=${battery}&price=${price}`}
              className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-7 py-3 rounded-full hover:bg-green-50 transition-all shadow"
            >
              Xem báo giá chi tiết <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {!allDone && (
          <div className="bg-white border border-dashed border-green-200 rounded-2xl p-5 text-center text-gray-400">
            <div className="text-2xl mb-2">🔍</div>
            <div className="text-sm">Trả lời tất cả câu hỏi để xem báo giá của bạn</div>
            <div className="text-xs mt-1">Còn {questions.length - answeredCount} câu hỏi</div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function FunctionalityPage() {
  return (
    <Suspense>
      <FunctionalityContent />
    </Suspense>
  );
}
