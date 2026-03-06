import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { motion, AnimatePresence } from "framer-motion"

const brands = [
  {
    name: "Volvo Penta",
    short: "VP",
    type: "Стационарные",
    note: "3.0–8.1 л, серии GL/GS/GXi/DP",
    popular: true,
  },
  {
    name: "Mercruiser",
    short: "MC",
    type: "Стационарные",
    note: "3.0–8.2 л, серии Alpha, Bravo, Mag",
    popular: true,
  },
  {
    name: "Indmar",
    short: "IN",
    type: "Стационарные",
    note: "На базе GM (5.7, 6.0, 6.2, 8.1 л)",
    popular: false,
  },
  {
    name: "PCM",
    short: "PC",
    type: "Стационарные",
    note: "На базе GM (5.3, 5.7, 6.2 л)",
    popular: false,
  },
  {
    name: "Yamaha",
    short: "YA",
    type: "Стационарные и подвесные",
    note: "Стационарные для катеров, подвесные 50–450 л.с.",
    popular: false,
  },
  {
    name: "Kodiak",
    short: "KO",
    type: "Стационарные",
    note: "На базе GM (5.7–8.1 л), часто с Mercruiser",
    popular: false,
  },
  {
    name: "PSM",
    short: "PS",
    type: "Стационарные",
    note: "Подразделение PCM, на базе GM",
    popular: false,
  },
]

const tableRows = [
  {
    volume: "3.0 л",
    volvo: ["3.0 GL"],
    mercruiser: ["3.0 LX"],
    other: [],
    highlight: false,
  },
  {
    volume: "4.3 л",
    volvo: ["4.3 GL/SX", "4.3 GXi/DP"],
    mercruiser: ["4.3 LX", "4.3 MPI"],
    other: ["Indmar 4.3 (GM 262)"],
    highlight: false,
  },
  {
    volume: "5.0 л",
    volvo: ["5.0 GXi"],
    mercruiser: ["5.0 LX", "5.0 MPI"],
    other: ["PCM 5.0 (GM 305)"],
    highlight: false,
  },
  {
    volume: "5.7 л",
    volvo: ["5.7 Gi", "5.7 GXi"],
    mercruiser: ["5.7 LX", "5.7 Mag", "5.7 MPI"],
    other: ["Indmar 5.7 (GM 350)", "PCM 5.7 (GM 350)", "Kodiak 5.7"],
    highlight: true,
  },
  {
    volume: "6.0 л",
    volvo: ["6.0 Gi"],
    mercruiser: ["6.0 MPI"],
    other: ["Indmar 6.0 (GM L96)", "PCM 6.0 (GM L96)"],
    highlight: false,
  },
  {
    volume: "6.2 л",
    volvo: ["6.2 Gi"],
    mercruiser: ["6.2 MPI", "6.2 Mag"],
    other: ["Indmar Raptor 6.2", "PCM ZZ6/ZR7 (GM 376)"],
    highlight: true,
  },
  {
    volume: "7.4 л",
    volvo: ["7.4 Gi"],
    mercruiser: ["7.4 LX", "7.4 MPI"],
    other: ["Indmar 7.4 (GM 454)"],
    highlight: false,
  },
  {
    volume: "8.1 л",
    volvo: ["8.1 Gi"],
    mercruiser: ["8.1 MPI"],
    other: ["Indmar 8.1 (GM 8100)", "Kodiak 8.1"],
    highlight: false,
  },
]

const seoKeywords = [
  "Volvo Penta ремонт", "Mercruiser восстановление", "Indmar двигатель",
  "PCM двигатель", "Yamaha стационарный двигатель", "Kodiak 5.7",
  "GM 350 marine", "GM 6.0 marine", "GM 6.2 marine", "GM 8.1 marine",
  "лодочные двигатели Домодедово", "ремонт двигателей катеров Москва",
]

