"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Folder,
  FileCode2,
  FileText,
  ArrowUpRight,
  ArrowRight,
  X,
} from "lucide-react";
import type { LibraryEntry } from "@/lib/library";
export default function FolderExplorer({
  entries,
  path,
}: {
  entries: LibraryEntry[];
  path: string;
}) {
  const [query, setQuery] = useState("");
  const normalize = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const visible = entries.filter((e) =>
    normalize(`${e.title} ${e.name} ${e.description}`).includes(
      normalize(query),
    ),
  );
  return (
    <div className="explorer">
      <div className="explorer-toolbar">
        <div className="explorer-path">
          <Folder size={17} />
          <span>{path}/</span>
        </div>
        <label className="explorer-search">
          <Search size={15} />
          <input
            aria-label="Buscar nesta pasta"
            placeholder="Buscar nesta pasta…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="explorer-head">
        <span>NOME</span>
        <span>TIPO</span>
        <span>ACESSAR</span>
      </div>
      <div aria-live="polite">
        {visible.map((entry) => {
          const Icon = entry.folder
            ? Folder
            : entry.type === "HTML"
              ? FileCode2
              : FileText;
          const contents = (
            <>
              <div className="entry-main">
                <span className={`entry-icon ${entry.folder ? "" : "is-file"}`}>
                  <Icon size={23} strokeWidth={1.5} />
                </span>
                <div>
                  <strong>{entry.title}</strong>
                  <p>{entry.description}</p>
                </div>
              </div>
              <span className="entry-type">{entry.type}</span>
              <span className="entry-action">
                {entry.folder ? "Explorar" : "Abrir"}
                {entry.folder ? (
                  <ArrowRight size={15} />
                ) : (
                  <ArrowUpRight size={15} />
                )}
              </span>
            </>
          );
          return entry.folder ? (
            <Link className="explorer-row" href={entry.href} key={entry.name}>
              {contents}
            </Link>
          ) : (
            <a className="explorer-row" href={entry.href} key={entry.name}>
              {contents}
            </a>
          );
        })}
        {visible.length === 0 && (
          <div className="empty-search">
            <p>Nenhum material encontrado para “{query}”.</p>
            <button className="text-button" onClick={() => setQuery("")}>
              Limpar busca <X size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
