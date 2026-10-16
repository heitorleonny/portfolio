import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
  Cloud,
  Code2,
  Sparkles,
  Folder,
  FileCode2,
  ChevronRight,
  GraduationCap,
  Mail,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { profile, timeline, skillGroups, certifications } from "@/lib/data";

function date(value: number) {
  return `${String(Math.round((value % 1) * 12) + 1).padStart(2, "0")}.${Math.floor(value)}`;
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="conteudo">
        <section className="hero container" id="sobre">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> DESENVOLVEDOR FULL STACK & GEN AI
            </p>
            <h1>
              Tecnologia com
              <br />
              propósito.
              <br />
              <em>Impacto real.</em>
            </h1>
            <p className="hero-description">
              Sou Heitor Leonny. Conecto desenvolvimento, cloud e inteligência
              artificial para transformar desafios de negócio em soluções que
              fazem sentido.
            </p>
            <div className="hero-actions">
              <a href="#projetos" className="button button-dark">
                Conheça meu trabalho <ArrowUpRight size={18} />
              </a>
              <a className="cv-link" href={profile.cvUrl} download>
                <Download size={16} /> Baixar currículo
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={14} /> Recife, Pernambuco <span>·</span> Brasil
            </div>
          </div>
          <div className="portrait-composition">
            <div className="portrait-label">
              <span>UM POUCO DE MIM</span>
              <ArrowUpRight size={18} />
            </div>
            <div className="portrait-frame">
              <Image
                src={profile.photo}
                alt="Heitor Leonny"
                fill
                sizes="(max-width: 760px) 90vw, 40vw"
                priority
              />
              <div className="portrait-overlay" />
              <div className="portrait-name">
                Heitor Leonny<span>Desenvolvedor. Curioso. Construtor.</span>
              </div>
            </div>
            <div className="portrait-sticker">
              <Cloud size={24} />
              <div>
                AWS Certified<span>Cloud Practitioner</span>
                <span>AI Practitioner</span>
              </div>
              <ArrowUpRight size={16} />
            </div>
            <span className="portrait-coordinate">08°03′ S — 34°52′ W</span>
          </div>
          <a href="#projetos" className="scroll-cue">
            <ArrowDown size={15} /> CONTINUE EXPLORANDO
          </a>
        </section>
        <div className="expertise-strip">
          <div className="container">
            <span>DO CONCEITO À ENTREGA</span>
            <p>
              Backend & APIs <span>✳</span> Cloud AWS <span>✳</span> IA
              Generativa <span>✳</span> Desenvolvimento Web
            </p>
          </div>
        </div>
        <Projects />
        <section className="about-section" id="experiencia">
          <div className="container about-grid">
            <div className="about-intro">
              <p className="eyebrow">02 / SOBRE & TRAJETÓRIA</p>
              <h2>
                Código, pessoas
                <br />e boas conexões<span>.</span>
              </h2>
              <p>{profile.bio}</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-button"
              >
                Minha trajetória no LinkedIn <ArrowUpRight size={17} />
              </a>
              <div className="education">
                <GraduationCap size={23} />
                <div>
                  <strong>Sistemas de Informação</strong>
                  <span>UFRPE · Conclusão prevista em 2026</span>
                </div>
              </div>
            </div>
            <div className="experience-list">
              {timeline
                .filter((t) => !t.ongoingEducation)
                .map((entry) => (
                  <article key={entry.id}>
                    <div className="experience-meta">
                      <span>{entry.org}</span>
                      <span>
                        {date(entry.start)} —{" "}
                        {entry.current ? "Atual" : date(entry.end)}
                      </span>
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    {entry.current && (
                      <span className="current-tag">
                        <span className="status-dot" /> Atuação atual
                      </span>
                    )}
                  </article>
                ))}
            </div>
          </div>
        </section>
        <section className="section container" id="tecnologias">
          <div className="section-top">
            <div>
              <p className="eyebrow">03 / FERRAMENTAS & POSSIBILIDADES</p>
              <h2>
                A stack por trás
                <br />
                das soluções<span>.</span>
              </h2>
            </div>
            <p className="section-intro">
              Tecnologias que conecto para construir aplicações, automatizar
              processos e explorar novas possibilidades.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => {
              const Icon = [Cloud, Sparkles, Code2][i];
              return (
                <article className="skill-card" key={group.id}>
                  <Icon size={28} strokeWidth={1.5} />
                  <span className="skill-number">0{i + 1}</span>
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                  <div className="tags">
                    {group.skills.map((s) => (
                      <span key={s.name}>{s.name}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
          {certifications.map((item, index) => {
            const Icon = index === 0 ? Cloud : Sparkles;
            return (
              <div className="certification" key={item.title}>
                <Icon size={25} />
                <div>
                  <span>CERTIFICAÇÃO AWS</span>
                  <strong>{item.title}</strong>
                </div>
                {item.date && <p>{item.date}</p>}
              </div>
            );
          })}
        </section>
        <section className="library-highlight" id="materiais">
          <div className="container library-highlight-grid">
            <div>
              <p className="eyebrow">04 / CONHECIMENTO COMPARTILHADO</p>
              <h2>
                Aprender. Aplicar.
                <br />
                <em>Compartilhar.</em>
              </h2>
              <p>
                Treinamentos e materiais que fazem parte da minha jornada.
                Organizados para você encontrar, explorar e aprender no seu
                ritmo.
              </p>
              <Link href="/treinamentos" className="button button-dark">
                Explorar treinamentos <ArrowUpRight size={18} />
              </Link>
            </div>
            <Link className="folder-preview" href="/treinamentos">
              <div className="folder-preview-top">
                <Folder size={18} />
                <span>Biblioteca de conhecimento</span>
                <ArrowUpRight size={18} />
              </div>
              <div className="tree-row">
                <Folder size={20} /> treinamentos <span>01</span>
              </div>
              <div className="tree-branch">
                <div className="tree-row">
                  <Folder size={20} /> csat <ChevronRight size={15} />
                </div>
                <div className="tree-branch">
                  <div className="tree-row">
                    <Folder size={20} /> materiais
                  </div>
                  <div className="tree-file">
                    <FileCode2 size={20} />
                    <div>
                      Maré de Volta<span>Apresentação interativa · HTML</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="folder-preview-bottom">
                Conhecimento aberto, a um clique de distância{" "}
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </section>
        <section className="contact-section container" id="contato">
          <p className="eyebrow">O PRÓXIMO PROJETO COMEÇA COM UMA CONVERSA</p>
          <div className="contact-main">
            <h2>
              Vamos construir
              <br />
              algo <em>relevante?</em>
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="contact-arrow"
              aria-label="Conversar por e-mail"
            >
              <ArrowUpRight size={43} strokeWidth={1.4} />
            </a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} />
              {profile.email}
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              Conversar no WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
