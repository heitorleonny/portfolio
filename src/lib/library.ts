import { readdirSync } from "node:fs";
import { join } from "node:path";

export type LibraryEntry = {
  name: string;
  title: string;
  description: string;
  href: string;
  folder: boolean;
  type: string;
};
const root = join(process.cwd(), "public", "treinamentos");
const titles: Record<string, string> = {
  csat: "CSAT",
  materiais: "Materiais",
  "mare-de-volta.html": "Maré de Volta",
};
export function folderPaths(segments: string[] = []): string[][] {
  return [
    segments,
    ...readdirSync(join(root, ...segments), { withFileTypes: true })
      .filter((e) => e.isDirectory() && !e.name.startsWith("."))
      .flatMap((e) => folderPaths([...segments, e.name])),
  ];
}
export function folderTitle(name: string) {
  return titles[name] || name;
}
export function readFolder(segments: string[]): LibraryEntry[] | null {
  // Only paths in the public training directory index can be read.
  if (!folderPaths().some((p) => p.join("/") === segments.join("/")))
    return null;
  return readdirSync(join(root, ...segments), { withFileTypes: true })
    .filter((e) => !e.name.startsWith(".") && (e.isFile() || e.isDirectory()))
    .map((e) => {
      const folder = e.isDirectory();
      const html = !folder && e.name.endsWith(".html");
      const extension = e.name.split(".").at(-1)?.toUpperCase() || "Arquivo";
      return {
        name: e.name,
        title: folderTitle(e.name),
        folder,
        type: folder ? "Pasta" : extension,
        href: `/treinamentos/${[...segments, e.name].map(encodeURIComponent).join("/")}`,
        description:
          e.name === "csat"
            ? "Satisfação do cliente, experiência e gestão de projetos"
            : e.name === "materiais"
              ? "Apresentações e recursos do treinamento"
              : e.name === "mare-de-volta.html"
                ? "Treinamento de CSAT · EPEEJ ’26 · Apresentação interativa"
                : folder
                  ? "Explore os materiais desta pasta"
                  : html
                    ? "Apresentação em HTML"
                    : e.name,
      };
    })
    .sort(
      (a, b) =>
        Number(b.folder) - Number(a.folder) ||
        a.name.localeCompare(b.name, "pt-BR"),
    );
}
