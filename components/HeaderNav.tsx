'use client';

import React, { useState } from 'react';
import { ArrowRight, Menu, X, Disc3, Sparkles } from 'lucide-react';

interface HeaderNavProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
  sectionNames: string[];
}

export function HeaderNav({
  currentSection,
  totalSections,
  onNavigate,
  sectionNames,
}: HeaderNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Zone 1: Single element wordmark (Top Bar Contract) */}
        <button
          onClick={() => onNavigate(0)}
          className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-500"
          aria-label="Ir a Inicio Grupo Lares"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors uppercase">
            Grupo Lares
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block animate-pulse" />
        </button>

        {/* Zone 2: 6 Clean single-line nav links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-widest font-medium"
          aria-label="Navegación principal"
        >
          {sectionNames.map((name, idx) => {
            const isActive = currentSection === idx;
            return (
              <button
                key={name}
                onClick={() => onNavigate(idx)}
                className={`transition-colors py-1 flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-500 ${
                  isActive
                    ? 'text-white font-semibold border-b border-rose-500'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span className={`text-[10px] tabular-nums ${isActive ? 'text-rose-500' : 'text-zinc-500'}`}>
                  0{idx + 1}
                </span>
                <span>{name}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate(5)}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-sm transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-sm shadow-rose-950/40"
          >
            <span>Hagámoslo posible</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-500"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-4 pb-3 border-t border-zinc-800 bg-[#0c0c0e]/95 px-2 rounded-b-lg shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {sectionNames.map((name, idx) => {
              const isActive = currentSection === idx;
              return (
                <button
                  key={name}
                  onClick={() => {
                    onNavigate(idx);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded text-sm uppercase tracking-wider flex items-center justify-between ${
                    isActive
                      ? 'bg-zinc-800/80 text-white font-semibold border-l-2 border-rose-500'
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-rose-500 font-mono">0{idx + 1}</span>
                    <span>{name}</span>
                  </span>
                  {isActive && <span className="text-[10px] text-zinc-400 uppercase">Activo</span>}
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 px-2">
            <span>Raíz Andina · Estándar Global</span>
            <span className="text-zinc-500">Lima, Perú</span>
          </div>
        </div>
      )}
    </header>
  );
}
