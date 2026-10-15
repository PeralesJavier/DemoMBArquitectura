// components/Footer.tsx

import { images } from '@/lib/images'

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#373737] px-5 pb-6 pt-20 text-white sm:px-10 lg:px-16"
    >
      <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        {/* Columna 1: Logo + Título */}
        <div>
          <img src="/mb-logo-blanco-nobg.png" alt="MB Arquitectura S.A." className="h-16 w-auto" />
          <h2 className="mt-16 max-w-lg text-4xl font-light leading-none tracking-[-0.05em] sm:text-6xl">
            Hablemos de
            <br />
            <span className="text-[#f0d315]">tu próximo espacio.</span>
          </h2>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/50">
            Contacto
          </p>
          <p className="text-sm leading-8 text-white/80">
            Calle 145 N°636
            <br />
            Berazategui, Buenos Aires
            <br />
            +54 9 11 7193-8245
          </p>
          <a
            href="mailto:info@mbarquitectura.com.ar"
            className="mt-5 inline-block text-sm text-[#f0d315]"
          >
            info@mbarquitectura.com.ar
          </a>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/50">
            Seguinos
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#contacto" aria-label="Instagram" className="transition-colors hover:text-[#f0d315]">
              Instagram
            </a>
            <a href="#contacto" aria-label="Facebook" className="transition-colors hover:text-[#f0d315]">
              Facebook
            </a>
            <a href="#contacto" aria-label="LinkedIn" className="transition-colors hover:text-[#f0d315]">
              LinkedIn
            </a>
            <a href="#contacto" aria-label="YouTube" className="transition-colors hover:text-[#f0d315]">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior con copyright + autor */}
      <div className="mt-20 flex flex-col gap-2 border-t border-white/15 pt-5 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2024 MB Arquitectura S.A.</span>
        <span>Diseño y construcción</span>
        <span>
          Diseñado por <span className="text-[#f0d315]">Javier</span>
        </span>
      </div>
    </footer>
  )
}