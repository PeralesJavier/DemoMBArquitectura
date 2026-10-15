'use client'

import { useState, useEffect, useRef } from 'react'

const navigation = ['Inicio', 'Nosotros', 'Clientes', 'Proyectos', 'Servicios', 'Contacto']

// Icono oficial de WhatsApp en SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Icono ArrowUpRight local
const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

// Icono X local
const X = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Icono de menú hamburguesa
const MenuIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Icono Instagram
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

// Icono Facebook
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

// Icono YouTube
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

// Icono LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

// Icono Threads
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21a9 9 0 1 0-9-9c0 1.5.4 3 1 4.3L3 21l4.7-1c1.3.7 2.8 1 4.3 1z"></path>
    <path d="M9 10c.5-1.5 1.5-2.5 3-2.5s2.5.8 2.5 2c0 1.5-1.5 2-3 2-1.5 0-3 .5-3 2s1.5 2.5 3 2.5c1.5 0 2.5-.5 3-1.5"></path>
  </svg>
)

export function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Referencias para detectar clics fuera
  const menuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null) // NUEVA: Referencia para el botón

  // Cerrar el panel de WhatsApp al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsContactOpen(false)
      }
    }

    if (isContactOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isContactOpen])

  // Cerrar el menú móvil al hacer clic fuera (EXCLUYENDO el botón de hamburguesa)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Si el clic fue en el botón de hamburguesa, ignoramos este evento
      if (mobileMenuButtonRef.current && mobileMenuButtonRef.current.contains(event.target as Node)) {
        return
      }
      
      // Si el clic fue fuera del panel del menú, lo cerramos
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121212] text-white">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/SnapInsta.to_AQO.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#121212]/65" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.46)_0%,rgba(18,18,18,0.1)_35%,rgba(18,18,18,0.82)_100%)]" aria-hidden="true" />

      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 bg-[#121212]/10 backdrop-blur-[3px]">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16" aria-label="Navegación principal">
          {/* Logo + Redes Sociales */}
<div className="flex items-center gap-6 sm:gap-8">
  {/* Logo */}
  <a href="#inicio" className="shrink-0" aria-label="MB Arquitectura, inicio">
    <img 
      src="mb-logo-blanco-nobg.png" 
      alt="MB Arquitectura S.A. Diseño y Construcción" 
      className="h-auto w-[112px] mix-blend-multiply sm:w-[132px]" 
    />
  </a>

  {/* Redes Sociales (solo visible en desktop) */}
  <div className="hidden items-center gap-4 md:flex">
    <a 
      href="https://www.instagram.com/mbarquitectura_sa/" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Instagram" 
      className="text-white/70 transition-colors hover:text-[#f0d315]"
    >
      <InstagramIcon className="size-6" />
    </a>
    <a 
      href="https://www.facebook.com/profile.php?id=61559766262145&locale=es_LA&_rdc=1&_rdr#" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Facebook" 
      className="text-white/70 transition-colors hover:text-[#f0d315]"
    >
      <FacebookIcon className="size-6" />
    </a>
    <a 
      href="https://www.youtube.com/@MBArquitectura-u2e" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="YouTube" 
      className="text-white/70 transition-colors hover:text-[#f0d315]"
    >
      <YoutubeIcon className="size-6" />
    </a>
    <a 
      href="https://linkedin.com/company/mbarquitectura" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="LinkedIn" 
      className="text-white/70 transition-colors hover:text-[#f0d315]"
    >
      <LinkedinIcon className="size-6" />
    </a>
    <a 
      href="https://www.threads.com/@mbarquitectura_sa" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Threads" 
      className="text-white/70 transition-colors hover:text-[#f0d315]"
    >
      <ThreadsIcon className="size-6" />
    </a>
  </div>
</div>
          
          {/* Navegación de escritorio */}
          <div className="hidden items-center gap-7 md:flex lg:gap-10">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/80 transition-colors duration-300 hover:text-[#f0d315] focus-visible:text-[#f0d315] focus-visible:outline-none">
                {item}
              </a>
            ))}
          </div>
          
          {/* Botón Menú móvil con icono hamburguesa y referencia */}
          <button 
            ref={mobileMenuButtonRef}
            type="button" 
            className="text-white/80 transition-colors hover:text-[#f0d315] md:hidden" 
            onClick={() => setIsMobileMenuOpen((open) => !open)} 
            aria-expanded={isMobileMenuOpen} 
            aria-controls="mobile-navigation"
            aria-label="Abrir menú de navegación"
          >
            <MenuIcon className="size-6" />
          </button>
        </nav>
        
        {/* Panel del menú móvil con referencia */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-navigation" 
            className="border-t border-white/15 bg-[#121212]/90 px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-[11px] uppercase tracking-[0.24em] text-white/85 hover:text-[#f0d315]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="w-full max-w-[1100px] text-center">
          <p className="mb-7 text-[10px] uppercase tracking-[0.38em] text-[#f0d315] sm:text-xs">MB Arquitectura · Diseño y Construcción</p>
          
          <h1 className="font-sans text-[clamp(3.2rem,9vw,8.5rem)] font-light leading-[1.05] tracking-[-0.065em] text-white">
            Más que un proyecto,
            <br />
            <span className="font-semibold text-[#f0d315] block mt-2">una realidad.</span>
          </h1>
          
          <p className="mx-auto mt-9 max-w-[540px] text-sm font-light leading-7 tracking-[0.04em] text-white/75 sm:text-base">Especialistas en Estaciones de Servicio, Hoteles, Oficinas Comerciales y Carpintería de Aluminio</p>
        </div>
      </section>

      <div className="absolute inset-x-6 bottom-7 z-20 flex items-end justify-between sm:inset-x-10 lg:inset-x-16">
        <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.32em] text-white/60"><span className="h-px w-10 bg-[#f0d315]" />Buenos Aires · Argentina</div>
        <a href="#proyectos" className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-[#f0d315] sm:flex">Explorar <ArrowUpRight className="size-3" /></a>
      </div>

      {/* Panel de WhatsApp */}
      <div 
        ref={menuRef} 
        className="fixed bottom-10 right-6 z-30 sm:bottom-12 sm:right-8"
      >
        {isContactOpen && (
          <div className="absolute bottom-16 right-0 w-[270px] border border-white/15 bg-[#171717]/95 p-2 shadow-2xl backdrop-blur-xl">
            <div className="mb-2 flex items-center justify-between px-3 py-2">
              <span className="text-[9px] uppercase tracking-[0.24em] text-white/50">Contacto directo</span>
              <button type="button" onClick={() => setIsContactOpen(false)} aria-label="Cerrar contacto" className="text-white/50 hover:text-[#f0d315]"><X className="size-4" /></button>
            </div>
            <a href="https://wa.me/5491161155664?text=Hola%2C%20necesito%20hacer%20una%20consulta%20de%20obra" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-t border-white/10 px-3 py-3 transition-colors hover:bg-white/5">
              <span>
                <span className="block text-sm text-white">Área Técnica / Obras</span>
                <span className="text-[10px] text-white/50">Consultas de construcción</span>
              </span>
              <ArrowUpRight className="size-4 text-[#f0d315] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="https://wa.me/5491161155628?text=Hola%2C%20necesito%20contactar%20a%20Administraci%C3%B3n" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-t border-white/10 px-3 py-3 transition-colors hover:bg-white/5">
              <span>
                <span className="block text-sm text-white">Administración</span>
                <span className="text-[10px] text-white/50">Proveedores y presupuestos</span>
              </span>
              <ArrowUpRight className="size-4 text-[#f0d315] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
        
        <button 
          type="button" 
          onClick={() => setIsContactOpen((open) => !open)} 
          aria-label="Abrir opciones de WhatsApp" 
          aria-expanded={isContactOpen} 
          className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#f0d315] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d315] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
        >
          <WhatsAppIcon className="size-7" />
        </button>
      </div>
    </main>
  )
}