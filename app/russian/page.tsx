import Link from "next/link";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

const sports = [
  { title: "Фехтование", href: "/russian/fencing", image: "fencing-logo.png", icon: "🤺", description: "Тренировки, соревнования и развитие юных спортсменов в профессиональной среде." },
  { title: "Бокс", href: "/russian/boxing", image: "boxing-logo.png", icon: "🥊", description: "Дисциплина, физическая форма, уверенность в себе и стремление к высоким результатам." },
  { title: "Настольный теннис", href: "/russian/table-tennis", image: "logo.png", icon: "🏓", description: "Соревновательный и увлекательный вид спорта для разных возрастов." },
  { title: "Регби", href: "/russian/rugby", image: "logo-rugby.png", icon: "🏉", description: "Командная работа, сила, настойчивость и спортивный дух." },
];

export default function RussianPage() {
  return (
    <main dir="ltr" className="min-h-screen bg-[#F5F7FA] text-[#17263d]">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/russian" className="flex items-center gap-4">
            <img src={`${RAW}logo.png`} alt="Спортивная ассоциация Ашкелона" className="h-16 w-auto" />
            <div>
              <div className="text-xl font-black text-[#102f47]">Спортивная ассоциация Ашкелона</div>
              <div className="text-xs text-slate-500">Спорт • Сообщество • Совершенство</div>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center gap-5 font-semibold">
            <Link href="/russian">Главная</Link>
            <a href="/" className="text-[#18b6b4]">עברית</a>
            <a href="/english" className="text-[#18b6b4]">English</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[28px] border-white/10" />
        <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full border-[28px] border-white/10" />
        <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-[#18b6b4]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-36">
          <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold">Спортивная ассоциация Ашкелона</div>
          <h1 className="text-4xl font-black leading-tight md:text-7xl">Спорт в Ашкелоне<br /><span className="text-[#7ee7e5]">Давайте начнём побеждать</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">Мы развиваем спорт, совершенство и сообщество в Ашкелоне.<br />Объединяем спортсменов, тренеров и спортивные клубы города.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="#sports" className="inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47] transition hover:bg-slate-100">Наши виды спорта</a><a href="/russian/leave-details" className="inline-flex rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20">Пробная тренировка / Присоединиться</a></div>
        </div>
      </section>

      <section className="relative -mt-10 px-6"><div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3"><Stat value="4" label="Активных видов спорта" /><Stat value="Ашкелон" label="Спортсмены, представляющие город" /><Stat value="Совершенство" label="Сообщество • Спорт • Достижения" /></div></section>

      <section id="sports" className="px-6 py-24"><div className="mx-auto max-w-7xl"><div className="text-center"><span className="text-sm font-bold text-[#18b6b4]">НАШИ ВИДЫ СПОРТА</span><h2 className="mt-3 text-3xl font-black text-[#102f47] md:text-5xl">Наши спортивные направления</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">Выберите интересующий вас вид спорта и получите всю информацию о деятельности, тренерах и тренировках.</p></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{sports.map((sport) => (<a key={sport.href} href={sport.href} className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"><div className="flex h-52 w-full items-center justify-center bg-[#f5f7fa] p-6"><img src={`${RAW}${sport.image}`} alt={sport.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" /></div><div className="p-7"><div className="text-2xl">{sport.icon}</div><h3 className="mt-2 text-2xl font-black text-[#102f47]">{sport.title}</h3><p className="mt-3 leading-7 text-slate-500">{sport.description}</p><div className="mt-6 font-bold text-[#18b6b4]">Подробнее →</div></div></a>))}</div></div></section>

      <section id="about" className="bg-[#102f47] px-6 py-24 text-white"><div className="mx-auto max-w-6xl text-center"><span className="text-sm font-bold text-[#7ee7e5]">О НАС</span><h2 className="mt-3 text-3xl font-black md:text-5xl">Спортивная организация, представляющая Ашкелон</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-300">Спортивная ассоциация Ашкелона развивает спортивные клубы и спортивную деятельность в городе. Спортсмены и команды представляют Ашкелон, а лучшие из них входят в сборные Израиля и участвуют в международных соревнованиях.</p><a href="/russian/about" className="mt-8 inline-flex rounded-full border border-white/30 px-8 py-4 font-bold hover:bg-white/10">Подробнее об ассоциации</a></div></section>

      <section className="px-6 py-24"><div className="mx-auto max-w-6xl rounded-[32px] bg-white p-9 text-center shadow-xl md:p-14"><span className="text-sm font-bold text-[#18b6b4]">НАШИ ПАРТНЁРЫ</span><h2 className="mt-3 text-3xl font-black text-[#102f47]">Центр спортивной медицины</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">Сотрудничество для продвижения здоровья и безопасности спортсменов.</p></div></section>

      <section id="contact" className="px-6 pb-24"><div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-10 text-center shadow-xl md:p-16"><h2 className="text-3xl font-black text-[#102f47] md:text-4xl">Хотите стать частью команды?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">Хотите присоединиться к тренировкам, прийти на пробное занятие или получить дополнительную информацию? Оставьте свои данные или свяжитесь с нами напрямую.</p><div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/russian/leave-details" className="inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold text-white transition hover:bg-[#129da0]">Оставить данные</a><a href="https://wa.me/972526781740" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border-2 border-[#18b6b4] px-8 py-4 font-bold text-[#102f47] transition hover:bg-[#18b6b4]/10">WhatsApp · Николь</a></div><div className="mt-7 text-sm text-slate-500"><span>Николь · </span><a href="tel:0526781740" className="font-bold text-[#18b6b4] hover:underline" dir="ltr">052-6781740</a><span className="mx-2">·</span><a href="https://wa.me/972526781740" target="_blank" rel="noopener noreferrer" className="font-bold text-[#18b6b4] hover:underline">WhatsApp</a></div></div></section>

      <footer className="bg-[#0b2234] px-6 py-10 text-center text-white"><div className="font-black">Спортивная ассоциация Ашкелона</div><div className="mt-2 text-sm text-slate-400">Спорт. Сообщество. Совершенство.</div><div className="mt-5 flex flex-wrap justify-center gap-5 text-sm text-slate-400"><Link href="/russian/about">Об ассоциации</Link><Link href="/russian/legacy">Наследие и память</Link><Link href="/russian/join-terms">Условия участия</Link><a href="/" >עברית</a><a href="/english">English</a></div><div className="mt-5 text-xs text-slate-500">© {new Date().getFullYear()} Все права защищены</div></footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="rounded-3xl bg-white p-8 text-center shadow-xl"><div className="text-4xl font-black text-[#18b6b4]">{value}</div><div className="mt-2 font-bold text-[#102f47]">{label}</div></div>; }
