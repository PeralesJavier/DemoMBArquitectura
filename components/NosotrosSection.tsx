'use client'

import { useEffect, useRef, useState } from 'react'
import { images } from '@/lib/images'


type Stat = {
  value: number
  label: string
  displayValue: string
  raw: number | 'ordinal'
  hasPrefix: boolean
}

const initialStats: Stat[] = [
  { value: 0, label: 'Años de trayectoria', displayValue: '20', raw: 20, hasPrefix: false },
  { value: 0, label: 'Proyectos realizados', displayValue: '200', raw: 200, hasPrefix: true },
  { value: 0, label: 'Clientes satisfechos', displayValue: '60', raw: 60, hasPrefix: true },
  { value: 0, label: 'Construcción ES Gulf del país', displayValue: '1er', raw: 'ordinal', hasPrefix: false },
]

export function NosotrosSection() {
  const [stats, setStats] = useState<Stat[]>(initialStats)
  const statsRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animateStats()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateStats = () => {
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      setStats((prevStats) =>
        prevStats.map((stat, index) => {
          if (index === 3) {
            // Ordinal stat (1er) - just fade in
            return {
              ...stat,
              value: progress === 1 ? 1 : 0,
            }
          }

          const animatedValue = typeof stat.raw === 'number' ? Math.floor(progress * stat.raw) : 0
          return {
            ...stat,
            value: animatedValue,
          }
        })
      )

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  return (
    <section id="nosotros" className="relative w-full bg-white">
      {/* Main Content - Two Column Layout */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-start space-y-8">
            {/* Label */}
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                 Nosotros
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.04em] text-black">
              Cada proyecto nace de soluciones <span className="text-[#f0d315]">innovadoras y</span> modernas.
            </h2>

            {/* Description Paragraph */}
            <p className="max-w-lg text-base leading-relaxed text-gray-600">
              En MB Arquitectura diseñamos, desarrollamos, construimos y entregamos proyectos integrales con la más alta calidad. Cada proyecto es una oportunidad única para crear algo extraordinario. Es por eso que nos involucramos de lleno en cada detalle, desde la planificación inicial hasta la entrega final.
            </p>

            <p className="max-w-lg text-base leading-relaxed text-gray-600">
              Nuestro objetivo es superar tus expectativas, implementando soluciones innovadoras y modernas en un espacio que te llene de satisfacción. De principio a fin, hacemos espacios que marcan la diferencia en la experiencia del cliente.
            </p>

            <p className="max-w-lg text-base leading-relaxed text-gray-600">
              Buscamos crear espacios que emocionen. Más que construcciones, hogares y experiencias.
            </p>

            {/* CTA Link */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 border-b border-black/20 pb-2 text-sm font-light tracking-wider text-black transition-all duration-300 hover:border-black/40"
              >
                Conocé MB Arquitectura
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden">
              <img
                  src={images.nosotros}
                  alt="Detalle arquitectónico - MB Arquitectura"
                  className="aspect-[3/4] w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.02]"
                />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        ref={statsRef}
        className="w-full bg-[#f4d20b]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="space-y-3 border-l border-black/20 pl-6 first:border-l-0 first:pl-0"
              >
                {/* Number */}
                <div className="h-16 flex items-baseline">
                  {index === 3 ? (
                    <div
                      className={`text-5xl lg:text-6xl font-bold text-black transition-opacity duration-500 ${
                        stat.value === 1 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {stat.displayValue}
                    </div>
                  ) : (
                    <div className="text-5xl lg:text-6xl font-bold text-black">
                      {stat.hasPrefix && stat.value === stat.raw ? '+' : ''}{stat.value}
                    </div>
                  )}
                </div>

                {/* Label */}
                <p className="text-[10px] uppercase tracking-[0.2em] font-light text-black/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
