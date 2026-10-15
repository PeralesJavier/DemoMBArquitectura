// components/ProyectosSection.tsx

import { Arrow } from '@/components/shared/Arrow'
import { images } from '@/lib/images'

export function ProyectosSection() {
  return (
    <section
      id="proyectos"
      className="bg-[#f1f0ed] px-5 py-24 sm:px-10 lg:px-16"
    >
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#777]">
            Proyectos destacados
          </p>
          <h2 className="text-4xl font-light tracking-[-0.06em] sm:text-6xl">
            Obras que <em className="font-serif not-italic"> <span className="text-[#f0d315]">hablan</span></em>
          </h2>
        </div>
        <span className="hidden text-xs text-[#777] sm:block">
          [ proyectos ]
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="group md:col-span-2">
          <div className="aspect-[2.1/1] overflow-hidden bg-[#ccc]">
            <div
              className="h-full w-full bg-cover bg-center grayscale transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${images.panoramicGrandHotel})` }}
            />
          </div>
          <div className="flex justify-between border-b border-black/15 py-5">
            <div>
              <h3 className="text-xl">Panoramic Grand Hotel</h3>
              <p className="mt-1 text-xs text-[#777]">Buenos Aires · 2024</p>
            </div>
            <Arrow />
          </div>
        </article>

        <article className="group">
          <div className="aspect-[1.2/1] overflow-hidden bg-[#ccc]">
            <div
              className="h-full w-full bg-cover bg-center grayscale transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${images.ypfLaPlata})` }}
            />
          </div>
          <div className="border-b border-black/15 py-5">
            <h3 className="text-xl">YPF La Plata</h3>
            <p className="mt-1 text-xs text-[#777]">La Plata · 2023</p>
          </div>
        </article>

        <article className="group">
          <div className="aspect-[1.2/1] overflow-hidden bg-[#ccc]">
            <div
              className="h-full w-full bg-cover bg-center grayscale transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${images.shellBenavidez})` }}
            />
          </div>
          <div className="border-b border-black/15 py-5">
            <h3 className="text-xl">Shell Benavidez</h3>
            <p className="mt-1 text-xs text-[#777]">Benavidez · 2023</p>
          </div>
        </article>
      </div>
    </section>
  )
}