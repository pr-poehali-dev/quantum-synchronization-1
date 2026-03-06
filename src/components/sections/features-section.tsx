import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { AnimatedText } from "@/components/ui/animated-text"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import Icon from "@/components/ui/icon"

const advantages = [
  {
    icon: "Camera",
    title: "Полная прозрачность",
    description: "Фото- и видеоотчёты на каждом этапе работы. Вы видите, что происходит с вашим двигателем.",
  },
  {
    icon: "Award",
    title: "Опыт 15 лет",
    description: "Специализируемся исключительно на морских двигателях Volvo Penta и MerCruiser.",
  },
  {
    icon: "PackageCheck",
    title: "Качественные запчасти",
    description: "Только оригинальные детали и проверенные аналоги. Никаких компромиссов с качеством.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 1 год",
    description: "На все работы и установленные детали. Официальный гарантийный документ.",
  },
  {
    icon: "FileText",
    title: "Паспорт двигателя",
    description: "Каждый агрегат получает документ с полной историей работ и результатами испытаний.",
  },
  {
    icon: "FlaskConical",
    title: "Стендовые испытания",
    description: "Перед выдачей каждый двигатель проходит испытания на стенде — только после этого он идёт к вам.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="grid" color="rgba(100, 100, 100, 0.03)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 text-gray-600 dark:text-gray-400 text-sm font-medium">
              Наши преимущества
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              <AnimatedText animation="fade" className="inline">
                Работаем на совесть —
              </AnimatedText>{" "}
              доказываем документами
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждое утверждение подкреплено реальными результатами и прозрачными процессами.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, index) => (
            <ScrollReveal key={adv.title} delay={index * 0.1}>
              <GlowingTiltCard
                glowColor="rgba(100, 100, 100, 0.12)"
                className="h-full rounded-2xl border border-border hover:border-gray-500/30 bg-card p-6 flex flex-col gap-4 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={adv.icon} className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-semibold mb-1.5">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{adv.description}</p>
                </div>
              </GlowingTiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}