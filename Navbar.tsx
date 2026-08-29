"use client";

import Link from "next/link";

const sports = [
  { href: "/fencing", label: "סייף", icon: "🤺" },
  { href: "/boxing", label: "אגרוף", icon: "🥊" },
  { href: "/table-tennis", label: "טניס שולחן", icon: "🏓" },
  { href: "/rugby", label: "רוגבי", icon: "🏉" },
];

const infoLinks = [
  { href: "/about", label: "אודות העמותה" },
  { href: "/legacy", label: "מורשת והנצחה" },
  { href: "/join-terms", label: "תנאי הצטרפות" },
];

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

export default function Navbar() {
  return (
    <header dir="rtl" className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[92px] max-w-7xl items-center justify-between gap-5 px-5 md:min-h-[105px] md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3"><img src={`${RAW}logo.png`} alt="העמותה לקידום הספורט באשקלון" className="h-[72px] w-auto object-contain md:h-[92px]" /><div className="hidden border-r border-gray-200 pr-4 leading-tight md:block"><div className="whitespace-nowrap text-xl font-extrabold text-[#0b2234] lg:text-2xl">העמותה לקידום<br />הספורט באשקלון</div><div className="mt-1 text-xs font-medium text-gray-500">בית למצוינות • קהילה • ספורט</div></div></Link>
        <nav className="hidden items-center gap-7 text-[15px] font-semibold lg:flex"><Link href="/">ראשי</Link><details className="group relative"><summary className="flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">ענפי ספורט <span className="text-xs">⌄</span></summary><div className="absolute right-0 top-full mt-4 w-56 overflow-hidden rounded-2xl border bg-white p-2 shadow-xl">{sports.map(s => <Link key={s.href} href={s.href} className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-[#18b6b4]/10"><span className="text-xl">{s.icon}</span>{s.label}</Link>)}</div></details><details className="group relative"><summary className="flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">מידע <span className="text-xs">⌄</span></summary><div className="absolute right-0 top-full mt-4 w-56 overflow-hidden rounded-2xl border bg-white p-2 shadow-xl">{infoLinks.map(i => <Link key={i.href} href={i.href} className="block rounded-xl px-4 py-3 hover:bg-[#18b6b4]/10">{i.label}</Link>)}</div></details><Link href="/#contact">צור קשר</Link><a href="/english" target="_blank" rel="noopener noreferrer" className="font-bold text-[#18b6b4]">English</a><a href="/russian" target="_blank" rel="noopener noreferrer" className="font-bold text-[#18b6b4]">Русский</a></nav>
        <Link href="/leave-details" className="hidden whitespace-nowrap rounded-full bg-[#16b6b4] px-6 py-3 text-[15px] font-bold text-white shadow-md lg:inline-flex">שיעור ניסיון / הצטרפות</Link>
      </div>
      <div className="border-t border-gray-100 lg:hidden"><nav className="flex items-center justify-around gap-2 px-3 py-3 text-[13px] font-semibold"><Link href="/">ראשי</Link><details className="relative"><summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">ענפי ספורט ⌄</summary><div className="absolute right-1/2 top-full z-50 mt-3 w-48 translate-x-1/2 overflow-hidden rounded-2xl border bg-white p-2 text-right shadow-xl">{sports.map(s => <Link key={s.href} href={s.href} className="flex items-center gap-3 rounded-xl px-3 py-3"><span>{s.icon}</span>{s.label}</Link>)}</div></details><Link href="/about">אודות</Link><a href="/english" target="_blank" rel="noopener noreferrer">EN</a><a href="/russian" target="_blank" rel="noopener noreferrer">RU</a><Link href="/leave-details">הצטרפות</Link></nav></div>
    </header>
  );
}
