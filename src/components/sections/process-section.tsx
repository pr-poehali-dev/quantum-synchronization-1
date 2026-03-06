import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Truck",
    number: 1,
    title: "Приём и диагностика",
    description: "Привозите двигатель или вызываете нашего специалиста. Осматриваем и оцениваем объём работ.",
  },
  {
    icon: "Search",
    number: 2,
    title: "Дефектовка и смета",
    description: "Полностью разбираем, составляем список работ и согласовываем цену. Никаких скрытых доплат.",
  },
  {
    icon: "Hammer",
    number: 3,
    title: "Восстановление блока",
    description: "Расточка, хонингование, замена поршневой группы, балансировка коленвала.",
  },
  {
    icon: "Paintbrush",
    number: 4,
    title: "Подготовка навесного",
    description: "Чистка, ремонт, покраска ваших узлов. Для варианта «под ключ» — полная подготовка всего навесного.",
  },
  {
    icon: "Wrench",
    number: 5,
    title: "Сборка и настройка",
    description: "Ручная сборка по спецификации производителя. Стендовые испытания под нагрузкой.",
  },
  {
    icon: "BadgeCheck",
    number: 6,
    title: "Выдача с паспортом",
    description: "Получаете готовый двигатель и полный пакет документации с историей и результатами испытаний.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(30, 58, 100, 0.05)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 text-gray-600 dark:text-gray-400 text-sm font-medium">
              Процесс работы
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              От поломки до готового двигателя — 6 шагов
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный процесс. Вы знаете, что происходит на каждом этапе.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <motion.div
                className="relative h-full rounded-2xl border border-border hover:border-gray-500/30 bg-card p-6 flex flex-col gap-4 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center">
                      <Icon name={step.icon} className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-700 dark:bg-gray-400 flex items-center justify-center">
                      <span className="text-white dark:text-gray-900 text-xs font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-heading font-semibold mb-1.5">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 right-6 translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                    {(index + 1) % 3 !== 0 && (
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-gray-500/30"
                      >
                        <Icon name="ArrowRight" className="h-5 w-5" />
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}