// app/projects/page.jsx
import Image from "next/image";

const projects = [
  {
    title: "منصة تجارة إلكترونية",
    image: "/img/Screenshot 2025-08-01 122258.png",
    description: "منصة متكاملة لبيع المنتجات تشمل سلة الشراء، الدفع، وتسجيل الدخول.",
    link: "https://natsah-ashop.vercel.app/"
  },
  {
    title: "موقع معرض سيارات ",
    image: "/img/Screenshot 2025-08-01 121933.png",
    description: "موقع تعريفي لشركة خدمات برمجية يعرض الخدمات وفريق العمل.",
    link: "https://auto-market-umber.vercel.app/"
  },
  {
    title: "موقع العاب فديوا ",
    image: "/img/Screenshot 2025-08-01 121352.png",
    description: "واجهة لوحة تحكم لإدارة المستخدمين والمحتوى وتحليل البيانات.",
    link: "https://game-verse-five.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen px-4 py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">أعمالنا السابقة</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1f1b3a] p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a href={project.link} className="inline-block mt-4 text-sm text-blue-300 hover:underline">
                عرض المشروع
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