export function EnginesSection() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)

  return (
    <section id="engines" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(30, 58, 100, 0.04)" />

      <div className="container px-4 md:px-6">

        {/* Заголовок */}
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 text-gray-600 dark:text-gray-400 text-sm font-medium">
              Специализация
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Двигатели, с которыми мы работаем
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Специализируемся на морских двигателях Volvo Penta, Mercruiser и других брендах на базе GM
            </p>
            <p className="text-muted-foreground/70 max-w-2xl mx-auto text-sm">
              Более 15 лет восстанавливаем только морские двигатели — никакого автопрома, только проверенные платформы
            </p>
          </div>
        </ScrollReveal>

        {/* 9.1 Бейджи брендов */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {brands.map((brand) => (
              <motion.div
                key={brand.name}
                className="relative cursor-default"
                onMouseEnter={() => setHoveredBrand(brand.name)}
                onMouseLeave={() => setHoveredBrand(null)}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`
                  flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200
                  ${brand.popular
                    ? "bg-gray-900 border-gray-700 text-white dark:bg-gray-100 dark:border-gray-300 dark:text-gray-900 shadow-md"
                    : "bg-card border-border text-foreground hover:border-gray-400 dark:hover:border-gray-500"
                  }
                `}>
                  <span className="w-7 h-7 rounded-md bg-gray-500/15 flex items-center justify-center text-xs font-black tracking-tight flex-shrink-0">
                    {brand.short}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-tight">{brand.name}</span>
                    <span className={`text-xs leading-tight ${brand.popular ? "text-gray-300 dark:text-gray-600" : "text-muted-foreground"}`}>
                      {brand.type}
                    </span>
                  </div>
                  {brand.popular && (
                    <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-gray-700 text-gray-200 dark:bg-gray-300 dark:text-gray-700 font-medium">
                      Основной
                    </span>
                  )}
                </div>

                {/* Тултип с моделями */}
                <AnimatePresence>
                  {hoveredBrand === brand.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-56 bg-card border border-border rounded-xl shadow-xl p-3"
                    >
                      <p className="text-xs font-semibold mb-1 text-foreground">{brand.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{brand.note}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* 9.2 Таблица моделей */}
        <ScrollReveal delay={0.15}>
          <div className="mb-12">
            <h3 className="text-xl font-heading font-bold mb-6 text-center">
              Полный перечень двигателей, которые мы восстанавливаем
            </h3>

            {/* Десктоп таблица */}
            <div className="hidden md:block rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60 border-b border-border">
                    <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground w-20">Объём</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground">Volvo Penta</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground">Mercruiser</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground">Indmar / PCM / другие</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={row.volume}
                      className={`border-b border-border last:border-0 transition-colors ${
                        row.highlight
                          ? "bg-gray-500/8 dark:bg-gray-500/10"
                          : i % 2 === 0 ? "bg-card" : "bg-muted/20"
                      }`}
                    >
                      <td className="px-5 py-3.5">
                        <span className={`font-bold ${row.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                          {row.volume}
                        </span>
                        {row.highlight && (
                          <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-gray-500/15 text-gray-600 dark:text-gray-400 font-medium">★</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex flex-col gap-0.5">
                          {row.volvo.map(m => (
                            <span key={m} className={`${row.highlight ? "font-medium text-foreground" : "text-foreground/80"}`}>{m}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex flex-col gap-0.5">
                          {row.mercruiser.map(m => (
                            <span key={m} className={`${row.highlight ? "font-medium text-foreground" : "text-foreground/80"}`}>{m}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex flex-col gap-0.5">
                          {row.other.length > 0
                            ? row.other.map(m => (
                                <span key={m} className="text-muted-foreground">{m}</span>
                              ))
                            : <span className="text-muted-foreground/40">—</span>
                          }
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Мобильные карточки */}
            <div className="md:hidden flex flex-col gap-3">
              {tableRows.map((row) => (
                <div
                  key={row.volume}
                  className={`rounded-xl border p-4 ${
                    row.highlight ? "border-gray-500/40 bg-gray-500/8" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-base text-foreground">{row.volume}</span>
                    {row.highlight && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-500/15 text-gray-600 dark:text-gray-400 font-medium">Популярный</span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    {row.volvo.length > 0 && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Volvo Penta</span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {row.volvo.map(m => (
                            <span key={m} className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs">{m}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {row.mercruiser.length > 0 && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Mercruiser</span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {row.mercruiser.map(m => (
                            <span key={m} className="px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-600 dark:text-gray-400 text-xs">{m}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {row.other.length > 0 && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Другие</span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {row.other.map(m => (
                            <span key={m} className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">{m}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-3 text-center">
              ★ — наиболее часто восстанавливаемые объёмы
            </p>
          </div>
        </ScrollReveal>

        {/* 9.3 Текстовый SEO-блок */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 mb-6">
            <h3 className="text-lg font-heading font-bold mb-3">
              Почему мы работаем только с этими двигателями
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Мы восстанавливаем исключительно морские двигатели премиальных брендов — Volvo Penta, Mercruiser, Indmar, PCM, Yamaha, Kodiak. Все они либо производятся самими брендами, либо собираются на базе проверенных платформ General Motors (GM) и Ford, которые мы знаем до винтика.
            </p>
          </div>
        </ScrollReveal>

        {/* SEO-ключевые слова (скрытые визуально, но читаемые поисковиками) */}
        <div className="mt-4">
          <p className="text-[10px] text-muted-foreground/30 leading-relaxed text-center select-none">
            {seoKeywords.join(" · ")}
          </p>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-muted-foreground mt-6 max-w-xl mx-auto">
            Не нашли свою модель? Свяжитесь с нами — рассмотрим возможность работы с вашим двигателем индивидуально.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
