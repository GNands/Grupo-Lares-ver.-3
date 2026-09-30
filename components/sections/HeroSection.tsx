'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ArrowRight, Compass, ShieldCheck, Flame, Film } from 'lucide-react';

interface HeroSectionProps {
  onOpenShowreel: () => void;
  onNavigateToBrief: () => void;
  onNavigateToNext: () => void;
}

export function HeroSection({
  onOpenShowreel,
  onNavigateToBrief,
  onNavigateToNext,
}: HeroSectionProps) {
  return (
    <section
      aria-label="01 Inicio y Showreel"
      className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#09090b]"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_stage_production_1790798317544.jpg"
          alt="Producción escénica y audiovisual Grupo Lares"
          fill
          priority
          className="object-cover opacity-35 filter brightness-75 contrast-125 transition-transform duration-1000 scale-100 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Anti-glare and deep contrast scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-[#09090b]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl w-full pt-16 pb-20 flex flex-col justify-between h-full">
        {/* Top Kicker & Dual Wings tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-zinc-200 font-mono font-medium">01 // Promesa & Dirección</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Raíz Andina · Estándar Global</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span className="font-semibold text-rose-400">Wiñaypaq</span>
              <span className="text-zinc-400 hidden sm:inline">(Artes & Eventos)</span>
            </div>
            <span className="text-zinc-700">+</span>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="font-semibold text-blue-400">Cinema Pro</span>
              <span className="text-zinc-400 hidden sm:inline">(Audiovisual)</span>
            </div>
          </div>
        </div>

        {/* Hero Narrative Core */}
        <div className="my-auto max-w-4xl py-6">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-400 font-mono font-semibold mb-3">
            Grupo Lares · Productora Integral
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 text-balance">
            Donde los demás ven imposibles, nosotros vemos caminos.
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed mb-8">
            Producción artística y audiovisual para crear experiencias memorables.
            Unimos criterio, capacidades ejecutivas y rigor técnico para materializar proyectos
            de alto impacto con instituciones públicas, cooperación internacional y corporaciones.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onNavigateToBrief}
              className="px-6 py-3.5 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-lg shadow-rose-950/50 flex items-center gap-2 group"
            >
              <span>Hagámoslo posible</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenShowreel}
              className="px-6 py-3.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white text-sm font-medium rounded border border-zinc-700/80 transition-all flex items-center gap-2.5 backdrop-blur"
            >
              <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <Play className="w-3 h-3 translate-x-0.5 fill-rose-400" />
              </div>
              <span>Ver Showreel 2025</span>
              <span className="text-zinc-400 text-xs font-mono">(03:00)</span>
            </button>

            <button
              onClick={onNavigateToNext}
              className="hidden md:inline-flex text-xs text-zinc-400 hover:text-zinc-200 transition-colors py-2 px-3 items-center gap-1.5"
            >
              <span>Descubrir identidad</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Trust & Operational Benchmarks (User First for NGOs & Enterprise) */}
        <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-zinc-900/40 p-3 rounded border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white block">
              10+ Años
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-tight block">
              Trayectoria ejecutiva
            </span>
          </div>

          <div className="bg-zinc-900/40 p-3 rounded border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white block">
              +150
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-tight block">
              Producciones y galas
            </span>
          </div>

          <div className="bg-zinc-900/40 p-3 rounded border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white block">
              99.8%
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-tight block">
              Rigor técnico y puntualidad
            </span>
          </div>

          <div className="bg-zinc-900/40 p-3 rounded border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white block">
              0
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-tight block">
              Imprevistos sin resolver
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
