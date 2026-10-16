"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="wordmark" aria-label="Heitor Leonny — início">
          hl<span>.</span>
        </Link>
        <nav
          aria-label="Navegação principal"
          className={open ? "main-nav is-open" : "main-nav"}
        >
          {[
            ["/#sobre", "Sobre"],
            ["/#projetos", "Projetos"],
            ["/#experiencia", "Experiência"],
            ["/treinamentos", "Treinamentos"],
          ].map(([href, label]) => (
            <Link onClick={() => setOpen(false)} key={href} href={href}>
              {label}
            </Link>
          ))}
          <a href={`mailto:${profile.email}`} className="nav-contact">
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="menu-toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
