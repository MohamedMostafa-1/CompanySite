// app/about/page.js
"use client";
import Image from "next/image";
import Teamwork from "../../../public/img/teamwork.png"; // ضع صورة مناسبة في هذا المسار

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-20">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          من نحن
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          نحن في <span className="text-blue-400 font-semibold">واقعك</span> نُقدّم حلولاً رقمية متكاملة تدعم طموحاتك التقنية، ونساعدك في بناء مستقبل رقمي متطور بثقة واحترافية.
        </p>
      </section>

      {/* صورة + نبذة */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image src={Teamwork} alt="من نحن" width={500} height={500} className="rounded-xl" />
        <div>
          <h2 className="text-2xl font-semibold mb-4">رؤيتنا</h2>
          <p className="text-gray-300 mb-4">
            أن نكون الشريك الرقمي الأول للشركات ورواد الأعمال في العالم العربي، من خلال حلول ذكية ومبتكرة.
          </p>
          <h2 className="text-2xl font-semibold mb-4">رسالتنا</h2>
          <p className="text-gray-300">
            تقديم خدمات برمجية عالية الجودة تساعد عملاءنا على التميز في السوق وتحقيق أهدافهم بأحدث الوسائل التقنية.
          </p>
        </div>
      </section>

      {/* المميزات */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">لماذا نحن؟</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "خبرة قوية", desc: "فريق عمل ذو خبرة عالية في تطوير البرمجيات وتصميم الحلول التقنية." },
            { title: "دعم فني دائم", desc: "نوفّر دعمًا فنيًا مستمرًا لضمان أفضل تجربة لعملائنا." },
            { title: "حلول مخصصة", desc: "نُصمم الحلول حسب احتياجات كل عميل." },
          ].map((item, i) => (
            <div key={i} className="bg-[#1f1b3a] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
