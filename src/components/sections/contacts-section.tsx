import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import Icon from "@/components/ui/icon"

export function ContactsSection() {
  return (
    <section id="contacts" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(100, 100, 100, 0.07)" secondaryColor="rgba(30, 58, 100, 0.07)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/20 text-gray-600 dark:text-gray-400 text-sm font-medium">
              Связаться с нами
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Приезжайте в наш центр в Домодедово или позвоните
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Адрес</div>
                  <div className="font-medium text-sm">Московская область, г. Домодедово</div>
                  <div className="text-muted-foreground text-sm">Объездное шоссе, вл. 1</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Режим работы</div>
                  <div className="font-medium text-sm">Ежедневно с 9:00 до 19:00</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Телефон</div>
                  <a href="tel:+79995550012" className="font-semibold text-base hover:text-foreground transition-colors">
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
                <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Email</div>
                  <a href="mailto:info@redmar.pro" className="font-medium text-sm hover:text-foreground transition-colors">
                    info@redmar.pro
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-border overflow-hidden h-full min-h-64">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.768,55.428&z=14&pt=37.768,55.428,pm2orl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Карта проезда"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}