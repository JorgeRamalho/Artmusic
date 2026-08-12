# Registro de commits — ArtMusic

Histórico de commits documentado dentro do projeto. Atualize este arquivo a cada novo commit.

---

## 2026-08-12 — Sprint 2 (deploy, QA, polish)

**Mensagem sugerida:** `feat: Sprint 2 — GitHub Pages, smoke QA e polish de layout`

**Conteúdo:**
- `.github/workflows/deploy-pages.yml` (exclui `_archive`)
- `scripts/smoke_check.py` + `docs/07-QA-SMOKE.md`
- README com badge/clone/URLs
- Crop categorias / Sopro; redes sociais ocultas
- `netlify.toml` com cache e redirects legais

---

## 2026-08-12 — Sprint 1 (UX, forms, WebP)

**Mensagem sugerida:** `feat: Sprint 1 — hero leve, coleções, Netlify Forms e WebP`

**Conteúdo:**
- Stats fora do hero (`.site-stats`); âncoras `#colecao-*`
- Menu mobile: foco, Escape, `aria-label` dinâmico
- Netlify Forms + honeypot; senhas omitidas no POST
- 18 WebP + `<picture>`; script `scripts/convert_webp.py`

---

## 2026-08-12 — Sprint 0 (SEO, a11y, links, archive)

**Mensagem sugerida:** `feat: concluir Sprint 0 — SEO, skip-link, lazy-load e stubs legais`

**Conteúdo:**
- OG / Twitter / canonical / theme-color / JSON-LD `MusicStore`
- Skip link + `main#conteudo`; lazy + decoding async below-fold
- Links `#` removidos: `footer-soon` + `pages/termos.html` / `privacidade.html`
- S0-07-A: `_archive` no Git; `.deployignore` + nota em `netlify.toml`
- Quadro atualizado: `docs/06-ACOES-IMEDIATAS.md`

---

## 2026-08-12 — Auditoria e organização profissional

**Mensagem sugerida:** `docs: auditoria Playwright e reorganização profissional da estrutura`

**Conteúdo:**
- Reorganização de `assets/images/` em `hero/`, `categories/`, `eras/`, `ambassadors/`, `_archive/`
- Atualização de paths em `index.html`
- Documentação: `docs/00`–`05`, `README.md` na raiz
- Script `scripts/audit_images.py`
- Relatório de SEO, UX/UI, responsividade e tipografia via Playwright

---

## 2026-06-05 — Commit inicial

**Mensagem:** `feat: site ArtMusic — loja de instrumentos com design azul metálico`

**Conteúdo:**
- Site completo: `index.html`, `css/styles.css`, `js/main.js`
- Imagens locais; seção Destaques removida
- Documentação inicial e `.gitignore`
- Remote: `https://github.com/JorgeRamalho/Artmusic.git` (branch `main`)

---

<!-- Adicione novos commits abaixo, do mais recente para o mais antigo -->
