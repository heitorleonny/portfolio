"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects, type Project } from "@/lib/data";
import { GithubIcon } from "./icons";

const tabs = [
  { id: "pessoal" as const, label: "Projetos Pessoais" },
  { id: "nuageit" as const, label: "NuageIT" },
  { id: "seedabit" as const, label: "Seed a Bit" },
];

export default function Projects() {
  const [active, setActive] = useState<Project["category"]>("pessoal");
  const list = projects.filter((p) => p.category === active);

  return (
    <section id="projetos" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Projetos"
          description="Um projeto autoral de inteligência de dados e cases técnicos entregues na NuageIT e na Seed a Bit."
        />

        <Reveal className="mb-10 inline-flex gap-1 rounded-full border border-line bg-bg-card p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                active === tab.id
                  ? "bg-accent text-[#04141c]"
                  : "text-muted hover:text-fg"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {list.map((project, i) => (
            <Reveal key={project.id} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-card p-6 transition-colors hover:border-accent/50">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
          {project.tag}
        </span>
        {project.featured && (
          <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-medium text-fg">{project.title}</h3>
      {project.org && (
        <p className="font-mono text-xs text-muted-2">{project.org}</p>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.bullets && (
        <ul className="mt-3 space-y-1.5">
          {project.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-2 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
            >
              {b}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.link || project.liveUrl) && (
        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={14} />
              Código
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
              Ver online
            </a>
          )}
        </div>
      )}
    </div>
  );
}
