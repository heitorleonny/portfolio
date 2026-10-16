import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="conteudo" className="container not-found">
        <span className="eyebrow">404 / CAMINHO NÃO ENCONTRADO</span>
        <h1>Vamos voltar ao caminho?</h1>
        <p>Esta página ou pasta não está disponível.</p>
        <Link className="button button-dark" href="/treinamentos">
          <ArrowLeft size={16} />
          Explorar treinamentos
        </Link>
      </main>
      <Footer />
    </>
  );
}
