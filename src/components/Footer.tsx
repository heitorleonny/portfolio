import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="site-footer container">
      <Link className="footer-name" href="/">
        Heitor Leonny<span>.</span>
      </Link>
      <p>Desenvolvimento com propósito. De Recife para o mundo.</p>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={13} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={13} />
        </a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
