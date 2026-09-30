'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, BookOpen, HeartHandshake, ShieldCheck, Flame } from 'lucide-react';

interface AboutSectionProps {
  onNavigateToNext: () => void;
  onNavigateToBrief: () => void;
}

export function AboutSection({ onNavigateToNext, onNavigateToBrief }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<'historia' | 'manifiesto' | 'valores'>('historia');

  return (
    <section
      aria-label="02 Nosotros e Identidad"
      className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#0a0a0c]"
    >
      <div className="relative z-10 max-w-6xl w-full pt-16 pb-20 flex flex-col justify-between h-full">
        {/* Top Kicker */}
        <div className="flex items-center justify-between gap-4 pt-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-zinc-200 font-mono font-medium">02 // Identidad & Origen</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Raíz Chanka & Mirada Contemporánea</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('historia')}
              className={`px-3 py-1 text-xs uppercase tracking-wider font-medium rounded transition-colors ${
                activeTab === 'historia'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Nuestra Historia
            </button>
            <button
              onClick={() => setActiveTab('manifiesto')}
              className={`px-3 py-1 text-xs uppercase tracking-wider font-medium rounded transition-colors ${
                activeTab === 'manifiesto'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Manifiesto
            </button>
            <button
              onClick={() => setActiveTab('valores')}
              className={`px-3 py-1 text-xs uppercase tracking-wider font-medium rounded transition-colors ${
                activeTab === 'valores'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Valores
            </button>
          </div>
        </div>

        {/* Content Layout: Left narrative, Right visual/dossier card */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-4 items-center">
          {/* Left Column (7 cols): Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-rose-500 mb-2 block">
                Sobre Grupo Lares
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Una familia nacida del arte de crear.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              Creemos que el ingenio y la voluntad son poderosas herramientas para imprimir una vívida huella en la realidad.
              Somos artesanos de vivencias memorables, tomamos la esencia de tus ideas y damos forma a acontecimientos artísticos y
              audiovisuales, diseñados para despertar ese algo profundo que mueve a la comunidad. Lo extraordinario está a un “sí” de distancia.
            </p>

            {/* Dynamic Discovery Pane based on activeTab */}
            <div className="bg-zinc-900/70 border border-zinc-800 p-5 rounded-lg text-sm text-zinc-300 space-y-3">
              {activeTab === 'historia' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase">
                    <BookOpen className="w-4 h-4" />
                    <span>De Ayacucho al Gran Teatro Nacional</span>
                  </div>
                  <p className="leading-relaxed text-zinc-300 text-xs sm:text-sm">
                    Somos una productora nacida de una familia de migrantes ayacuchanos, de la región Chanka del sur de los Andes peruanos.
                    Inspirados por la trayectoria de <strong>Andrés “Chimango” Lares</strong>, entendimos el arte como motor de progreso y
                    herramienta de reivindicación cultural.
                  </p>
                  <p className="leading-relaxed text-zinc-300 text-xs sm:text-sm">
                    En 2015 fundamos <strong>Grupo Lares Wiñaypaq</strong> para dar soporte escénico de estándar sinfónico. Ese impulso nos abrió al circuito
                    audiovisual con <strong>Cinema Pro</strong>, coordinando encargos para organismos internacionales y empresa privada con
                    raíz andina y alcance contemporáneo.
                  </p>
                </div>
              )}

              {activeTab === 'manifiesto' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase">
                    <Flame className="w-4 h-4" />
                    <span>El arte como derecho cotidiano</span>
                  </div>
                  <p className="leading-relaxed text-zinc-200 text-xs sm:text-sm italic border-l-2 border-rose-500 pl-3">
                    “Creemos en una sociedad donde el arte es un derecho cotidiano: un lenguaje para expresarse, resistir,
                    reafirmar la identidad, progresar y realizarse.”
                  </p>
                  <p className="leading-relaxed text-zinc-300 text-xs sm:text-sm">
                    Trabajamos para que esa visión sea tangible: más escenarios abiertos, más historias contadas con dignidad y rigor técnico,
                    más públicos que se reconozcan en lo que ven y escuchan. Cuando la creación es cuidada, el tejido social se vuelve más denso y más justo.
                  </p>
                </div>
              )}

              {activeTab === 'valores' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs animate-fadeIn">
                  <div className="p-2.5 bg-zinc-950/60 rounded border border-zinc-800">
                    <span className="font-semibold text-white block mb-1">01. Alto nivel técnico</span>
                    <span className="text-zinc-400">Estándares altos para honrar las ideas, las obras y a sus autores.</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950/60 rounded border border-zinc-800">
                    <span className="font-semibold text-white block mb-1">02. Memoria activa & innovación</span>
                    <span className="text-zinc-400">Identidad viva que dialoga con el presente para diseñar el futuro.</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950/60 rounded border border-zinc-800">
                    <span className="font-semibold text-white block mb-1">03. Colaboración</span>
                    <span className="text-zinc-400">Redes de trabajo técnico que fortalecen el ecosistema creativo.</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950/60 rounded border border-zinc-800">
                    <span className="font-semibold text-white block mb-1">04. Impacto social</span>
                    <span className="text-zinc-400">Proyectos que generan diálogo comunitario, conocimiento y transformación.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action link */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onNavigateToNext}
                className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
              >
                <span>Descubrir nuestras capacidades</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
              </button>
              <button
                onClick={onNavigateToBrief}
                className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
              >
                Conócenos y agenda una llamada
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): High-Impact Visual Tribute & Lineage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group">
              <Image
                src="/images/hero_stage_production_1790798317544.jpg"
                alt="Producción sinfónica Grupo Lares"
                fill
                className="object-cover filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs">
                <span className="text-[10px] font-mono uppercase text-rose-400 block mb-1">
                  Legado & Disciplina
                </span>
                <p className="text-zinc-200 font-medium italic mb-2">
                  “El violín andino enseña que la libertad nace del dominio absoluto de la técnica. Lo mismo aplicamos a cada rodaje y escenario.”
                </p>
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Inspiración: Andrés “Chimango” Lares</span>
                  <span className="font-mono text-zinc-500">2015 – 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Footnote */}
        <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Wiñaypaq (Producción Artística) + Cinema Pro (Audiovisual)</span>
          <span className="font-mono">Capítulo 02 / 06</span>
        </div>
      </div>
    </section>
  );
}
