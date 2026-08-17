import {
  Cloud,
  Code2,
  Layers,
  Terminal,
  Zap,
  Database,
  Container,
  Bot,
  Wand2,
  Search,
  Boxes,
  BarChart3,
  Atom,
  Globe,
  Newspaper,
  PenTool,
  ClipboardList,
  KanbanSquare,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups, certification, type SkillIcon } from "@/lib/data";
import { GithubIcon } from "./icons";

const iconMap: Record<Exclude<SkillIcon, "git">, LucideIcon> = {
  cloud: Cloud,
  code: Code2,
  layers: Layers,
  terminal: Terminal,
  zap: Zap,
  database: Database,
  container: Container,
  bot: Bot,
  wand: Wand2,
  search: Search,
  dynamodb: Boxes,
  chart: BarChart3,
  react: Atom,
  globe: Globe,
  wordpress: Newspaper,
  figma: PenTool,
  clipboard: ClipboardList,
  scrum: KanbanSquare,
  users: Users,
};

function SkillIconView({ icon }: { icon: SkillIcon }) {
  if (icon === "git") {
    return <GithubIcon size={15} />;
  }
  const Icon = iconMap[icon];
  return <Icon size={15} strokeWidth={1.75} />;
}

export default function TechStack() {
  return (
    <section id="tecnologias" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Tecnologias"
          description="Stack aplicada na prática em produção na NuageIT, combinando fundamentos de Sistemas de Informação na UFRPE com aprendizado contínuo em cloud e IA generativa."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 100}>
              <div className="h-full rounded-2xl border border-line bg-bg-card p-6">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted-2">
                  <span>SYS // {String(gi + 1).padStart(2, "0")}</span>
                  <span>{group.skills.length} TOOLS</span>
                </div>
                <h3 className="mt-3 text-lg font-medium text-fg">
                  {group.title}
                </h3>
                <p className="font-mono text-xs text-accent">
                  {group.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>

                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="flex items-center gap-2.5 text-sm text-fg">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line bg-bg-elevated text-accent">
                          <SkillIconView icon={skill.icon} />
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-right font-mono text-[11px] text-muted-2">
                        {skill.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 via-bg-card to-bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-bg-elevated text-accent">
                <Cloud size={22} strokeWidth={1.75} />
              </span>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  Certificação
                </span>
                <h3 className="text-lg font-medium text-fg">
                  {certification.title}
                </h3>
                <p className="text-sm text-muted-2">
                  {certification.issuer} · {certification.date}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-accent px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[#04141c]">
              Verificado
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
