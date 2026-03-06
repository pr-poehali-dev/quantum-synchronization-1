import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import Icon from "@/components/ui/icon"

export function ContactsSection() {
  const [form, setForm] = useState({ name: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacts" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.07)" secondaryColor="rgba(30, 58, 100, 0.07)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-sm font-medium">
              Связаться с нами
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Приезжайте в наш центр в Домодедово или позвоните
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Адрес</div>
                    <div className="font-medium text-sm">Московская область, г. Домодедово</div>
                    <div className="text-muted-foreground text-sm">Объездное шоссе, вл. 1</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Режим работы</div>
                    <div className="font-medium text-sm">Ежедневно с 9:00 до 19:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Телефон</div>
                    <a href="tel:+79995550012" className="font-semibold text-base hover:text-red-600 transition-colors">
                      +7 (999) 555-00-12
                    </a>
                    <div className="flex gap-2 mt-2">
                      <a
                        href="https://wa.me/79995550012"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium hover:bg-green-500/20 transition-colors"
                      >
                        <Icon name="MessageCircle" className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                      <a
                        href="https://t.me/+79995550012"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-colors"
                      >
                        <Icon name="Send" className="h-3.5 w-3.5" />
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Email</div>
                    <a href="mailto:info@redmar.pro" className="font-medium text-sm hover:text-red-600 transition-colors">
                      info@redmar.pro
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border overflow-hidden h-56">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.768,55.428&z=14&pt=37.768,55.428,pm2orl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Карта проезда"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              className="rounded-2xl border border-red-600/30 bg-card p-8 shadow-[0_0_30px_rgba(220,38,38,0.1)]"
            >
              {!submitted ? (
                <>
                  <h3 className="text-xl font-heading font-bold mb-2">Заказать звонок</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Оставьте номер — перезвоним в течение 15 минут в рабочее время.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Ваше имя</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Александр"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Номер телефона</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all text-sm"
                      />
                    </div>
                    <GradientButton
                      glowAmount={8}
                      className="w-full py-3 text-sm mt-2"
                      gradientFrom="from-red-600"
                      gradientTo="to-red-700"
                    >
                      <button type="submit" className="w-full flex items-center justify-center gap-2">
                        <Icon name="PhoneCall" className="h-4 w-4" />
                        Перезвоните мне
                      </button>
                    </GradientButton>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Icon name="CheckCircle" className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">Заявка принята!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Перезвоним вам в течение 15 минут в рабочее время (9:00–19:00).
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "" }) }}
                    className="text-red-600 text-sm hover:underline mt-2"
                  >
                    Отправить ещё одну заявку
                  </button>
                </motion.div>
              )}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}