"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-[110px] max-w-7xl items-center justify-between px-6">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-4"
          aria-label="העמותה לקידום הספורט באשקלון"
        >
          <div className="flex items-center gap-4 rtl:flex-row-reverse">

            <Image
              src="/logo.png"
              alt="העמותה לקידום הספורט באשקלון"
              width={380}
              height={140}
              priority
              className="h-[100px] w-auto object-contain"
            />

            <div className="hidden flex-col border-l border-gray-200 pl-4 leading-tight md:flex">

              <div className="whitespace-nowrap text-2xl font-extrabold text-[#0b2234] md:text-3xl">
                העמותה לקידום
                <br />
                הספורט באשקלון
              </div>

              <div className="mt-1 text-sm font-medium text-gray-600">
                בית למצוינות • קהילה • ספורט
              </div>

            </div>

          </div>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden items-center gap-10 text-[16px] font-semibold md:flex">

          <Link
            href="/"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            ראשי
          </Link>

          <Link
            href="/#sports"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            ענפי ספורט
          </Link>

          <Link
            href="/#about"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            אודות
          </Link>

          <Link
            href="/#contact"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            צור קשר
          </Link>

        </nav>


        {/* ================= TOP CTA ================= */}
        <Link
          href="/#contact"
          className="hidden items-center justify-center whitespace-nowrap rounded-full bg-[#16b6b4] px-7 py-3 text-[16px] font-bold text-white shadow-md transition-all duration-200 hover:bg-[#129d9b] hover:shadow-lg md:inline-flex"
        >
          דברו איתנו
        </Link>

      </div>


      {/* ================= MOBILE NAVIGATION ================= */}
      <div className="border-t border-gray-100 md:hidden">

        <nav className="flex items-center justify-around px-4 py-3 text-[14px] font-semibold">

          <Link
            href="/"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            ראשי
          </Link>

          <Link
            href="/#sports"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            ענפי ספורט
          </Link>

          <Link
            href="/#about"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            אודות
          </Link>

          <Link
            href="/#contact"
            className="text-gray-800 transition-colors duration-200 hover:text-[#16b6b4]"
          >
            צור קשר
          </Link>

        </nav>

      </div>

    </header>
  );
}