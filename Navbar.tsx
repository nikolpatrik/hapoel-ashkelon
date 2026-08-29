"use client";

import Image from "next/image";
import Link from "next/link";

const sports = [
  { href: "/fencing", label: "סייף", icon: "🤺" },
  { href: "/boxing", label: "אגרוף", icon: "🥊" },
  { href: "/table-tennis", label: "טניס שולחן", icon: "🏓" },
  { href: "/rugby", label: "רוגבי", icon: "🏉" },
];

export default function Navbar() {
  return (
    <header dir="rtl" className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[110px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-4" aria-label="העמותה לקידום הספורט באשקלון">
          <div className="flex items-center gap-4 rtl:flex-row-reverse">
            <Image src="https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/logo.png" alt="העמותה לקידום הספורט באשקלון" width={380} height={140} priority className="h-[100px] w-auto object-contain" />
            <div className="hidden flex-col border-l border-gray-200 pl-4 leading-tight md:flex">
              <div className="whitespace-nowrap text-2xl font-extrabold text-[#0b2234] md:text-3xl">העמותה לקידום<br />הספורט באשקלון</div>
              <div className="mt-1 text-sm font-medium text-gray-600">בית למצוינות • קהילה • ספורט</div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-[16px] font-semibold md:flex">
          <Link href="/" className="text-gray-800 hover:text-[#16b6b4]">ראשי</Link>

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-gray-800 hover:text-[#16b6b4] [&::-webkit-details-marker]:hidden">
              ענפי ספורט <span className="text-xs transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="absolute right-0 top-full mt-4 w-52 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
              {sports.map((sport) => (
                <Link key={sport.href} href={sport.href} className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-800 transition hover:bg-[#18b6b4]/10 hover:text-[#129d9b]">
                  <span className="text-xl">{sport.icon}</span>
                  <span>{sport.label}</span>
                </Link>
              ))}
            </div>
          </details>

          <Link href="/#about" className="text-gray-800 hover:text-[#16b6b4]">אודות</Link>
          <Link href="/leave-details" className="text-gray-800 hover:text-[#16b6b4]">השאירו פרטים</Link>
        </nav>

        <Link href="/leave-details" className="hidden items-center justify-center whitespace-nowrap rounded-full bg-[#16b6b4] px-7 py-3 text-[16px] font-bold text-white shadow-md hover:bg-[#129d9b] md:inline-flex">דברו איתנו</Link>
      </div>

      <div className="border-t border-gray-100 md:hidden">
        <nav className="flex items-center justify-around gap-3 px-4 py-3 text-[14px] font-semibold">
          <Link href="/">ראשי</Link>
          <details className="relative">
            <summary className="cursor-pointer list-none font-semibold [&::-webkit-details-marker]:hidden">ענפי ספורט ⌄</summary>
            <div className="absolute right-1/2 top-full z-50 mt-3 w-48 translate-x-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 text-right shadow-xl">
              {sports.map((sport) => (
                <Link key={sport.href} href={sport.href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-gray-800 hover:bg-[#18b6b4]/10">
                  <span>{sport.icon}</span>
                  <span>{sport.label}</span>
                </Link>
              ))}
            </div>
          </details>
          <Link href="/#about">אודות</Link>
          <Link href="/leave-details">השאירו פרטים</Link>
        </nav>
      </div>
    </header>
  );
}
