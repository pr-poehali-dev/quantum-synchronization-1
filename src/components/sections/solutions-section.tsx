import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import Icon from "@/components/ui/icon"

const solutions = [
  {
    icon: "Cog",
    number: "01",
    title: "Основа двигателя",
    subtitle: "Блок цилиндров в сборе",
    description:
      "Подойдёт, если вы собираете мотор сами или у вас есть квалифицированный механик. Полностью восстановленный блок с новыми поршнями, кольцами, вкладышами. Нулевой пробег.",
    tags: ["Новые поршни", "Новые кольца", "Новые вкладыши", "Нулевой пробег"],
    cta: "Узнать цену и наличие",
    image: "https://cdn.poehali.dev/files/5eeb00e6-5c9d-4889-ad08-2828b2c0b909.jpg",
    highlight: false,
  },
  {
    icon: "Wrench",
    number: "02",
    title: "Двигатель «под ключ»",
    subtitle: "Полное восстановление",
    description:
      "Вы привозите свой старый мотор — мы разбираем, дефектуем всё навесное, обслуживаем, красим и собираем на новый блок. На выходе — готовый к установке двигатель, прошедший стендовые испытания.",
    tags: ["Стендовые испытания", "Покраска", "Полная сборка", "Паспорт двигателя"],
    cta: "Рассчитать стоимость под ключ",
    image: "https://cdn.poehali.dev/files/9204f022-d5dc-4aea-99da-0ee33be75a46.jpg",
    highlight: true,
  },
  {
    icon: "Settings",
    number: "03",
    title: "Ремонт и обслуживание",
    subtitle: "Точечное решение",
    description:
      "Если нужен не полный блок, а, например, ремонт головки, замена прокладок, регулировка — мы тоже берёмся. Точечное решение вашей проблемы без лишних затрат.",
    tags: ["Ремонт головки", "Замена прокладок", "Регулировка", "Без лишних затрат"],
    cta: "Оставить заявку",
    image: "https://cdn.poehali.dev/files/91124f27-a22c-4b69-88a0-4751d77e8154.jpg",
    highlight: false,
  },
]

export function SolutionsSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="solutions" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(30, 58, 100, 0.06)" secondaryColor="rgba(220, 38, 38, 0.04)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-sm font-medium">
              Варианты сотрудничества
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Три способа получить надёжный двигатель
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите вариант, который подходит именно вам — от готового блока до полного восстановления.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} delay={index * 0.15}>
              <motion.div
                className={`relative h-full rounded-2xl border overflow-hidden flex flex-col ${
                  solution.highlight
                    ? "border-red-600/40 shadow-[0_0_30px_rgba(220,38,38,0.15)]"
                    : "border-border"
                } bg-card`}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {solution.highlight && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold">
                    Популярный выбор
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-5xl font-heading font-bold text-red-600/20 select-none">
                      {solution.number}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={solution.icon} className="h-5 w-5 text-red-600" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {solution.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold">{solution.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-red-600/10 text-red-600 text-xs font-medium border border-red-600/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <GradientButton
                    glowAmount={solution.highlight ? 8 : 4}
                    className="w-full py-2.5 text-sm mt-2"
                    gradientFrom="from-red-600"
                    gradientTo="to-red-700"
                    asChild
                  >
                    <a href="#contacts" onClick={scrollToContact}>
                      {solution.cta}
                    </a>
                  </GradientButton>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}