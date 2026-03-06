import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, FileText } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative w-full pt-24 pb-12 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(100, 100, 100, 0.06)" secondaryColor="rgba(30, 58, 100, 0.08)" />

      <div className="w-full px-4 md:px-6 md:container">
        <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:gap-12 xl:grid-cols-[1fr_560px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-3" variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 text-gray-600 dark:text-gray-400 text-xs font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-400 flex-shrink-0"></span>
                  Volvo Penta · MerCruiser · Морские двигатели
                </div>
                <h1 className="text-2xl font-heading font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl/none">
                  <span className="gradient-text">Восстановленный двигатель</span>
                  <br />
                  <span className="text-foreground">с нулевым пробегом.</span>
                  <br />
                  <span className="text-foreground">Вдвое дешевле нового.</span>
                </h1>
                <div className="flex flex-wrap gap-3 pt-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-sm font-medium">Гарантия 1 год</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-sm font-medium">Полная документация</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="flex flex-col gap-3 w-full" variants={itemVariants}>
                <a
                  href="#contacts"
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-white text-white dark:text-gray-900 font-medium text-sm transition-colors"
                >
                  Рассчитать стоимость моего двигателя
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </a>
                <a
                  href="#process"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" }) }}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl border border-border bg-background hover:bg-muted text-foreground font-medium text-sm transition-colors"
                >
                  Как мы работаем
                </a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 flex-shrink-0"></span>
                  15 лет специализируемся на морских двигателях
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="overflow-hidden">
            <SpotlightCard className="relative overflow-hidden rounded-2xl border border-gray-500/20 p-1 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-blue-900/10 z-10 rounded-2xl pointer-events-none"></div>
              <div className="relative z-20 rounded-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/6a673fa0-e2f4-4dfa-9e8c-d9925c7daff7.jpg"
                  alt="Восстановленный двигатель Volvo Penta"
                  className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[420px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-5">
                  <div className="flex gap-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/20 text-center"
                    >
                      <div className="text-lg sm:text-2xl font-bold text-white">15 лет</div>
                      <div className="text-xs text-white/70">опыта</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/20 text-center"
                    >
                      <div className="text-lg sm:text-2xl font-bold text-white">×2</div>
                      <div className="text-xs text-white/70">дешевле нового</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/20 text-center"
                    >
                      <div className="text-lg sm:text-2xl font-bold text-white">1 год</div>
                      <div className="text-xs text-white/70">гарантия</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}