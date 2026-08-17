import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-mono text-sm tracking-widest text-fg">
          HEITOR LEONNY
        </span>

        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider text-muted">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <LinkedinIcon size={13} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <GithubIcon size={13} /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <Mail size={13} /> E-mail
          </a>
        </div>

        <span className="text-xs text-muted-2">
          © {year} Heitor Leonny. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
