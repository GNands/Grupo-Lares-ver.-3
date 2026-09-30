'use client';

import React, { useState } from 'react';
import { ArrowRight, Building2, Globe, HeartHandshake, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { CLIENTS, Client, PROJECTS, Project } from '../data/content';

interface ClientsSectionProps {
  onSelectProjectById: (projectId: string) => void;
  onNavigateToBrief: () => void;
}

export function ClientsSection({
  onSelectProjectById,
  onNavigateToBrief,
}: ClientsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedClient, setSelectedClient] = useState<Client>(CLIENTS[0]);

  const categories = [
    'all',
    'Instituciones Públicas',
    'ONG & Cooperación',
    'Empresas Privadas',
    'Cultura & Espectáculos',
  ];

  const filteredClients =
    selectedCategory === 'all'
      ? CLIENTS
      : CLIENTS.filter((c) => c.category === selectedCategory);

  const relatedProject = selectedClient.relatedProjectId
    ? PROJECTS.find((p) => p.id === selectedClient.relatedProjectId)
    : null;

  return (
    <section
      aria-label="05 Clientes y Alianzas"
      className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#09090b]"
    >
      <div className="relative z-10 max-w-6xl w-full pt-16 pb-20 flex flex-col justify-between h-full">
        {/* Top Kicker & Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-zinc-200 font-mono font-medium">05 // Confianza & Alianzas</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Comunidad con Propósito</span>
          </div>

          <div className="flex items-center gap-1 p-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                  selectedCategory === cat
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat === 'all' ? 'Todos los sectores' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Section Headline */}
        <div className="pt-1">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conoce a nuestros amigos.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mt-1 leading-relaxed">
            Una comunidad que le da valor y propósito a lo que hacemos. Colaboramos como socio
            técnico especializado con ministerios, organismos multilaterales, ONGs territoriales y corporaciones multinacionales.
          </p>
        </div>

        {/* Interactive Layout: Left Client Grid, Right Relationship Dossier */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-2 items-stretch h-[calc(100%-190px)]">
          {/* Left Column (7 cols): Client Cards Grid */}
          <div className="lg:col-span-7 overflow-y-auto custom-scrollbar pr-1 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
            {filteredClients.map((client) => {
              const isSelected = selectedClient.id === client.id;
              return (
                <button
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-zinc-800/90 border-rose-500 shadow-lg text-white'
                      : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
                  }`}
                >
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block mb-1">
                      {client.category}
                    </span>
                    <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                      {client.name}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                      {client.scope}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px]">
                    <span className={isSelected ? 'text-rose-400 font-medium' : 'text-zinc-400'}>
                      {isSelected ? 'Inspeccionando' : 'Ver relación'}
                    </span>
                    {client.relatedProjectId && (
                      <span className="text-[10px] font-mono text-zinc-400">
                        Tiene caso en portafolio
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (5 cols): Selected Client Profile & Related Case link */}
          <div className="lg:col-span-5 bg-[#0d0d10] border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-4">
              <div className="border-b border-zinc-800 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 block mb-1">
                  Relación Institucional
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {selectedClient.name}
                </h3>
                <span className="text-xs text-zinc-400 font-mono">
                  {selectedClient.category}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <div className="bg-zinc-950/80 p-3.5 rounded border border-zinc-800/80">
                  <span className="text-[11px] uppercase text-zinc-400 font-mono block mb-1">
                    Descripción de la Entidad
                  </span>
                  <p className="text-zinc-200 leading-relaxed">
                    {selectedClient.description}
                  </p>
                </div>

                <div className="bg-zinc-950/80 p-3.5 rounded border border-zinc-800/80">
                  <span className="text-[11px] uppercase text-zinc-400 font-mono block mb-1">
                    Alcance del Trabajo de Grupo Lares
                  </span>
                  <p className="text-zinc-200 leading-relaxed">
                    {selectedClient.scope}
                  </p>
                </div>

                {/* If there is a linked case study in the portfolio */}
                {relatedProject && (
                  <div className="p-3.5 bg-rose-950/20 border border-rose-500/30 rounded-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block mb-1">
                      Proyecto Documentado
                    </span>
                    <h4 className="text-xs font-semibold text-white mb-1">
                      {relatedProject.title}
                    </h4>
                    <p className="text-[11px] text-zinc-300 line-clamp-2 mb-2">
                      {relatedProject.tagline}
                    </p>
                    <button
                      onClick={() => onSelectProjectById(relatedProject.id)}
                      className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1.5 underline underline-offset-4"
                    >
                      <span>Abrir ficha completa del proyecto</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-zinc-800 mt-4 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Confianza institucional verificada.
              </span>
              <button
                onClick={onNavigateToBrief}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5"
              >
                <span>Iniciar alianza</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Relaciones de largo plazo con organizaciones líderes</span>
          <button
            onClick={onNavigateToBrief}
            className="hover:text-zinc-200 flex items-center gap-1 transition-colors"
          >
            <span>Ir al Brief Comercial y Contacto Directo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
