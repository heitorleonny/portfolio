"use client";

import { useRef } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import HeroVisual from "./HeroVisual";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="bg-glow bg-noise relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            {profile.role}
          </div>

          <h1 className="mt-6 text-[clamp(3rem,9vw,5.5rem)] font-semibold leading-[0.95] tracking-tight">
            {profile.firstName}
            <br />
            <span className="text-accent">{profile.lastName}</span>
          </h1>

          <p className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-muted-2 sm:text-sm">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-line bg-bg-card px-3 py-1 font-mono text-[11px] text-muted"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#experiencia"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Ver Experiência
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Ver Projetos
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-fg"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="mx-auto max-w-6xl border-t border-line px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-muted">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Location: <span className="text-fg">{profile.location}</span>
            </span>
            {profile.stats.map((stat) => (
              <span key={stat.label} className="flex items-center gap-1.5">
                <span className="text-muted-2">{stat.label}:</span>
                <span className="text-fg">{stat.value}</span>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-fg"
            >
              <GithubIcon size={13} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-fg"
            >
              <LinkedinIcon size={13} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-fg"
            >
              <Mail size={13} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
