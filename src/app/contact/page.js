"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تبعت البيانات لـ API أو Formspree أو بريدك
    console.log(formData);
    alert("تم إرسال رسالتك بنجاح 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          تواصل معنا
        </h2>
        <p className="text-center text-gray-300 mb-12">
          نحن هنا للإجابة على أي استفسار أو اقتراح. لا تتردد في مراسلتنا!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* بيانات التواصل */}
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1">البريد الإلكتروني</h3>
              <p className="text-sm">webika@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1">رقم الواتساب</h3>
              <p className="text-sm">+201234567890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1">العنوان</h3>
              <p className="text-sm">القاهرة، مصر</p>
            </div>
          </div>

          {/* نموذج التواصل */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#1f1b3a] text-white rounded-xl outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#1f1b3a] text-white rounded-xl outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="اكتب رسالتك هنا..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#1f1b3a] text-white rounded-xl outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
