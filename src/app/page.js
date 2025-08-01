// app/page.js
"use client";
import Image from "next/image";
// import { Button } from "./components/ui/button";
import Logo from "../../public/img/WhatsApp Image 2025-08-01 at 02.23.49_693d05b2.jpg"; // تأكد من وجود اللوجو

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
  
      {/* اللوجو */}
      <Image src={Logo} alt="واقعك" width={200} height={120} className="mb-4 rounded-3xl z-10 " />

      {/* عنوان رئيسي */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        نُقربك من <span className="text-blue-400">واقعك الرقمي</span>
      </h1>

      {/* وصف مختصر */}
      <p className="text-lg md:text-xl text-center max-w-xl mb-6">
        شركة برمجيات تقدم حلولًا تقنية متكاملة تساعدك في بناء مستقبلك الرقمي بثقة واحترافية.
      </p>

      {/* زر CTA */}
      {/* <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-full shadow-lg transition">
        تواصل معنا الآن
      </Button> */}
    </main>
  );
}
