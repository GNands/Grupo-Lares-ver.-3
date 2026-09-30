'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreProjects: () => void;
}

const CHAPTERS = [
  {
    time: '0:00',
    title: 'Apertura: Andrés Chimango Lares en el Gran Teatro Nacional',
    division: 'Wiñaypaq',
    image: '/images/hero_stage_production_1790798317544.jpg'
  },
  {
    time: '0:45',
    title: 'FestiAfro: Producción masiva urbana y multicámara en directo',
    division: 'Wiñaypaq & Cinema Pro',
    image: '/images/festi_afro_culture_1790798340020.jpg'
  },
  {
    time: '1:30',
    title: 'Solución Huaycoloro: Documental corporativo e ingeniería civil',
    division: 'Cinema Pro',
    image: '/images/corporate_infrastructure_film_1790798351115.jpg'
  },
  {
    time: '2:15',
    title: 'Voces del Mantaro: Cine comunitario y resiliencia territorial',
    division: 'Cinema Pro',
    image: '/images/audiovisual_cinema_shoot_1790798329579.jpg'
  }
];

export function ShowreelModal({ isOpen, onClose, onExploreProjects }: ShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentChapter = CHAPTERS[activeChapter];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="showreel-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#09090b] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <h2 id="showreel-title" className="text-sm font-semibold tracking-wide uppercase text-white">
              Showreel Institucional · Grupo Lares
            </h2>
            <span className="text-xs text-zinc-400 hidden sm:inline">
              Wiñaypaq & Cinema Pro
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-700/60"
            aria-label="Cerrar reproductor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          <Image
            src={currentChapter.image}
            alt={currentChapter.title}
            fill
            className="object-cover opacity-85 scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Cinematic Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

          {/* Center Play/Pause Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-600/90 text-white flex items-center justify-center hover:bg-rose-500 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-rose-950/50"
            aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
          >
            {isPlaying ? <Pause className="w-7 h-7 sm:w-8 sm:h-8" /> : <Play className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5" />}
          </button>

          {/* Current Chapter Overlay */}
          <div className="absolute top-6 left-6 z-20 max-w-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 bg-black/60 px-2 py-0.5 rounded border border-rose-500/20 mb-2 inline-block">
              {currentChapter.division} · Capítulo {activeChapter + 1}/4
            </span>
            <p className="text-white text-base sm:text-lg font-semibold drop-shadow-md">
              {currentChapter.title}
            </p>
          </div>

          {/* Audio & Time Control bottom bar */}
          <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded bg-black/60 hover:bg-black/90 text-zinc-300 hover:text-white transition-colors border border-white/10"
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-zinc-300">
                0{Math.floor(progress / 30)}:{String(progress % 60).padStart(2, '0')} / 03:00
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-zinc-400 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>4K Master Cinema Color</span>
            </div>
          </div>

          {/* Scrub line */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-800 z-20">
            <div
              className="h-full bg-rose-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Chapters Strip */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {CHAPTERS.map((chap, idx) => (
            <button
              key={chap.title}
              onClick={() => {
                setActiveChapter(idx);
                setProgress(idx * 25);
              }}
              className={`text-left p-2.5 rounded border transition-all ${
                activeChapter === idx
                  ? 'bg-zinc-800/80 border-rose-500 text-white'
                  : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              <span className="text-[10px] font-mono text-rose-400 block mb-1">
                {chap.time} · {chap.division}
              </span>
              <span className="text-xs font-medium line-clamp-2 leading-tight">
                {chap.title}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#09090b] border-t border-zinc-800/60 flex items-center justify-between">
          <p className="text-xs text-zinc-400">
            Piezas de muestra de producción artística y audiovisual.
          </p>
          <button
            onClick={() => {
              onClose();
              onExploreProjects();
            }}
            className="text-xs font-semibold text-rose-400 hover:text-rose-300 underline underline-offset-4"
          >
            Ver fichas de proyectos completas →
          </button>
        </div>
      </div>
    </div>
  );
}
