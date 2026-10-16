# Portfólio — Heitor Leonny

Site pessoal em Next.js 16, React 19 e TypeScript. Inclui projetos filtráveis, trajetória profissional, competências e uma biblioteca pública de treinamentos com navegação por pastas.

## Executar localmente

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. Para validar a aplicação:

```bash
npm run lint
npm run build
```

## Conteúdo do portfólio

- `src/lib/data.ts`: perfil, projetos, experiências, competências e certificação.
- `src/app/page.tsx`: estrutura da página inicial.
- `src/app/globals.css`: identidade visual e estilos responsivos.
- `public/heitor.jpg`: fotografia de perfil.
- `public/cv/Heitor-Leonny-CV.pdf`: currículo para download.

## Treinamentos e materiais

As páginas da biblioteca refletem as pastas e os arquivos de `public/treinamentos`. Para adicionar um material, coloque o arquivo na pasta desejada e gere uma nova versão com `npm run build`. As páginas das pastas são geradas no build; não há upload ou edição pelo navegador.

```text
public/treinamentos/
└── csat/
    └── materiais/
        └── mare-de-volta.html
```

Rotas disponíveis:

- `/treinamentos`: lista de treinamentos.
- `/treinamentos/csat`: pasta do treinamento de CSAT.
- `/treinamentos/csat/materiais`: lista de materiais, com busca local.
- `/treinamentos/csat/materiais/mare-de-volta.html`: apresentação original.
- `/treinamentos/csat/materiais/html`: atalho preservado para a apresentação.

As variantes `/treinamentos/csat/material` e `/treinamentos/csat/material/html` redirecionam para as rotas equivalentes em `materiais`.

A busca considera nome e descrição dos itens da pasta atual e ignora diferenças de acentuação. A navegação inclui breadcrumbs, retorno à pasta anterior e página 404 para caminhos inexistentes. Somente os arquivos públicos dessa árvore entram na listagem; arquivos ocultos e links simbólicos são ignorados.

Os títulos e as descrições especiais podem ser ajustados em `src/lib/library.ts`. Pastas e arquivos novos recebem seus nomes como identificação padrão. Tudo em `public/treinamentos` é público; publique apenas materiais destinados aos visitantes do site.

## Temas claro e escuro

O botão de sol/lua no cabeçalho alterna o tema do portfólio e da biblioteca, inclusive no celular. A escolha é salva no navegador. Sem preferência salva, o site acompanha o tema do sistema. A apresentação HTML mantém sua identidade visual própria. As cores dos dois temas ficam centralizadas em `src/app/globals.css`.
