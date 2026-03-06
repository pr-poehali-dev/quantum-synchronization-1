import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"

const brands = [
  {
    name: "Volvo Penta",
    color: "from-blue-700/20 to-blue-900/10",
    border: "border-blue-700/30",
    badge: "bg-blue-700/10 border-blue-700/20 text-blue-400",
    dot: "bg-blue-500",
    models: [
      { series: "3.0", items: ["3.0 GL"] },
      { series: "4.3", items: ["4.3 GL/SX", "4.3 GL/DP-S", "4.3 GXi/SX", "4.3 GXi/DP-S"] },
      { series: "5.0", items: ["5.0 GXi/SX", "5.0 GXi/DP-S"] },
      { series: "5.7", items: ["5.7 Gi/SX", "5.7 GXi/SX", "5.7 Gi/DP-S", "5.7 GXi/DP-S"] },
      { series: "6.2", items: ["6.2 GXi"] },
      { series: "7.4", items: ["7.4L V8"] },
      { series: "8.2", items: ["8.2L V8"] },
    ],
  },
  {
    name: "MerCruiser",
    color: "from-red-800/20 to-red-950/10",
    border: "border-red-600/30",
    badge: "bg-red-600/10 border-red-600/20 text-red-400",
    dot: "bg-red-500",
    models: [
      { series: "3.0", items: ["3.0L"] },
      { series: "4.3", items: ["4.3L / 4.3 MPI всех поколений"] },
      { series: "5.0", items: ["5.0L всех поколений"] },
      { series: "5.7", items: ["5.7L / MAG 350 (250–300 л.с.) всех поколений"] },
      { series: "6.2", items: ["6.2L V8 (MAG 377)"] },
      { series: "7.4", items: ["7.4L V8"] },
      { series: "8.2", items: ["8.2L V8"] },
    ],
  },
]

export function EnginesSection() {
  return (
    <section id="engines" className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(30, 58, 100, 0.04)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-sm font-medium">
              Специализация
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Двигатели, с которыми мы работаем
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Специализируемся исключительно на морских бензиновых двигателях Volvo Penta и MerCruiser — знаем каждую модель и все её особенности.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {brands.map((brand, brandIndex) => (
            <ScrollReveal key={brand.name} delay={brandIndex * 0.15}>
              <div className={`rounded-2xl border ${brand.border} bg-gradient-to-br ${brand.color} bg-card p-6 md:p-8 h-full`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full border text-xs font-semibold tracking-wide uppercase ${brand.badge}`}>
                    {brand.name}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {brand.models.map((group) => (
                    <div key={group.series} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${brand.dot} flex-shrink-0 mt-2`} />
                      <div className="flex flex-col gap-0.5">
                        {group.items.map((item) => (
                          <span key={item} className="text-sm text-foreground leading-relaxed">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
            Не нашли свою модель? Свяжитесь с нами — мы рассмотрим возможность работы с вашим двигателем индивидуально.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
