import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import Icon from "@/components/ui/icon"

const problems = [
  {
    icon: "Snowflake",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    glowColor: "rgba(59, 130, 246, 0.15)",
    title: "Разморозка",
    description:
      "Если двигатель перезимовал с водой в системе — трещины блока и головок. Проводим полное обследование и заменяем блок.",
  },
  {
    icon: "Thermometer",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    glowColor: "rgba(239, 68, 68, 0.15)",
    title: "Перегрев и заклинивание",
    description:
      "Перегрев ведёт к деформации головки, задирам поршней. Восстанавливаем геометрию и заменяем всё, что вышло из строя.",
  },
  {
    icon: "Gauge",
    color: "text-red-500",
    bgColor: "bg-red-600/10",
    borderColor: "border-red-600/20",
    glowColor: "rgba(220, 38, 38, 0.15)",
    title: "Износ — двигатель «устал»",
    description:
      "Масложор, стук, падение мощности. Замена поршневой, вкладышей, капитальное обновление всего агрегата.",
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.04)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-sm font-medium">
              Диагностика неисправностей
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Когда нужна помощь специалиста
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Морской двигатель работает в жёстких условиях. Мы понимаем эти проблемы и знаем, как их устранить.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} delay={index * 0.15}>
              <GlowingTiltCard
                glowColor={problem.glowColor}
                className={`h-full rounded-2xl border ${problem.borderColor} bg-card p-6 flex flex-col gap-4`}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`w-14 h-14 rounded-xl ${problem.bgColor} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon name={problem.icon} className={`h-7 w-7 ${problem.color}`} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                </div>
              </GlowingTiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}