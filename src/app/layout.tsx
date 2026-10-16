import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heitor Leonny | Desenvolvimento, Cloud & IA",
  description:
    "Heitor Leonny — Full Stack Developer com foco em backend, cloud (AWS) e IA generativa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { let saved; try { saved = localStorage.getItem("portfolio-theme"); } catch {} document.documentElement.dataset.theme = saved === "light" || saved === "dark" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; })();`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
