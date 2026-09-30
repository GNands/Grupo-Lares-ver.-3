'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';

interface LateralControlsProps {
  currentSection: number;
  totalSections: number;
  sectionNames: string[];
  onPrev: () => void;
  onNext: () => void;
  onNavigate: (index: number) => void;
  scrollProgress: number; // 0 to 1
}

export function LateralControls({
  currentSection,
  totalSections,
  sectionNames,
  onPrev,
  onNext,
  onNavigate,
  scrollProgress,
}: LateralControlsProps) {
  const currentTitle = sectionNames[currentSection] || '';

  return (
    <aside
      aria-label="Controles de navegación lateral"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/90 backdrop-blur-md border-t border-zinc-800/80 px-4 sm:px-8 py-3 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Current Section Indicator with natural prose */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs tracking-wider text-zinc-400 uppercase">
            <Compass className="w-3.5 h-3.5 text-rose-500 animate-spin-slow" />
            <span className="font-mono text-white text-xs font-semibold tabular-nums">
              0{currentSection + 1}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="font-mono text-zinc-400 text-xs tabular-nums">
              0{totalSections}
            </span>
          </div>

          <div className="hidden sm:block h-3.5 w-px bg-zinc-800" />

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-200 tracking-wide uppercase">
              {currentTitle}
            </span>
            <span className="text-xs text-zinc-500 hidden md:inline">
              · Navegación lateral activa
            </span>
          </div>
        </div>

        {/* Center: Interactive Scrubber / Step track */}
        <div className="flex-1 max-w-md mx-2 sm:mx-6 flex items-center gap-1.5">
          {sectionNames.map((name, idx) => {
            const isActive = currentSection === idx;
            const isPast = currentSection > idx;
            return (
              <button
                key={name}
                onClick={() => onNavigate(idx)}
                title={`Ir a ${name}`}
                aria-label={`Ir a sección 0${idx + 1}: ${name}`}
                className="group relative flex-1 py-2 focus:outline-none"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-rose-500 shadow-sm shadow-rose-500/50 scale-y-125'
                      : isPast
                      ? 'bg-zinc-600 group-hover:bg-zinc-400'
                      : 'bg-zinc-800 group-hover:bg-zinc-600'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Prev & Next Action Controls + Keyboard Hint */}
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline text-[11px] text-zinc-400 font-mono tracking-tight mr-1">
            Usa flechas [←] [→] o rueda
          </span>

          <button
            onClick={onPrev}
            disabled={currentSection === 0}
            className={`p-2 rounded border border-zinc-800 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-500 ${
              currentSection === 0
                ? 'text-zinc-600 border-zinc-900 cursor-not-allowed opacity-40'
                : 'text-zinc-300 hover:text-white hover:border-zinc-700 bg-zinc-900/60 active:bg-zinc-800'
            }`}
            aria-label="Sección anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onNext}
            disabled={currentSection === totalSections - 1}
            className={`px-3 py-1.5 rounded border border-zinc-800 transition-colors flex items-center gap-1 text-xs font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-500 ${
              currentSection === totalSections - 1
                ? 'text-zinc-600 border-zinc-900 cursor-not-allowed opacity-40'
                : 'text-zinc-200 hover:text-white hover:border-zinc-700 bg-zinc-900/60 active:bg-zinc-800'
            }`}
            aria-label="Siguiente sección"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
