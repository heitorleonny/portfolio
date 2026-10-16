import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, BookOpen, Home } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FolderExplorer from "@/components/FolderExplorer";
import { folderPaths, folderTitle, readFolder } from "@/lib/library";

type Props = { params: Promise<{ path?: string[] }> };
export function generateStaticParams() {
  return folderPaths().map((path) => ({ path }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path = [] } = await params;
  return {
    title: `${path.length ? folderTitle(path.at(-1)!) : "Treinamentos"} | Heitor Leonny`,
    description:
      "Explore treinamentos, apresentações e materiais compartilhados por Heitor Leonny.",
  };
}
export default async function TrainingFolder({ params }: Props) {
  const { path = [] } = await params;
  const entries = readFolder(path);
  if (!entries) notFound();
  const title = path.length
    ? folderTitle(path.at(-1)!)
    : "Conhecimento aberto.";
  const descriptions: Record<string, string> = {
    csat: "Satisfação do cliente como ponto de partida. Explore os materiais sobre experiência, escuta e gestão de projetos.",
    materiais:
      "Apresentações e recursos para acompanhar o treinamento e continuar aprendendo.",
  };
  return (
    <>
      <Nav />
      <main id="conteudo" className="library-page container">
        <nav className="breadcrumbs" aria-label="Caminho de navegação">
          <Link href="/" aria-label="Página inicial">
            <Home size={13} />
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/treinamentos"
            aria-current={!path.length ? "page" : undefined}
          >
            Treinamentos
          </Link>
          {path.map((part, i) => (
            <span key={i}>
              <ChevronRight size={12} />
              <Link
                aria-current={i === path.length - 1 ? "page" : undefined}
                href={`/treinamentos/${path
                  .slice(0, i + 1)
                  .map(encodeURIComponent)
                  .join("/")}`}
              >
                {folderTitle(part)}
              </Link>
            </span>
          ))}
        </nav>
        <div className="library-heading">
          <div>
            <p className="eyebrow">BIBLIOTECA / TREINAMENTOS & MATERIAIS</p>
            <h1>{title}</h1>
            <p>
              {descriptions[path.at(-1) || ""] ||
                "Um espaço para compartilhar o que aprendo e construo. Navegue pelas pastas e encontre treinamentos, apresentações e recursos."}
            </p>
          </div>
          <span className="library-count">
            {String(entries.length).padStart(2, "0")}{" "}
            {entries.length === 1 ? "ITEM NESTA PASTA" : "ITENS NESTA PASTA"}
          </span>
        </div>
        <FolderExplorer
          entries={entries}
          path={`treinamentos${path.length ? "/" + path.join("/") : ""}`}
        />
        <div className="library-note">
          <BookOpen size={17} />
          <p>
            Escolha uma pasta para explorar seu conteúdo. Os materiais em HTML
            podem ser abertos diretamente no navegador.
          </p>
        </div>
        <Link
          className="text-button back-link"
          href={
            path.length
              ? `/treinamentos/${path.slice(0, -1).map(encodeURIComponent).join("/")}`
              : "/"
          }
        >
          <ArrowLeft size={15} />
          {path.length ? "Voltar uma pasta" : "Voltar ao portfólio"}
        </Link>
      </main>
      <Footer />
    </>
  );
}
