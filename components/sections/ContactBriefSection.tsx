'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  Clock,
  Sparkles,
  Paperclip,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

interface ContactBriefSectionProps {
  initialServiceNeed?: string;
  initialNotes?: string;
  onNavigateToStart?: () => void;
}

export function ContactBriefSection({
  initialServiceNeed = '',
  initialNotes = '',
  onNavigateToStart,
}: ContactBriefSectionProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    need: initialServiceNeed || 'Producción de evento',
    summary: initialNotes || '',
    // Conditional Event Fields
    eventDate: '',
    eventLocation: 'Lima, Perú',
    eventCapacity: '',
    eventType: 'Gala / Festival / Conferencia',
    // Conditional Video Fields
    videoPieceType: 'Video Institucional / Documental',
    videoPlatforms: '16:9 Máster y 9:16 Redes',
    videoDeadline: '',
    // Optional
    budgetRange: 'Por definir / En evaluación',
    hasAttachment: false,
    fileName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const NEED_OPTIONS = [
    'Producción de evento',
    'Producción audiovisual',
    'Activación / BTL',
    'Comunicación institucional',
    'Producción artística',
    'Cobertura / streaming',
    'No estoy seguro todavía',
    'Otro',
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Este campo es obligatorio.';
    if (!formData.organization.trim()) errs.organization = 'Este campo es obligatorio.';
    if (!formData.email.trim()) {
      errs.email = 'Este campo es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Revisa que el email tenga el formato correcto.';
    }
    if (!formData.summary.trim()) errs.summary = 'Este campo es obligatorio.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real brief dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const isEventMode =
    formData.need === 'Producción de evento' ||
    formData.need === 'Producción artística';

  const isVideoMode =
    formData.need === 'Producción audiovisual' ||
    formData.need === 'Cobertura / streaming' ||
    formData.need === 'Comunicación institucional';

  return (
    <section
      aria-label="06 Contacto y Brief Comercial"
      className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#0a0a0c]"
    >
      <div className="relative z-10 max-w-6xl w-full pt-16 pb-20 flex flex-col justify-between h-full">
        {/* Top Kicker */}
        <div className="flex items-center justify-between gap-4 pt-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-zinc-200 font-mono font-medium">06 // Conversación & Brief</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Ruta Clara & Tiempos Realistas</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="hidden sm:inline">contacto@grupolares.pe</span>
            <span className="text-zinc-600">·</span>
            <span>+51 987 654 321</span>
          </div>
        </div>

        {/* Section Intro */}
        <div className="pt-1">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conversemos tu proyecto.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-3xl mt-1 leading-relaxed">
            Cuéntanos el objetivo, el tipo de pieza o evento y el plazo estimado. Te responderemos con una
            ruta clara de producción y tiempos realistas. Si prefieres, escríbenos directo por WhatsApp o correo.
          </p>
        </div>

        {/* Brief Container: Left Form, Right Contact Channels */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-2 items-stretch h-[calc(100%-190px)]">
          {/* Left Column (8 cols): Progressive Brief Form */}
          <div className="lg:col-span-8 bg-[#0e0e12] border border-zinc-800/90 rounded-xl p-5 sm:p-6 overflow-y-auto custom-scrollbar shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-rose-500/20 text-rose-500 border border-rose-500/40 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  ¡Gracias! Recibimos tu mensaje.
                </h3>
                <p className="text-zinc-300 text-sm max-w-md">
                  Te contactaremos en un máximo de <strong>24 horas hábiles</strong> con una propuesta y ruta técnica de trabajo.
                </p>
                <div className="p-4 bg-zinc-950/80 rounded-lg border border-zinc-800/80 text-xs text-zinc-400 max-w-sm">
                  <span>Resumen de solicitud: </span>
                  <span className="text-zinc-200 font-medium">{formData.need}</span>
                  <span className="block mt-1 font-mono text-[11px] text-zinc-500">
                    Organización: {formData.organization}
                  </span>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                  <a
                    href={`https://wa.me/51987654321?text=${encodeURIComponent(
                      `Hola Grupo Lares, acabo de enviar un brief a nombre de ${formData.organization} para el proyecto de ${formData.need}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                  >
                    Abrir WhatsApp directo
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                {/* Bloque 1 — Quién eres */}
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-rose-400 block mb-2">
                    Bloque 1 — Quién eres
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-zinc-400 block mb-1">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ej. Carmen Velásquez"
                        className={`w-full bg-zinc-950 border px-3 py-2 rounded text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-rose-500 ${
                          errors.name ? 'border-rose-500' : 'border-zinc-800'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-[11px] text-zinc-400 block mb-1">
                        Empresa / Institución / Organización *
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Ej. Fundación Andina / Mincul / CWE"
                        className={`w-full bg-zinc-950 border px-3 py-2 rounded text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-rose-500 ${
                          errors.organization ? 'border-rose-500' : 'border-zinc-800'
                        }`}
                      />
                      {errors.organization && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.organization}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-[11px] text-zinc-400 block mb-1">
                        Correo Corporativo / Institucional *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="carmen@organizacion.org"
                        className={`w-full bg-zinc-950 border px-3 py-2 rounded text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-rose-500 ${
                          errors.email ? 'border-rose-500' : 'border-zinc-800'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-[11px] text-zinc-400 block mb-1">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+51 987 654 321"
                        className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 rounded text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Bloque 2 — Qué necesitas (Buttons / Segmented selection) */}
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-rose-400 block mb-2">
                    Bloque 2 — ¿Qué necesitas producir?
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {NEED_OPTIONS.map((opt) => {
                      const isSelected = formData.need === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleInputChange('need', opt)}
                          className={`p-2 text-left rounded text-xs border transition-all ${
                            isSelected
                              ? 'bg-rose-950/60 border-rose-500 text-white font-medium'
                              : 'bg-zinc-950/70 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                          }`}
                        >
                          <span className="block truncate">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bloque 3 — Cuéntanos brevemente */}
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-rose-400 block mb-1">
                    Bloque 3 — Explícanos tu objetivo o proyecto *
                  </span>
                  <textarea
                    rows={3}
                    value={formData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    placeholder="Describe el propósito del evento o video, fecha estimada, audiencia esperada o problemática a resolver..."
                    className={`w-full bg-zinc-950 border px-3 py-2 rounded text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-rose-500 leading-relaxed ${
                      errors.summary ? 'border-rose-500' : 'border-zinc-800'
                    }`}
                  />
                  {errors.summary && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.summary}
                    </span>
                  )}
                </div>

                {/* Bloque 4 — Datos útiles condicionales */}
                <div className="bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/80">
                  <span className="text-[11px] uppercase font-mono tracking-widest text-zinc-400 block mb-2">
                    Bloque 4 — Datos útiles condicionales
                  </span>

                  {isEventMode && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 animate-fadeIn">
                      <div>
                        <label className="text-[10px] text-zinc-400 block mb-1">
                          Fecha estimada del evento
                        </label>
                        <input
                          type="text"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange('eventDate', e.target.value)}
                          placeholder="Ej. Mediados de Julio 2026"
                          className="w-full bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded text-zinc-100 text-xs focus:outline-none focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-400 block mb-1">
                          Ciudad / Venue previsto
                        </label>
                        <input
                          type="text"
                          value={formData.eventLocation}
                          onChange={(e) => handleInputChange('eventLocation', e.target.value)}
                          placeholder="Teatro / Hotel / Plaza pública"
                          className="w-full bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded text-zinc-100 text-xs focus:outline-none focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-400 block mb-1">
                          Aforo aproximado
                        </label>
                        <input
                          type="text"
                          value={formData.eventCapacity}
                          onChange={(e) => handleInputChange('eventCapacity', e.target.value)}
                          placeholder="Ej. 300 / 1,500 / Masivo"
                          className="w-full bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded text-zinc-100 text-xs focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>
                  )}

                  {isVideoMode && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 animate-fadeIn">
                      <div>
                        <label className="text-[10px] text-zinc-400 block mb-1">
                          Tipo de pieza
                        </label>
                        <input
                          type="text"
                          value={formData.videoPieceType}
                          onChange={(e) => handleInputChange('videoPieceType', e.target.value)}
                          placeholder="Corporativo / Spot / Documental"
                          className="w-full bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded text-zinc-100 text-xs focus:outline-none focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-400 block mb-1">
                          Plataformas y Formatos
                        </label>
                        <input
                          type="text"
                          value={formData.videoPlatforms}
                          onChange={(e) => handleInputChange('videoPlatforms', e.target.value)}
                          placeholder="16:9, 9:16 reels, Streaming"
                          className="w-full bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded text-zinc-100 text-xs focus:outline-none focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-400 block mb-1">
                          Fecha límite de entrega
                        </label>
                        <input
                          type="text"
                          value={formData.videoDeadline}
                          onChange={(e) => handleInputChange('videoDeadline', e.target.value)}
                          placeholder="Plazo estimado"
                          className="w-full bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded text-zinc-100 text-xs focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>
                  )}

                  {/* Budget & Mock File Attachment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-[10px] text-zinc-400 block mb-1">
                        Presupuesto aproximado (opcional)
                      </label>
                      <input
                        type="text"
                        value={formData.budgetRange}
                        onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                        placeholder="Rango o partida presupuestal asignada"
                        className="w-full bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded text-zinc-100 text-xs focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-400 block mb-1">
                        Adjuntar Brief / TDR / Referencias
                      </label>
                      <label className="flex items-center gap-2 p-1.5 bg-zinc-900 border border-zinc-800 rounded cursor-pointer hover:border-zinc-700 text-zinc-400 hover:text-zinc-200">
                        <Paperclip className="w-3.5 h-3.5" />
                        <span className="text-[11px] truncate">
                          {formData.fileName || 'Seleccionar archivo (PDF, DOCX)'}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleInputChange('fileName', e.target.files[0].name);
                              handleInputChange('hasAttachment', true);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Row with Master CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-zinc-500">
                    * Grupo Lares determinará qué capacidades activar (Wiñaypaq y/o Cinema Pro).
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-950/60 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Enviando requerimiento...</span>
                    ) : (
                      <>
                        <span>Hagámoslo posible</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column (4 cols): Direct Communication Channels & Office */}
          <div className="lg:col-span-4 bg-[#0d0d10] border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 block mb-1">
                  Atención Directa
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Vías de Contacto Inmediato
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  Para convocatorias institucionales, comités de eventos o emergencias de rodaje.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-2.5 text-xs">
                <a
                  href="https://wa.me/51987654321?text=Hola%20Grupo%20Lares,%20quisiera%20coordinar%20una%20producci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950/80 border border-zinc-800 hover:border-emerald-500/50 rounded-lg flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-400 block">
                      WhatsApp Oficial
                    </span>
                    <span className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      +51 987 654 321
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:contacto@grupolares.pe"
                  className="p-3 bg-zinc-950/80 border border-zinc-800 hover:border-rose-500/50 rounded-lg flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-400 block">
                      Correo Electrónico
                    </span>
                    <span className="font-semibold text-zinc-100 group-hover:text-rose-400 transition-colors">
                      contacto@grupolares.pe
                    </span>
                  </div>
                </a>

                <div className="p-3 bg-zinc-950/80 border border-zinc-800 rounded-lg flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-400 block">
                      Horario de Atención
                    </span>
                    <span className="text-zinc-200 font-medium block">
                      Lunes a Viernes · 9:00 a 18:00
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      GMT-5 (Hora de Perú)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Slogan */}
            <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 space-y-1">
              <span className="block text-zinc-300 font-medium">
                Sede Central: Lima, Perú
              </span>
              <span>Cobertura operativa en todas las regiones del país y comisiones internacionales.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Grupo Lares © 2026 · Todos los derechos reservados</span>
          {onNavigateToStart && (
            <button
              onClick={onNavigateToStart}
              className="hover:text-zinc-200 flex items-center gap-1 transition-colors"
            >
              <span>Volver al Inicio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
