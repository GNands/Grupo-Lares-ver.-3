'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Eye, Sparkles, Building2, Calendar, CheckCircle2, Filter } from 'lucide-react';
import { PROJECTS, Project } from '../data/content';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onWantSimilar: (project: Project) => void;
  onNavigateToNext: () => void;
}

export function PortfolioSection({
  onSelectProject,
  onWantSimilar,
  onNavigateToNext,
}: PortfolioSectionProps) {
  const [filter, setFilter] = useState<'all' | 'Wiñaypaq' | 'Cinema Pro' | 'Integral'>('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.division === filter || (filter === 'Integral' && p.division === 'Integral'));

  return (
    <section
      aria-label="04 Portafolio y Evidencia"
      className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#0a0a0c]"
    >
      <div className="relative z-10 max-w-6xl w-full pt-16 pb-20 flex flex-col justify-between h-full">
        {/* Top Header & Interactive Filter Bar (Segmented Controls) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-zinc-200 font-mono font-medium">04 // Evidencia & Casos</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Soluciones en Contextos Reales</span>
          </div>

          {/* Interactive filter tabs (allowed functional controls per Constitution) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                filter === 'all'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Todos ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('Wiñaypaq')}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                filter === 'Wiñaypaq'
                  ? 'bg-rose-900/60 text-rose-200 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Wiñaypaq (Artes)
            </button>
            <button
              onClick={() => setFilter('Cinema Pro')}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                filter === 'Cinema Pro'
                  ? 'bg-blue-900/60 text-blue-200 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Cinema Pro (Video)
            </button>
            <button
              onClick={() => setFilter('Integral')}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                filter === 'Integral'
                  ? 'bg-zinc-700 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Producción Integral
            </button>
          </div>
        </div>

        {/* Introduction text */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Portafolio de Producciones Seleccionadas
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mt-1 leading-relaxed">
              Mostramos cómo llevamos ideas a escena y a pantalla: concepto, ejecución y medición.
              Explora casos reales para instituciones públicas, ONGs y empresas privadas.
            </p>
          </div>
          <div className="text-xs text-zinc-400 font-mono hidden md:block text-right">
            <span>Haz clic en un caso para ver ficha técnica y video</span>
          </div>
        </div>

        {/* Horizontal Project Carousel / Bento Grid with smooth inner scroll */}
        <div className="my-auto py-2 overflow-x-auto no-scrollbar flex gap-5 items-stretch h-[calc(100%-190px)]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[300px] sm:w-[350px] lg:w-[370px] flex-shrink-0 bg-[#0d0d10] border border-zinc-800/90 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300 shadow-xl"
            >
              {/* Media Thumbnail */}
              <div
                className="relative h-44 w-full bg-zinc-950 overflow-hidden cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-black/30" />

                {/* Division pill / indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                      project.division === 'Wiñaypaq'
                        ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                        : project.division === 'Cinema Pro'
                        ? 'bg-blue-950/80 text-blue-300 border border-blue-500/40'
                        : 'bg-zinc-900/80 text-zinc-200 border border-zinc-700'
                    }`}
                  >
                    {project.division}
                  </span>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-full text-white">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Date / Location tag */}
                <div className="absolute bottom-2 left-3 right-3 text-[11px] text-zinc-300 font-mono flex items-center justify-between">
                  <span className="truncate">{project.location}</span>
                  <span className="text-zinc-400">{project.videoDuration}</span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-rose-400 uppercase font-mono tracking-wider mb-1 truncate">
                    {project.client}
                  </div>
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base font-bold text-white leading-snug group-hover:text-rose-400 transition-colors cursor-pointer mb-2 line-clamp-2"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-3">
                    {project.tagline}
                  </p>
                </div>

                {/* Key Metrics Snippet */}
                <div className="pt-2 border-t border-zinc-800/60 mb-3 grid grid-cols-2 gap-2 text-xs">
                  {project.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="bg-zinc-950/60 p-1.5 rounded border border-zinc-900">
                      <span className="font-mono font-bold text-white block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-zinc-400 truncate block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Action Row */}
                <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 py-2 px-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-medium rounded border border-zinc-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Ver caso</span>
                  </button>

                  <button
                    onClick={() => onWantSimilar(project)}
                    title="Pedir cotización de proyecto similar"
                    className="py-2 px-3 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-medium rounded transition-colors whitespace-nowrap"
                  >
                    Quiero parecido
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contextual CTA & Link */}
        <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
          <span>{PROJECTS.length} Proyectos documentados con ficha técnica cerrada</span>
          <button
            onClick={onNavigateToNext}
            className="hover:text-zinc-200 flex items-center gap-1 transition-colors"
          >
            <span>Ver red de Clientes e Instituciones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
