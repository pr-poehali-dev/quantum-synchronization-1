import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import Icon from "@/components/ui/icon"

const photos = [
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/8967f7be-a79f-4be0-a7fe-dd361c868fe3.jpg",
    caption: "Приёмка двигателя — получен и готов к разборке",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/6ab9629e-a937-4ddb-83bd-34441bf460bc.jpg",
    caption: "Блок после расточки и хонингования — чистый металл",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/cfe9db12-6889-42d4-8d9b-0a6f48790864.jpg",
    caption: "Двигатель в сборе после полного восстановления",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/c48749be-6b42-4e10-a396-737cebc7c73f.jpg",
    caption: "Готов к отправке — упакован и проверен на стенде",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/90a7d4a8-57d3-4bf4-8a50-b830a593cf45.jpg",
    caption: "Двигатель после покраски и финальной сборки",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/9f51dd6e-c831-44c4-a724-969c5bc7d2ff.jpg",
    caption: "Готовый двигатель — контрольная фотосъёмка перед отгрузкой",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/18631ae3-2ed7-4b79-8ab7-c89e6ec656d6.jpg",
    caption: "Блок в процессе сборки — коленвал и вкладыши",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/bc758a6a-24b4-498d-9377-349fe19bfc00.jpg",
    caption: "Двигатель Volvo Penta — полностью восстановлен и собран",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/7e6d1699-1ebf-4651-b911-370cbb1f63d1.jpg",
    caption: "MerCruiser 4.3 — готов к установке на катер",
  },
  {
    url: "https://cdn.poehali.dev/projects/1d0efd06-d472-4a9f-94b2-d81e299c245e/bucket/af1a086f-6d8e-4fb3-86e5-41dd66ddeb61.jpg",
    caption: "Несколько двигателей в работе одновременно",
  },
]

export function PortfolioSection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null))

  return (
    <section className="w-full py-20 md:py-28 bg-background" id="portfolio">
      <div className="container max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
              Результаты
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши работы
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Реальные двигатели, прошедшие через наши руки. Нажмите на фото, чтобы рассмотреть детали.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/5]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                    {photo.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/60 rounded-full p-1.5">
                    <Icon name="ZoomIn" size={16} className="text-white" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <Icon name="X" size={32} />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <Icon name="ChevronLeft" size={40} />
            </button>

            <motion.div
              key={lightbox}
              className="relative max-w-4xl max-h-[85vh] px-8 sm:px-16 flex flex-col items-center w-full"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightbox].url}
                alt={photos[lightbox].caption}
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
              <p className="mt-4 text-white/80 text-sm text-center">
                {photos[lightbox].caption}
              </p>
              <p className="mt-1 text-white/40 text-xs">
                {lightbox + 1} / {photos.length}
              </p>
            </motion.div>

            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <Icon name="ChevronRight" size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}