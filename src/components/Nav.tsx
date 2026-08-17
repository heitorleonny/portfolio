import { Download } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-widest text-fg">
          HEITOR LEONNY
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={profile.cvUrl}
            download
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-[#04141c] transition-opacity hover:opacity-90"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Download CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}
