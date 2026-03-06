import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, FileText } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"

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
    <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(100, 100, 100, 0.06)" secondaryColor="rgba(30, 58, 100, 0.08)" />

      <div className="container px-4 md:px-6 max-w-full">
        <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:gap-12 xl:grid-cols-[1fr_560px] min-w-0">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium mb-2 max-w-full flex-wrap">
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-400 flex-shrink-0"></span>
                  Volvo Penta · MerCruiser · Морские двигатели
                </div>
                <h1 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl/none">
                  <span className="gradient-text">Восстановленный двигатель</span>
                  <br />
                  <span className="text-foreground">с нулевым пробегом.</span>
                  <br />
                  <span className="text-foreground">Вдвое дешевле нового.</span>
                </h1>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-sm font-medium">Гарантия 1 год</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-sm font-medium">Полная документация</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="flex flex-col gap-4 sm:flex-row sm:items-center" variants={itemVariants}>
                <GradientButton
                  glowAmount={8}
                  className="px-6 py-2.5 text-base"
                  gradientFrom="from-gray-700"
                  gradientTo="to-gray-900"
                  asChild
                >
                  <a href="#contacts" onClick={scrollToContact} className="flex items-center">
                    Рассчитать стоимость моего двигателя
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </GradientButton>
                <MagneticButton className="neumorphic-button" strength={15}>
                  <a href="#process" className="px-6 py-2.5 block whitespace-nowrap" onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" })
                  }}>
                    Как мы работаем
                  </a>
                </MagneticButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2">
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  15 лет специализируемся на морских двигателях
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="min-w-0 overflow-hidden">
            <SpotlightCard className="relative overflow-hidden rounded-2xl border border-gray-500/20 p-1 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-blue-900/10 z-10 rounded-2xl pointer-events-none"></div>
              <div className="relative z-20 rounded-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/6a673fa0-e2f4-4dfa-9e8c-d9925c7daff7.jpg"
                  alt="Восстановленный двигатель Volvo Penta"
                  className="w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[420px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-6">
                  <div className="flex gap-2 sm:gap-4">
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