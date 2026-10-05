'use client'

import { useState } from 'react'

const currentImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MBArquitectura-UIVO1ERCXa9nlCjbDAeOk5HagXVbsF.png'
const referenceImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MainEjemploacm1.png-s38LBmu34wVkW5oArE6eZkiAfMuXuw.jpeg'
const residentialImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MainEjemploAVC-UMJun8thzEUfLMeGN3W2WMFMWA5Km2.png'

function Mark({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${light ? 'text-white' : 'text-[#353535]'}`} aria-label="MB Arquitectura">
      <span className="text-3xl font-light tracking-[-0.15em] leading-none"><i className="text-[#f4d20b] not-italic">|</i>MB</span>
      <span className={`hidden border-l pl-2 text-[9px] uppercase tracking-[0.24em] sm:block ${light ? 'border-white/40' : 'border-black/20'}`}>Arquitectura<br />S.A.</span>
    </div>
  )
}

function Arrow() { return <span aria-hidden="true" className="text-xl">↗</span> }

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 text-white mix-blend-difference sm:px-10 lg:px-16">
      <Mark light />
      <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.2em] md:flex" aria-label="Navegación principal">
        <a href="#estudio" className="transition-opacity hover:opacity-60">Estudio</a>
        <a href="#proyectos" className="transition-opacity hover:opacity-60">Proyectos</a>
        <a href="#servicios" className="transition-opacity hover:opacity-60">Servicios</a>
        <a href="#contacto" className="transition-opacity hover:opacity-60">Contacto</a>
      </nav>
      <button className="rounded-full border border-current px-4 py-2 text-[10px] uppercase tracking-[0.2em] md:hidden" aria-label="Abrir menú">Menú</button>
    </header>
  )
}

function VariantLabel({ label, title }: { label: string; title: string }) {
  return <div className="mb-8 flex items-end justify-between border-b border-black/15 pb-4"><div><p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#777]">{label}</p><h2 className="text-2xl font-light tracking-tight sm:text-3xl">{title}</h2></div><span className="text-xs text-[#777]">01 / 03</span></div>
}

function HeroA() {
  return <section className="bg-[#f5f4f0] px-5 py-20 sm:px-10 lg:px-16"><VariantLabel label="Dirección estética A" title="Minimalista editorial" /><div className="relative overflow-hidden bg-white"><div className="grid min-h-[530px] grid-cols-1 md:grid-cols-[0.92fr_1.08fr]"><div className="flex flex-col justify-between p-7 sm:p-12"><p className="text-[10px] uppercase tracking-[0.3em] text-[#666]">Diseño y construcción · Buenos Aires</p><div><div className="mb-2 text-[clamp(8rem,22vw,17rem)] font-light leading-[.7] tracking-[-0.13em] text-[#353535]"><i className="text-[#f4d20b] not-italic">|</i>MB</div><p className="ml-2 mt-10 max-w-xs text-sm leading-relaxed text-[#666]">Espacios que combinan materia, precisión y una forma sensible de habitar.</p></div><a href="#proyectos" className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">Ver proyectos <Arrow /></a></div><div className="min-h-[300px] bg-cover bg-center grayscale-[20%]" style={{ backgroundImage: `url(${currentImage})` }} aria-label="Interior arquitectónico" /></div></div></section>
}

function HeroB() {
  return <section className="bg-[#f4d20b] px-5 py-20 sm:px-10 lg:px-16"><VariantLabel label="Dirección estética B" title="Maximalista arquitectónico" /><div className="relative min-h-[540px] overflow-hidden bg-[#202020] text-white"><div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${residentialImage})` }} /><div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" /><div className="relative flex min-h-[540px] flex-col justify-between p-7 sm:p-12"><div className="flex justify-between text-[10px] uppercase tracking-[0.3em]"><span>MB / 2024</span><span>Arquitectura + obra</span></div><div><p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#f4d20b]">Estudio de arquitectura</p><h3 className="max-w-4xl text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[.82] tracking-[-0.07em]">MB<br /><span className="text-[#f4d20b]">Arquitectura</span></h3></div><div className="flex items-end justify-between"><p className="max-w-xs text-sm leading-relaxed text-white/75">Construimos ideas con carácter. Del primer trazo a la última llave.</p><Arrow /></div></div></div></section>
}

