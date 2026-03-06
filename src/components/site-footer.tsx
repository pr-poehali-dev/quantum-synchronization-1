import { Icons } from "@/components/icons"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export function SiteFooter() {
  const navLinks = [
    { name: "О проблемах", href: "#problems" },
    { name: "Наши решения", href: "#solutions" },
    { name: "Преимущества", href: "#features" },
    { name: "Как работаем", href: "#process" },
    { name: "Контакты", href: "#contacts" },
  ]

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 max-w-sm">
            <a href="/" className="flex items-center">
              <span className="font-heading text-base font-black tracking-tight px-2 py-1 bg-red-600 text-white rounded-l-md">RED</span>
              <span className="font-heading text-base font-black tracking-tight px-2 py-1 bg-blue-700 text-white rounded-r-md">MAR</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed opacity-80">
              Восстановление морских двигателей Volvo Penta и MerCruiser. 15 лет опыта, гарантия 1 год, полная документация.
            </p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span>Московская обл., г. Домодедово, объездное шоссе, вл. 1</span>
              <a href="tel:+79995550012" className="hover:text-red-600 transition-colors">+7 (999) 555-00-12</a>
              <a href="mailto:info@redmar.pro" className="hover:text-red-600 transition-colors">info@redmar.pro</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold tracking-tight mb-1">Навигация</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={scrollTo(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-red-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold tracking-tight mb-1">Режим работы</h3>
            <p className="text-sm text-muted-foreground">Ежедневно: 9:00 — 19:00</p>
            <a
              href="#contacts"
              onClick={scrollTo("#contacts")}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
            >
              Рассчитать стоимость
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground opacity-70">
            &copy; {new Date().getFullYear()} RedMar. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground opacity-50">
            Восстановление двигателей Volvo Penta и MerCruiser
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}