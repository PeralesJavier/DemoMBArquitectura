// components/ServiciosSection.tsx

import { Arrow } from '@/components/shared/Arrow'

export function ServiciosSection() {
  return (
    <section id="servicios" className="px-5 py-24 sm:px-10 lg:px-16">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#777]">
            Servicios
          </p>
          <h2 className="max-w-md text-4xl font-light leading-none tracking-[-0.06em] sm:text-6xl">
            Fabricacion de aberturas y cerramientos de aluminio de alta prestacion.
          </h2>
        </div>
        <div>
          {[
            "Asesoramiento técnico integral.",
            "Fabricación y colocación con personal especializado.",
            "Compromiso con la calidad, la prestación y el servicio.",
            "Sistemas disponibles: Ventanas corredizas 2 / 3 / 4 hojas - Puertas de rebatir - Oscilobatientes - Banderolas - Puertas y paños fijos en vidrio templado - Techos de vidrio de aluminio - Barandas - Frente integrales y piel de vidrio.",
        ].map((service, index) => (
        <div
            key={service}
            className="group flex items-center justify-between border-t border-black/15 py-8"
        >
        <div className="flex items-center gap-5">
        <span className="text-xs text-[#f0d315]">0{index + 1}</span>
        <h3 className="text-xl font-light sm:text-2xl">{service}</h3>
        </div>
        <Arrow />
    </div>
    ))}
        </div>
      </div>
    </section>
  )
}