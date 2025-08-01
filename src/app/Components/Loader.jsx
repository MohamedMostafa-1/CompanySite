// components/Loader.js
"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed w-full inset-0 z-[9999] bg-[#ffff] flex items-center justify-center">
      <video
        src="/img/loader.mp4" // ✅ الصحيح
        autoPlay
        muted
        playsInline
        className="w-[700px] h-40 rounded-xl  z-20"
      />
    </div>
  );
}
