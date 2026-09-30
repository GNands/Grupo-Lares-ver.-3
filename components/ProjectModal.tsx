'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, ArrowRight, Play, MapPin, Calendar, Building2, Layers } from 'lucide-react';
import { Project } from './data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onWantSimilar: (project: Project) => void;
}

export function ProjectModal({ project, onClose, onWantSimilar }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0f0f12] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col my-auto text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 bg-zinc-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black/90 transition-colors border border-white/10 focus:outline-none"
            aria-label="Cerrar ficha de proyecto"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Division Badge & Meta */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
              <span
                className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                  project.division === 'Wiñaypaq'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : project.division === 'Cinema Pro'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                }`}
              >
                {project.division}
              </span>
              <span className="text-zinc-400">·</span>
              <span className="text-zinc-300 font-medium">{project.serviceType}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar text-sm leading-relaxed">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-zinc-800/80">
            <div>
              <span className="text-xs uppercase text-zinc-400 font-mono block mb-1">Cliente</span>
              <span className="text-zinc-100 font-medium flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                {project.client}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase text-zinc-400 font-mono block mb-1">Lugar y Fecha</span>
              <span className="text-zinc-100 font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                {project.date}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase text-zinc-400 font-mono block mb-1">Ubicación</span>
              <span className="text-zinc-100 font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {project.location}
              </span>
            </div>
          </div>

          {/* Narrative Columns: Objetivo vs Solución */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/60 p-4 rounded-lg border border-zinc-800/60">
              <h3 className="text-xs uppercase tracking-wider text-rose-400 font-mono mb-2">
                01. Objetivo & Desafío
              </h3>
              <p className="text-zinc-300 leading-normal">{project.objective}</p>
            </div>
            <div className="bg-zinc-900/60 p-4 rounded-lg border border-zinc-800/60">
              <h3 className="text-xs uppercase tracking-wider text-blue-400 font-mono mb-2">
                02. Solución Implementada
              </h3>
              <p className="text-zinc-300 leading-normal">{project.solution}</p>
            </div>
          </div>

          {/* Rol de Grupo Lares */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-2">
              Rol de Grupo Lares
            </h3>
            <p className="text-zinc-200 bg-zinc-900/40 p-3.5 rounded border border-zinc-800/40">
              {project.laresRole}
            </p>
          </div>

          {/* Capacidades & Entregables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-2">
                Capacidades Involucradas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs bg-zinc-800/70 border border-zinc-700/60 px-2.5 py-1 rounded text-zinc-200"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-2">
                Entregables Principales
              </h3>
              <ul className="space-y-1.5">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resultado & Métricas */}
          <div className="pt-4 border-t border-zinc-800/80">
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-2">
              Resultado & Impacto Verificado
            </h3>
            <p className="text-zinc-300 mb-4">{project.impact}</p>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-zinc-900/80 border border-zinc-800 p-3 rounded">
                  <span className="text-xl sm:text-2xl font-bold text-white font-mono block">
                    {metric.value}
                  </span>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-tight">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial if present */}
          {project.featuredQuote && (
            <div className="bg-zinc-950 p-4 rounded-lg border-l-2 border-rose-500 text-xs italic text-zinc-300">
              <p className="mb-2">“{project.featuredQuote.text}”</p>
              <div className="font-semibold text-zinc-100 not-italic">
                {project.featuredQuote.author} · <span className="text-zinc-400 font-normal">{project.featuredQuote.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Commercial CTA */}
        <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400 text-center sm:text-left">
            ¿Tienes un desafío similar en tu organización?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs text-zinc-300 hover:text-white transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => onWantSimilar(project)}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 rounded transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Quiero algo parecido</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
