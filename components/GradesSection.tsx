import { grades } from "@/lib/data";
import Reveal from "./Reveal";

export default function GradesSection() {
  return (
    <section className="py-20 bg-gray-50" id="grades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Phân loại chất lượng nghĩa là gì?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Giá thu mua phụ thuộc vào tình trạng máy. Hãy chọn đúng để nhận báo giá chính xác nhất.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {grades.map((grade, i) => (
            <Reveal key={grade.name} variant="up" delay={i * 100}>
              <div className={`rounded-2xl border-2 p-6 hover:scale-[1.02] transition-all duration-300 ${grade.color}`}>
                <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-4 ${grade.labelColor}`}>
                  {grade.icon} {grade.name}
                </span>
                <p className="text-gray-700 text-base mb-4">{grade.description}</p>
                <div className="flex gap-1">
                  {["màn hình", "thân máy", "pin", "camera"].map((part) => (
                    <div key={part} className="flex-1 text-center">
                      <div className={`h-1.5 rounded-full mb-1 ${
                        grade.name === "Xuất sắc" ? "bg-green-500" :
                        grade.name === "Tốt" ? "bg-green-400" : "bg-yellow-400"
                      }`} />
                      <span className="text-xs text-gray-400">{part}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
