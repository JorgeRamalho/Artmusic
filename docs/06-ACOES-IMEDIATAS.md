# 06 — Ações imediatas e colaboração

Plano operacional pós-auditoria (2026-08-12). Use este arquivo como **quadro de trabalho** compartilhado: quem pega a tarefa marca o status e registra o resultado em `COMMITS.md`.

## Como colaborar neste repo

| Prática | Regra |
|---------|--------|
| Branch | `main` para estável; feature em `feat/<assunto>` ou `fix/<assunto>` |
| Escopo | 1 PR / commit = 1 tema (SEO **ou** a11y **ou** assets — não misturar) |
| Docs | Atualizar este arquivo (`Status`) + linha em [`COMMITS.md`](COMMITS.md) |
| Preview | Live Server `5500` ou `python -m http.server 8080` |
| Design | Seguir [`04-DESIGN-SYSTEM.md`](04-DESIGN-SYSTEM.md) — não inventar paleta |
| Assets | Só em `assets/images/<grupo>/`; rascunhos → `_archive/` |
| Fora do repo | Não referenciar `Fron_End\Arquivos\` no HTML ([mapa](05-MAPEAMENTO-EXTERNO.md)) |

### Fluxo mínimo por tarefa

1. Ler a linha da tabela abaixo e a seção “Detalhe”.  
2. Alterar só os arquivos listados em **Arquivos**.  
3. Validar no browser (desktop + ~390px).  
4. Marcar status → `Feito` e anotar data/responsável.  
5. Commitar com mensagem no padrão Conventional Commits.

---

## Sprint 0 — Imediato (1–2 dias)

Foco: SEO base, acessibilidade leve, performance de imagens, higiene de links. **Não muda conceito de marca.**

| ID | Ação | Arquivos | Esforço | Status | Dono |
|----|------|----------|---------|--------|------|
| S0-01 | Meta Open Graph + Twitter Cards | `index.html` | S | **Feito** 2026-08-12 | agent |
| S0-02 | `canonical` + `theme-color` | `index.html` | S | **Feito** 2026-08-12 | agent |
| S0-03 | JSON-LD `MusicStore` | `index.html` | S | **Feito** 2026-08-12 | agent |
| S0-04 | `loading="lazy"` em imgs below-the-fold | `index.html` | S | **Feito** 2026-08-12 | agent |
| S0-05 | Skip link “Ir para o conteúdo” + `id` no `main` | `index.html`, `css/styles.css` | S | **Feito** 2026-08-12 | agent |
| S0-06 | Tratar links `href="#"` (stubs legais + `footer-soon`) | `index.html`, `pages/*` | M | **Feito** 2026-08-12 | agent |
| S0-07 | Decisão **A**: versionar `_archive/`; excluir do deploy | `.deployignore`, `netlify.toml`, docs | S | **Feito** 2026-08-12 | agent |

### Detalhe S0

**S0-01 / S0-02 / S0-03 — SEO head**  
Inserir no `<head>`: `og:title`, `og:description`, `og:image` (usar `assets/images/hero/hero-studio.jpg` ou URL absoluta no deploy), `twitter:card`, `link rel="canonical"`, `meta name="theme-color" content="#060a10"`, script `application/ld+json` com nome ArtMusic, url e descrição.

**S0-04 — Lazy load**  
Manter `loading="eager"` só no hero (`hero-studio`, `hero-dj`). Demais `<img>` → `loading="lazy"` + `decoding="async"`.

**S0-05 — Skip link**  
Link visualmente oculto no topo, visível no `:focus`, apontando para `#conteudo`. Adicionar `id="conteudo"` em `<main>`.

**S0-06 — Links mortos**  
Opções por link: (a) página stub `pages/*.html`, (b) `span` sem link, (c) `href="#"` + `role="link" aria-disabled="true"` + `tabindex="-1"` com estilo muted. Preferir (b)/(c) no Sprint 0; páginas reais no Sprint 1.

**S0-07 — Archive**  
Decisão colaborativa:  
- A) Manter no Git, excluir do host estático; ou  
- B) Adicionar `assets/images/_archive/` ao `.gitignore` e limpar do tracking depois.

---

## Sprint 1 — Produto e UX (3–5 dias)

| ID | Ação | Arquivos | Esforço | Status | Dono |
|----|------|----------|---------|--------|------|
| S1-01 | Aliviar hero: stats em `.site-stats` abaixo da dobra | `index.html`, `css/styles.css` | M | **Feito** 2026-08-12 | agent |
| S1-02 | Âncoras `#colecao-*` por categoria + `:target` | `index.html`, `css/styles.css` | M | **Feito** 2026-08-12 | agent |
| S1-03 | Foco menu mobile + Escape + aria-label | `js/main.js` | M | **Feito** 2026-08-12 | agent |
| S1-04 | Termos / Privacidade stubs mínimos | `pages/termos.html`, `pages/privacidade.html` | M | **Feito** (S0) | agent |
| S1-05 | Netlify Forms (`surpresa`, `cadastro`) + honeypot | `index.html`, `js/main.js` | M | **Feito** 2026-08-12 | agent |
| S1-06 | WebP + `<picture>` nas 18 imagens ativas | `assets/images/**`, `scripts/convert_webp.py` | M | **Feito** 2026-08-12 | agent |

### Decisão S1-05 (colaboração)

| Opção | Prós | Contras |
|-------|------|---------|
| Netlify Forms | Zero backend, encaixa deploy Netlify | Só no Netlify |
| Formspree | Host-agnóstico | Conta externa / limite free |
| Manter demo local | Já funciona | Sem lead real |

**Escolhida: Netlify Forms** (alinhado ao `netlify.toml`). Senhas do cadastro **não** são enviadas no POST (omitidas no JS). Local/Live Server mantém feedback de sucesso sem backend.

---

## Sprint 2 — Escala e portfólio

| ID | Ação | Status | Dono |
|----|------|--------|------|
| S2-01 | Workflow GitHub Pages + canônica `jorgeramalho.github.io/Artmusic` | **Feito** (ativa no push `main`) | agent |
| S2-02 | README com badge, clone e URLs | **Feito** 2026-08-12 | agent |
| S2-03 | `docs/07-QA-SMOKE.md` + `scripts/smoke_check.py` | **Feito** 2026-08-12 | agent |
| S2-04 | Crop cards categoria (altura 200px + enquadre Sopro) | **Feito** 2026-08-12 | agent |
| S2-05 | Redes sociais ocultas até URLs reais (HTML comentado) | **Feito** 2026-08-12 | agent |

**Sprint 2 concluído em código 2026-08-12.** Deploy público depende de commit + push em `main`.

---

## Matriz de ownership sugerida

| Papel | Responsável típico | Escopo |
|-------|--------------------|--------|
| Conteúdo / copy | — | Textos, alts, stubs legais |
| Front HTML/CSS | — | S0-01…06, S1-01, S1-02, S1-04 |
| Front JS | — | S1-03, S1-05 wiring |
| Assets | — | S0-07, S1-06, S2-04 |
| Docs / QA | — | Status neste arquivo, Playwright smoke |

Preencher nomes na coluna **Dono** das tabelas ao iniciar cada ID.

---

## Critérios de aceite (DoD) — Sprint 0

- [x] View-source / DevTools: metas OG + Twitter + canonical presentes  
- [x] Lighthouse ou inspeção manual: imgs below-fold com lazy  
- [x] Tab keyboard: skip link aparece e salta para `#conteudo`  
- [x] Nenhum link morto `href="#"` no `index.html` (footer = `footer-soon`; legais = `pages/`)  
- [x] Site abre em 1440 e 390 sem overflow-X (validar no preview)  
- [x] Console sem erros (validar no preview)  
- [x] `python scripts/audit_images.py` → 18 USED  

**Sprint 0 · 1 · 2 concluídos em código (2026-08-12).**  

### DoD Sprint 2

- [x] Workflow `.github/workflows/deploy-pages.yml`  
- [x] README com badge + clone + URL Pages  
- [x] Smoke `python scripts/smoke_check.py`  
- [x] Aspect-ratio categorias / Sopro  
- [x] Redes ocultas (S2-05)  
- [ ] Push `main` + Pages online (ação do mantenedor)  

---

## Próximos passos pós-Sprint 2

1. Commit + push das mudanças S0–S2.  
2. Em GitHub: **Settings → Pages → Source: GitHub Actions**.  
3. Conferir URL canônica e badge verde.  
4. (Opcional) `npx netlify deploy --prod` para Forms em produção.

---

## Referências rápidas

- Auditoria completa: [`03-AUDITORIA.md`](03-AUDITORIA.md)  
- Estrutura de pastas: [`02-ESTRUTURA.md`](02-ESTRUTURA.md)  
- Design: [`04-DESIGN-SYSTEM.md`](04-DESIGN-SYSTEM.md)  
- Canvas de scores: abrir no Cursor o canvas `artmusic-auditoria.canvas.tsx`