function HeroC() {
  return <section className="bg-white px-5 py-20 sm:px-10 lg:px-16"><VariantLabel label="Dirección estética C" title="Clásico contemporáneo" /><div className="relative grid min-h-[560px] overflow-hidden bg-[#3b3b3b] text-white md:grid-cols-[1.05fr_.95fr]"><div className="absolute inset-0 bg-cover bg-center opacity-35 md:relative" style={{ backgroundImage: `url(${referenceImage})` }} /><div className="absolute inset-0 bg-gradient-to-r from-[#292929]/95 via-[#292929]/70 to-transparent md:hidden" /><div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-[#292929]/90 to-transparent md:block" /><div className="relative z-10 flex flex-col justify-between p-7 sm:p-12 md:col-start-1 md:row-start-1"><div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]"><span className="h-px w-10 bg-[#f4d20b]" /> 02 — El estudio</div><div><h3 className="mb-5 text-[clamp(3.5rem,8vw,7.5rem)] font-light leading-[.84] tracking-[-0.07em]">Damos vida<br />a tu <em className="font-serif font-normal not-italic text-[#f4d20b]">proyecto.</em></h3><p className="max-w-sm text-sm leading-relaxed text-white/70">Pensamos espacios honestos, duraderos y propios. Arquitectura que se disfruta hoy y permanece mañana.</p></div><a href="#estudio" className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">Conocé nuestro enfoque <Arrow /></a></div><div className="relative z-10 col-start-2 row-start-1 hidden items-end justify-end p-12 md:flex"><span className="text-right text-xs uppercase tracking-[0.25em] text-white/60">Estudio<br />MB Arquitectura<br />Buenos Aires</span></div></div></section>
}

function MainSections() {
  return <>
    <section id="estudio" className="grid gap-12 border-t border-black/10 px-5 py-24 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:px-16"><div><p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#777]">01 — Sobre el estudio</p><h2 className="max-w-xl text-4xl font-light leading-[.95] tracking-[-0.06em] sm:text-6xl">Arquitectura con <span className="font-serif italic">identidad.</span></h2></div><div className="max-w-lg self-end"><p className="text-base leading-relaxed text-[#555]">Somos un estudio de arquitectura dedicado a diseñar, dirigir y construir espacios que representan a quienes los habitan. Trabajamos cada proyecto con una mirada integral, combinando sensibilidad, técnica y una ejecución rigurosa.</p><a href="#contacto" className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-xs uppercase tracking-[0.2em]">Conocé MB Arquitectura <Arrow /></a></div></section>
    <section id="proyectos" className="bg-[#f1f0ed] px-5 py-24 sm:px-10 lg:px-16"><div className="mb-12 flex items-end justify-between"><div><p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#777]">02 — Proyectos destacados</p><h2 className="text-4xl font-light tracking-[-0.06em] sm:text-6xl">Obras que <em className="font-serif not-italic">hablan.</em></h2></div><span className="hidden text-xs text-[#777] sm:block">[ 03 proyectos ]</span></div><div className="grid gap-5 md:grid-cols-2"><article className="group md:col-span-2"><div className="aspect-[2.1/1] overflow-hidden bg-[#ccc]"><div className="h-full w-full bg-cover bg-center grayscale transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${residentialImage})` }} /></div><div className="flex justify-between border-b border-black/15 py-5"><div><h3 className="text-xl">Casa Z — Diseño integral</h3><p className="mt-1 text-xs text-[#777]">Nordelta · 2023 / 2024</p></div><Arrow /></div></article><article className="group"><div className="aspect-[1.2/1] overflow-hidden bg-[#ccc]"><div className="h-full w-full bg-cover bg-center grayscale transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${currentImage})` }} /></div><div className="border-b border-black/15 py-5"><h3 className="text-xl">Oficinas MB</h3><p className="mt-1 text-xs text-[#777]">Berazategui · 2022</p></div></article><article className="group"><div className="aspect-[1.2/1] overflow-hidden bg-[#ccc]"><div className="h-full w-full bg-cover bg-center grayscale transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${referenceImage})` }} /></div><div className="border-b border-black/15 py-5"><h3 className="text-xl">Casa del Bosque</h3><p className="mt-1 text-xs text-[#777]">Canning · 2021</p></div></article></div></section>
    <section id="servicios" className="px-5 py-24 sm:px-10 lg:px-16"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#777]">03 — Servicios</p><h2 className="max-w-md text-4xl font-light leading-none tracking-[-0.06em] sm:text-6xl">De la idea<br />a la <span className="font-serif italic">obra.</span></h2></div><div>{['Proyecto y diseño', 'Dirección de obra', 'Construcción integral', 'Interiorismo y terminaciones'].map((service, index) => <div key={service} className="group flex items-center justify-between border-t border-black/15 py-6"><div className="flex items-center gap-5"><span className="text-xs text-[#f4c900]">0{index + 1}</span><h3 className="text-xl font-light sm:text-2xl">{service}</h3></div><Arrow /></div>)}</div></div></section>
  </>
}

function Footer() {
  return <footer id="contacto" className="bg-[#373737] px-5 pb-6 pt-20 text-white sm:px-10 lg:px-16"><div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr_.8fr]"><div><Mark light /><h2 className="mt-16 max-w-lg text-4xl font-light leading-none tracking-[-0.05em] sm:text-6xl">Hablemos de<br /><span className="text-[#f4d20b]">tu próximo espacio.</span></h2></div><div><p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/50">Contacto</p><p className="text-sm leading-8 text-white/80">Calle 145 N°636<br />Berazategui, Buenos Aires<br />+54 9 11 7193-8245</p><a href="mailto:info@mbarquitectura.com.ar" className="mt-5 inline-block text-sm text-[#f4d20b]">info@mbarquitectura.com.ar</a></div><div><p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/50">Seguinos</p><div className="flex gap-4 text-sm"><a href="#contacto" aria-label="Instagram">Instagram</a><a href="#contacto" aria-label="Facebook">Facebook</a></div></div></div><div className="mt-20 border-t border-white/15 pt-5 text-[10px] text-white/50"><span>© 2024 MB Arquitectura S.A.</span><span className="float-right">Diseño y construcción</span></div></footer>
}

export default function Page() {
  const [showVariants, setShowVariants] = useState(true)
  return <main className="overflow-hidden bg-white text-[#292929]"><Header /><section className="relative flex min-h-[76vh] items-end bg-[#373737] px-5 pb-14 pt-32 text-white sm:px-10 lg:min-h-[88vh] lg:px-16"><div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${currentImage})` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/30 to-transparent" /><div className="relative z-10 w-full"><p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/70"><span className="h-px w-12 bg-[#f4d20b]" /> Estudio de arquitectura · Buenos Aires</p><h1 className="max-w-6xl text-[clamp(4.5rem,14vw,13rem)] font-light leading-[.76] tracking-[-0.1em]">MB<br /><span className="ml-[.2em] text-[#f4d20b]">Arquitectura</span></h1><div className="mt-12 flex max-w-2xl items-end justify-between gap-8"><p className="max-w-xs text-sm leading-relaxed text-white/70">Diseñamos y construimos espacios con identidad, precisión y propósito.</p><a href="#estudio" className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">Explorar <Arrow /></a></div></div></section><div className="flex items-center justify-between border-b border-black/10 bg-[#f4d20b] px-5 py-5 text-[10px] uppercase tracking-[0.25em] sm:px-10 lg:px-16"><span>Elegí una dirección estética</span><button onClick={() => setShowVariants(!showVariants)} className="border-b border-black pb-1">{showVariants ? 'Ocultar variantes' : 'Ver variantes'}</button></div>{showVariants && <div className="bg-[#f5f4f0]"><HeroA /><HeroB /><HeroC /></div>}<MainSections /><Footer /></main>
}
