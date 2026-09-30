'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  Theater,
  Clapperboard,
  Palette,
  Lightbulb,
  Clock,
  Users,
  Video,
  Share2,
  Music,
  Activity,
  Radio,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import {
  WINAYPAQ_SERVICES,
  CINEMA_PRO_SERVICES,
  FAQS_WINAYPAQ,
  FAQS_CINEMA_PRO,
} from '../data/content';

interface ServicesSectionProps {
  onSelectServiceForBrief: (serviceName: string) => void;
  onNavigateToNext: () => void;
}

export function ServicesSection({
  onSelectServiceForBrief,
  onNavigateToNext,
}: ServicesSectionProps) {
  const [activeBranch, setActiveBranch] = useState<'winaypaq' | 'cinema-pro'>('winaypaq');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('w1');
  const [showFaq, setShowFaq] = useState(false);

  const isWinaypaq = activeBranch === 'winaypaq';

  const branchServices = isWinaypaq ? WINAYPAQ_SERVICES : CINEMA_PRO_SERVICES;
  const currentService =
    branchServices.find((s) => s.id === selectedServiceId) || branchServices[0];
  const branchFaqs = isWinaypaq ? FAQS_WINAYPAQ : FAQS_CINEMA_PRO;

  const branchIconMap: Record<string, React.ReactNode> = {
    w1: <Palette className="w-4 h-4 text-rose-400" />,
    w2: <Lightbulb className="w-4 h-4 text-rose-400" />,
    w3: <Clock className="w-4 h-4 text-rose-400" />,
    w4: <Users className="w-4 h-4 text-rose-400" />,
    c1: <Video className="w-4 h-4 text-blue-400" />,
    c2: <Share2 className="w-4 h-4 text-blue-400" />,
    c3: <Music className="w-4 h-4 text-blue-400" />,
    c4: <Activity className="w-4 h-4 text-blue-400" />,
    c5: <Radio className="w-4 h-4 text-blue-400" />,
    c6: <Sliders className="w-4 h-4 text-blue-400" />,
  };

  return (
    <section
      aria-label="03 Capacidades y Servicios"
      className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#09090b]"
    >
      <div className="relative z-10 max-w-6xl w-full pt-16 pb-20 flex flex-col justify-between h-full">
        {/* Top Kicker & Hub Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-zinc-200 font-mono font-medium">03 // Hub de Servicios</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Creatividad con Método</span>
          </div>

          {/* Wing Selector Tabs */}
          <div className="flex items-center p-1 bg-zinc-950 border border-zinc-800 rounded-lg">
            <button
              onClick={() => {
                setActiveBranch('winaypaq');
                setSelectedServiceId('w1');
              }}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center gap-2 ${
                activeBranch === 'winaypaq'
                  ? 'bg-rose-600 text-white shadow-sm shadow-rose-950'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Theater className="w-3.5 h-3.5" />
              <span>Wiñaypaq (Artes & Escena)</span>
            </button>

            <button
              onClick={() => {
                setActiveBranch('cinema-pro');
                setSelectedServiceId('c1');
              }}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center gap-2 ${
                activeBranch === 'cinema-pro'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-950'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span>Cinema Pro (Audiovisual)</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-2 items-stretch h-[calc(100%-150px)]">
          {/* Left Column (5 cols): Service Selector List */}
          <div className="lg:col-span-5 flex flex-col justify-between overflow-y-auto custom-scrollbar pr-1">
            <div>
              <div className="mb-3">
                <span
                  className={`text-[11px] font-mono uppercase tracking-widest block mb-1 ${
                    isWinaypaq ? 'text-rose-400' : 'text-blue-400'
                  }`}
                >
                  {isWinaypaq
                    ? 'Wiñaypaq · Producción Artística y Eventos'
                    : 'Cinema Pro · Producción Audiovisual Integral'}
                </span>
                <p className="text-xs text-zinc-300 leading-snug">
                  {isWinaypaq
                    ? 'Diseñamos y operamos tu evento para crear experiencias memorables con los más altos estándares de calidad y stage management milimétrico.'
                    : 'Del brief al producto final. Planeamos, filmamos y editamos desde spots hasta documentales de alta complejidad técnica.'}
                </p>
              </div>

              {/* Service Cards list */}
              <div className="space-y-2">
                {branchServices.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedServiceId(service.id);
                        setShowFaq(false);
                      }}
                      className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 ${
                        isSelected
                          ? isWinaypaq
                            ? 'bg-rose-950/30 border-rose-500 text-white'
                            : 'bg-blue-950/30 border-blue-500 text-white'
                          : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {branchIconMap[service.id]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold block leading-tight truncate">
                          {service.title}
                        </span>
                        <span className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                          {service.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Toggle FAQ button */}
            <div className="pt-3 border-t border-zinc-800/80 mt-2 flex items-center justify-between">
              <button
                onClick={() => setShowFaq(!showFaq)}
                className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-zinc-500" />
                <span>
                  {showFaq ? 'Ocultar preguntas frecuentes' : 'Ver Mini-FAQ operativa'}
                </span>
              </button>

              <span className="text-[11px] font-mono text-zinc-400">
                {branchServices.length} Especialidades
              </span>
            </div>
          </div>

          {/* Right Column (7 cols): Deep-Dive Inspection Panel / Interactive Discovery */}
          <div className="lg:col-span-7 bg-[#0d0d10] border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Visual ambient accent in background */}
            <div
              className={`absolute top-0 right-0 w-72 h-72 rounded-full filter blur-[100px] pointer-events-none opacity-15 ${
                isWinaypaq ? 'bg-rose-600' : 'bg-blue-600'
              }`}
            />

            {!showFaq ? (
              <div className="relative z-10 space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                      Ficha de Capacidad Operativa
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {currentService.title}
                    </h3>
                  </div>

                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded uppercase ${
                      isWinaypaq
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}
                  >
                    {isWinaypaq ? 'Wiñaypaq' : 'Cinema Pro'}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-zinc-300">
                  <div className="bg-zinc-950/70 p-4 rounded-lg border border-zinc-800/80">
                    <span className="text-xs uppercase text-zinc-400 font-mono block mb-1.5">
                      Enfoque & Metodología
                    </span>
                    <p className="leading-relaxed text-zinc-200">
                      {currentService.details}
                    </p>
                  </div>

                  {/* Standard Operating Model Guarantee */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-white block">
                          Supervisión Integral
                        </span>
                        <span className="text-zinc-400">
                          Núcleo de dirección senior en control directo del montaje y la entrega.
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-white block">
                          Cero Sorpresas
                        </span>
                        <span className="text-zinc-400">
                          Cronogramas realistas, ensayos cronometrados y riders validados.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Mini-FAQ View */
              <div className="relative z-10 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-0.5">
                      Transparencia Operativa
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Preguntas Frecuentes · {isWinaypaq ? 'Wiñaypaq' : 'Cinema Pro'}
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowFaq(false)}
                    className="text-xs text-rose-400 hover:text-white"
                  >
                    Volver a ficha
                  </button>
                </div>

                <div className="space-y-3">
                  {branchFaqs.map((faq, i) => (
                    <div key={i} className="bg-zinc-950/80 p-3.5 rounded border border-zinc-800/80">
                      <h4 className="text-xs font-semibold text-zinc-100 mb-1 flex items-center gap-2">
                        <span className="text-rose-500 font-mono">Q.</span>
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-xs text-zinc-300 pl-4 border-l border-zinc-800 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions with Contextual CTAs from the Document */}
            <div className="relative z-10 pt-4 border-t border-zinc-800 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-400">
                {isWinaypaq
                  ? 'Disponibilidad para Lima, provincias e internacional.'
                  : 'Entregables optimizados por plataforma y canal.'}
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() =>
                    onSelectServiceForBrief(
                      isWinaypaq
                        ? `Wiñaypaq: ${currentService.title}`
                        : `Cinema Pro: ${currentService.title}`
                    )
                  }
                  className={`w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white rounded transition-colors flex items-center justify-center gap-1.5 shadow-md ${
                    isWinaypaq
                      ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-950/60'
                      : 'bg-blue-600 hover:bg-blue-500 shadow-blue-950/60'
                  }`}
                >
                  <span>
                    {isWinaypaq ? 'Programemos tu evento' : 'Cotiza tu producción'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Capacidades Complementarias: Wiñaypaq + Cinema Pro</span>
          <button
            onClick={onNavigateToNext}
            className="hover:text-zinc-200 flex items-center gap-1 transition-colors"
          >
            <span>Ver evidencia en Portafolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
