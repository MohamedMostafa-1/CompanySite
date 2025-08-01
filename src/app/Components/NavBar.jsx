// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logoimge from "../../../public/img/تصميم_بدون_عنوان-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full fixed top-4 z-50 flex justify-center px-4">
      <nav className="backdrop-blur-md bg-white/10 border border-white/20 text-white w-full max-w-5xl rounded-full shadow-md px-6 py-3 flex items-center justify-between">
        {/* الشعار */}
        <Link href="/" className="w-10 flex hover:text-shadow-amber-50">
            <Image src={Logoimge} alt="" />
        </Link>

        {/* روابط الديسكتوب */}
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
          <Link href="/" className="hover:text-blue-400 transition">الرئيسية</Link>
          <Link href="/about" className="hover:text-blue-400 transition">من نحن</Link>
          <Link href="/services" className="hover:text-blue-400 transition">الخدمات</Link>
          <Link href="/portfolio" className="hover:text-blue-400 transition">مشاريعنا</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">تواصل معنا</Link>
        </div>

        {/* زر الموبايل */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div className="md:hidden absolute top-20 w-full max-w-5xl backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-4 mt-2 text-white flex flex-col items-center space-y-2">
          <Link href="/" onClick={toggleMenu}>الرئيسية</Link>
          <Link href="/about" onClick={toggleMenu}>من نحن</Link>
          <Link href="/services" onClick={toggleMenu}>الخدمات</Link>
          <Link href="/portfolio" onClick={toggleMenu}>مشاريعنا</Link>
          <Link href="/contact" onClick={toggleMenu}>تواصل معنا</Link>
        </div>
      )}
    </div>
  );
}
