"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Braces,
  AudioLines,
  Bot,
  Network,
  Mail,
  CalendarDays,
  Globe,
  Layers,
} from "lucide-react";
import { projects } from "@/lib/data";
const tabs = [
  { id: "all", label: "Todos" },
  { id: "pessoal", label: "Projetos pessoais" },
  { id: "nuageit", label: "NuageIT" },
  { id: "seedabit", label: "Seed a Bit" },
];
const artwork = [
  Network,
  Mail,
  CalendarDays,
  Braces,
  Bot,
  Layers,
  Network,
  Braces,
  AudioLines,
  Globe,
];
export default function Projects() {
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const filtered = projects.filter(
    (p) => active === "all" || p.category === active,
  );
  const visible = expanded ? filtered : filtered.slice(0, 4);
  return (
    <section id="projetos" className="section container">
      <div className="section-top">
        <div>
          <p className="eyebrow">01 / TRABALHOS SELECIONADOS</p>
          <h2>
            Ideias que viraram
            <br />
            soluções reais<span>.</span>
          </h2>
        </div>
        <p className="section-intro">
          Uma seleção do que construo entre código, cloud e inteligência
          artificial.
        </p>
      </div>
      <div className="project-tabs" role="group" aria-label="Filtrar projetos">
        {tabs.map((tab) => (
          <button
            aria-pressed={active === tab.id}
            className={active === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => {
              setActive(tab.id);
              setExpanded(false);
            }}
          >
            {tab.label}
            {tab.id === "all" && (
              <span>{projects.length.toString().padStart(2, "0")}</span>
            )}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => {
          const index = projects.indexOf(project);
          const Icon = artwork[index];
          return (
            <article className="project-card" key={project.id}>
              <div className={`project-art art-${index % 4}`}>
                <div className="art-grid" />
                <span className="art-caption">
                  {project.org || "PROJETO PESSOAL"}
                </span>
                <Icon className="art-icon" size={90} strokeWidth={1} />
                <span className="art-name">{project.title}</span>
                <span className="art-index">
                  /{String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="project-body">
                <p className="eyebrow">{project.tag}</p>
                <div className="project-title">
                  <h3>{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver código de ${project.title}`}
                    >
                      <ArrowUpRight size={23} />
                    </a>
                  )}
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {filtered.length > 4 && (
        <button
          className="text-button projects-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Mostrar menos projetos"
            : `Explorar os ${filtered.length} projetos`}{" "}
          <ArrowRight size={17} />
        </button>
      )}
    </section>
  );
}
