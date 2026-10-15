// app/page.tsx

import { HeroSection } from '@/components/HeroSection'
import { NosotrosSection } from '@/components/NosotrosSection'
import { ClientesSection } from '@/components/ClientesSection'
import { ProyectosSection } from '@/components/ProyectosSection'
import { ServiciosSection } from '@/components/ServiciosSection'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="overflow-hidden bg-white text-[#292929]">
      <HeroSection />
      <NosotrosSection />
      <ClientesSection />
      <ProyectosSection />
      <ServiciosSection />
      <Footer />
    </main>
  )
}
