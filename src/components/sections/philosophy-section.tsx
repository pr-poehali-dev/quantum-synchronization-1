import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import Icon from "@/components/ui/icon"

const principles = [
  "Строгий отбор деталей донора, полная разборка, мойка, дефектовка.",
  "Замена всех ответственных деталей: новые поршни, кольца, вкладыши, сальники, прокладки (применяются компоненты промышленного класса).",
  "Восстановление блока цилиндров и головок: химическая обработка, хонингование, фрезеровка, калибровка.",
  "Прецизионная ручная сборка по спецификации производителя, с максимальным контролем качества и применением современных/улучшенных материалов.",
  "Контроль качества на каждом этапе: магнитно-порошковая дефектоскопия, опрессовка, метрологические измерения.",
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(100, 100, 100, 0.05)" secondaryColor="rgba(30, 58, 100, 0.08)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 text-gray-600 dark:text-gray-400 text-sm font-medium">
              Наша философия
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Наше предложение
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col gap-5">
                <p className="text-foreground leading-relaxed">
                  Это не контрактный и не просто «восстановленный» двигатель. Это{" "}
                  <span className="font-semibold text-foreground">новая силовая установка</span>, собранная из новых компонентов и качественно восстановленных оригинальных деталей по инженерному регламенту.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Мы не ставим вам старый, даже исправный блок. Мы создаём основу, которая зачастую надёжнее серийной, потому что устраняем известные «слабые места» конкретной модели.
                </p>

                <div className="flex flex-col gap-3 pt-2 border-t border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Target" className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Наша цель — обеспечить ресурс и надёжность двигателя в агрессивной морской среде при максимальных нагрузках.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="FileCheck" className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Мы не продаём «кота в мешке». Каждый двигатель проходит полный цикл контроля и получает собственную документацию.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-gray-500/20 bg-card p-6 md:p-8 shadow-[0_0_30px_rgba(100,100,100,0.08)]">
              <h3 className="text-lg font-heading font-bold mb-6 flex items-center gap-2">
                <Icon name="ListChecks" className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                Ключевые принципы
              </h3>
              <div className="flex flex-col gap-4">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-500/15 border border-gray-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" className="h-3 w-3 text-gray-600 dark:text-gray-400" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}