import { Download, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { WhatsappIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contato" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex items-baseline gap-3 font-mono text-sm text-accent">
          <span>CONTATO & OPORTUNIDADES</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Vamos conversar sobre backend, cloud e IA generativa?
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            Aberto a posições de Desenvolvedor(a) Júnior e estágio em
            Backend, Cloud e IA Generativa. Me chama por aqui — respondo
            rápido.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#04141c] transition-opacity hover:opacity-90"
            >
              <WhatsappIcon size={16} />
              WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={15} />
              E-mail
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
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-2">
            <span>{profile.phone}</span>
            <span>{profile.email}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
