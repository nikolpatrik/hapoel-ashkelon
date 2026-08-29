"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header dir="rtl" className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[110px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-4" aria-label="העמותה לקידום הספורט באשקלון">
          <div className="flex items-center gap-4 rtl:flex-row-reverse">
            <Image src="/logo.png" alt="העמותה לקידום הספורט באשקלון" width={380} height={140} priority className="h-[100px] w-auto object-contain" />
            <div className="hidden flex-col border-l border-gray-200 pl-4 leading-tight md:flex">
              <div className="whitespace-nowrap text-2xl font-extrabold text-[#0b2234] md:text-3xl">העמותה לקידום<br />הספורט באשקלון</div>
              <div className="mt-1 text-sm font-medium text-gray-600">בית למצוינות • קהילה • ספורט</div>
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-[16px] font-semibold md:flex">
          <Link href="/" className="text-gray-800 hover:text-[#16b6b4]">ראשי</Link>
          <Link href="/fencing" className="text-gray-800 hover:text-[#16b6b4]">סייף</Link>
          <Link href="/boxing" className="text-gray-800 hover:text-[#16b6b4]">אגרוף</Link>
          <Link href="/rugby" className="text-gray-800 hover:text-[#16b6b4]">רוגבי</Link>
          <Link href="/table-tennis" className="text-gray-800 hover:text-[#16b6b4]">טניס שולחן</Link>
          <Link href="/#about" className="text-gray-800 hover:text-[#16b6b4]">אודות</Link>
          <Link href="/leave-details" className="text-gray-800 hover:text-[#16b6b4]">השאירו פרטים</Link>
        </nav>
        <Link href="/leave-details" className="hidden items-center justify-center whitespace-nowrap rounded-full bg-[#16b6b4] px-7 py-3 text-[16px] font-bold text-white shadow-md hover:bg-[#129d9b] md:inline-flex">דברו איתנו</Link>
      </div>
      <div className="border-t border-gray-100 md:hidden">
        <nav className="flex flex-wrap items-center justify-around gap-3 px-4 py-3 text-[14px] font-semibold">
          <Link href="/">ראשי</Link><Link href="/fencing">סייף</Link><Link href="/boxing">אגרוף</Link><Link href="/rugby">רוגבי</Link><Link href="/table-tennis">טניס שולחן</Link><Link href="/leave-details">השאירו פרטים</Link>
        </nav>
      </div>
    </header>
  );
}
