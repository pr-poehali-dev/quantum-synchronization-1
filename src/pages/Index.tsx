import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemsSection } from "@/components/sections/problems-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PhilosophySection } from "@/components/sections/philosophy-section"
import { EnginesSection } from "@/components/sections/engines-section"
import { ContactsSection } from "@/components/sections/contacts-section"
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden w-full">
        <SiteHeader />
        <PageTransition>
          <main className="flex-1 flex flex-col items-center relative">
            <MouseGlow
              color="rgba(249, 115, 22, 0.10)"
              size={600}
              blur={150}
              opacity={0.5}
              followSpeed={0.05}
              pulseEffect={true}
              pulseSpeed={4}
              pulseScale={1.05}
            />
            <HeroSection />
            <ProblemsSection />
            <SolutionsSection />
            <PortfolioSection />
            <FeaturesSection />
            <ProcessSection />
            <PhilosophySection />
            <EnginesSection />
            <ContactsSection />
          </main>
        </PageTransition>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}

export default Index