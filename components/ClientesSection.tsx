'use client'

import { useEffect, useRef, useState } from 'react'
import { images, clientes as clientesData } from '@/lib/images'

type Cliente = {
  nombre: string
  imagen?: string
  url?: string
}

export function ClientesSection({ logos = clientesData }: { logos?: Cliente[] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLUListElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      },
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="clientes"
      aria-labelledby="clientes-titulo"
      className="bg-white text-[#4d4d4d]"
    >
      {/* HEADER */}
      <header className="flex items-center justify-center gap-8 px-6 py-32 sm:gap-10 sm:py-40 lg:gap-12 lg:py-48">
        <img
          src={images.logo}
          alt="MB Arquitectura"
          className="h-16 w-auto shrink-0 object-contain sm:h-20 lg:h-24"
        />
        <span aria-hidden="true" className="h-16 w-0.5 bg-[#f0d315] sm:h-20 lg:h-24" />
        <h2
          id="clientes-titulo"
          className="text-5xl font-light tracking-[0.05em] text-[#4d4d4d] sm:text-7xl lg:text-8xl"
        >
          Nuestros Clientes
        </h2>
      </header>

      {/* GRILLA */}
      <div className="mx-auto max-w-[1400px] px-6 pb-32 sm:px-10 sm:pb-40 lg:px-16 lg:pb-48">
        <ul
          ref={gridRef}
          className="grid grid-cols-2 items-center gap-x-20 gap-y-24 md:grid-cols-3 md:gap-x-24 lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32"
        >
          {logos.map((cliente, index) => {
            const logo = cliente.imagen ? (
              <img
                src={cliente.imagen}
                alt={cliente.nombre}
                className="max-h-[100px] max-w-[200px] object-contain grayscale transition duration-500 ease-out hover:grayscale-0 lg:max-h-[110px] lg:max-w-[220px]"
              />
            ) : (
              <span
                aria-label={cliente.nombre}
                className="flex h-28 w-full max-w-[220px] items-center justify-center bg-[#e5e5e5] px-4 text-center text-lg font-light tracking-[0.08em] text-[#4d4d4d] lg:h-32 lg:text-xl"
              >
                {cliente.nombre}
              </span>
            )

            const content = (
              <li
                key={cliente.nombre}
                className="flex min-h-28 items-center justify-center opacity-0 translate-y-5 transition-[opacity,transform] duration-[5000ms] ease-out lg:min-h-32"
                style={{
                  transitionDelay: `${index * 120}ms`,
                  ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
                }}
              >
                {logo}
              </li>
            )

            return cliente.url ? (
              <a key={cliente.nombre} href={cliente.url} target="_blank" rel="noreferrer" className="contents">
                {content}
              </a>
            ) : (
              content
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export type { Cliente }