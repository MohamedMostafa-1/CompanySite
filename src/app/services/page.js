// app/services/page.jsx أو page.tsx لو بتستخدم TypeScript
import Image from "next/image";

export default function Services() {
  return (
    <section className="min-h-screen px-4 py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white  mb-12">خدماتنا</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "تطوير المواقع", desc: "نقوم ببناء مواقع ويب سريعة، متجاوبة وآمنة باستخدام أحدث التقنيات." },
            { title: "تصميم واجهات المستخدم", desc: "تصاميم عصرية وسهلة الاستخدام لتحسين تجربة المستخدم." },
            { title: "حلول برمجية مخصصة", desc: "نقوم بتطوير حلول برمجية تلبي احتياجات عملك تحديدًا." },
            { title: "تحليل البيانات", desc: "نحلل بياناتك ونوفر لك رؤى تساعدك في اتخاذ القرار." },
            { title: "الذكاء الاصطناعي", desc: "نُدمج تقنيات الذكاء الاصطناعي لتعزيز الأداء والكفاءة." },
            { title: "الاستشارات التقنية", desc: "نساعدك في التخطيط، والتنفيذ، وتطوير المشاريع التقنية." }
          ].map((service, i) => (
            <div key={i} className="bg-[#1f1b3a] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
