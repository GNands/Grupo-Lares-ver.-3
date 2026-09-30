'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { HeaderNav } from '@/components/HeaderNav';
import { LateralControls } from '@/components/LateralControls';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ContactBriefSection } from '@/components/sections/ContactBriefSection';
import { ProjectModal } from '@/components/ProjectModal';
import { ShowreelModal } from '@/components/ShowreelModal';
import { PROJECTS, Project } from '@/components/data/content';

const SECTION_NAMES = [
  'Inicio',
  'Nosotros',
  'Capacidades',
  'Portafolio',
  'Clientes',
  'Brief & Contacto',
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Modals & Context States
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showShowreel, setShowShowreel] = useState(false);
  const [briefInitialNeed, setBriefInitialNeed] = useState<string>('Producción de evento');
  const [briefInitialNotes, setBriefInitialNotes] = useState<string>('');

  // Smooth lateral scroll execution
  const navigateToSection = useCallback((index: number) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(index, SECTION_NAMES.length - 1));
    const targetLeft = clampedIndex * window.innerWidth;
    containerRef.current.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
    setCurrentSection(clampedIndex);
  }, []);

  const handlePrev = useCallback(() => {
    navigateToSection(currentSection - 1);
  }, [currentSection, navigateToSection]);

  const handleNext = useCallback(() => {
    navigateToSection(currentSection + 1);
  }, [currentSection, navigateToSection]);

  // Handle vertical wheel conversion to horizontal scroll on desktop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      // If a modal is open, let modal scroll normally
      if (selectedProject || showShowreel) return;

      // Allow natural horizontal scroll or convert vertical delta to horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.2;
      }
    };

    const handleScroll = () => {
      if (!container) return;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);

      const sectionWidth = window.innerWidth;
      const activeIdx = Math.round(scrollLeft / sectionWidth);
      if (activeIdx !== currentSection && activeIdx >= 0 && activeIdx < SECTION_NAMES.length) {
        setCurrentSection(activeIdx);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, selectedProject, showShowreel]);

  // Keyboard navigation support [ArrowLeft] / [ArrowRight]
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject || showShowreel) {
        if (e.key === 'Escape') {
          setSelectedProject(null);
          setShowShowreel(false);
        }
        return;
      }

      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSection(SECTION_NAMES.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, navigateToSection, selectedProject, showShowreel]);

  // Project Dossier interactions
  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleWantSimilar = (project: Project) => {
    setSelectedProject(null);
    setBriefInitialNeed(
      project.division === 'Wiñaypaq'
        ? 'Producción de evento'
        : 'Producción audiovisual'
    );
    setBriefInitialNotes(
      `Requerimiento inspirado en el proyecto "${project.title}" (${project.client}). Buscamos una solución con estándares y despliegue análogos.`
    );
    navigateToSection(5);
  };

  const handleSelectServiceForBrief = (serviceLabel: string) => {
    setBriefInitialNeed(
      serviceLabel.includes('Wiñaypaq')
        ? 'Producción de evento'
        : 'Producción audiovisual'
    );
    setBriefInitialNotes(`Consulta técnica y cotización para el servicio: ${serviceLabel}`);
    navigateToSection(5);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#09090b] text-[#f4f4f5]">
      {/* 3-Zone Top Navigation Contract */}
      <HeaderNav
        currentSection={currentSection}
        totalSections={SECTION_NAMES.length}
        onNavigate={navigateToSection}
        sectionNames={SECTION_NAMES}
      />

      {/* Panoramic Lateral Track */}
      <div
        ref={containerRef}
        className="flex flex-row w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
        tabIndex={0}
        aria-label="Pista panorámica de navegación lateral"
      >
        {/* 01. Hero & Showreel */}
        <HeroSection
          onOpenShowreel={() => setShowShowreel(true)}
          onNavigateToBrief={() => navigateToSection(5)}
          onNavigateToNext={handleNext}
        />

        {/* 02. Nosotros & Identidad */}
        <AboutSection
          onNavigateToNext={handleNext}
          onNavigateToBrief={() => navigateToSection(5)}
        />

        {/* 03. Capacidades & Hub de Servicios */}
        <ServicesSection
          onSelectServiceForBrief={handleSelectServiceForBrief}
          onNavigateToNext={handleNext}
        />

        {/* 04. Portafolio & Evidencia */}
        <PortfolioSection
          onSelectProject={handleSelectProject}
          onWantSimilar={handleWantSimilar}
          onNavigateToNext={handleNext}
        />

        {/* 05. Clientes & Alianzas */}
        <ClientsSection
          onSelectProjectById={handleSelectProjectById}
          onNavigateToBrief={() => navigateToSection(5)}
        />

        {/* 06. Contacto & Brief Comercial */}
        <ContactBriefSection
          initialServiceNeed={briefInitialNeed}
          initialNotes={briefInitialNotes}
          onNavigateToStart={() => navigateToSection(0)}
        />
      </div>

      {/* Floating Bottom Lateral Navigation Controller */}
      <LateralControls
        currentSection={currentSection}
        totalSections={SECTION_NAMES.length}
        sectionNames={SECTION_NAMES}
        onPrev={handlePrev}
        onNext={handleNext}
        onNavigate={navigateToSection}
        scrollProgress={scrollProgress}
      />

      {/* Case Study Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onWantSimilar={handleWantSimilar}
      />

      {/* High-Impact Showreel Modal */}
      <ShowreelModal
        isOpen={showShowreel}
        onClose={() => setShowShowreel(false)}
        onExploreProjects={() => {
          setShowShowreel(false);
          navigateToSection(3);
        }}
      />
    </main>
  );
}
