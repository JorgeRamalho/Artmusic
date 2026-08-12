# 01 — Planejamento e histórico

## Visão do produto

**ArtMusic** é uma landing page de e-commerce conceitual para loja premium de instrumentos musicais, com curadoria por categoria e por geração (1960–2000+), clube de assinatura “Instrumento Surpresa” e cadastro de membros.

**Posicionamento:** qualidade, identidade azul metálica, narrativa intergeracional (“do vinil ao streaming”).

## Objetivos de pesquisa (auditoria 2026-08-12)

| Frente | Pergunta | Método |
|--------|----------|--------|
| SEO | Metas, hierarquia, OG, dados estruturados? | Playwright `page.evaluate` + leitura HTML |
| Usabilidade | Formulários, menu, links mortos? | Snapshot a11y + submit vazio |
| Responsividade | Overflow, tipografia, grid em 390px? | Resize 1440 / 390 + screenshots |
| Layout / UI | Hero, cards, hierarquia visual? | Screenshot + CSS tokens |
| Identidade | Tipografia e paleta coerentes? | Computed styles + `:root` |
| Estrutura | Raiz limpa? Assets órfãos? | Inventário FS + script `audit_images.py` |
| Contexto externo | Onde o projeto se encaixa no disk? | Mapeamento `Fron_End/` |

## Stack e estratégia de desenvolvimento

- **Estático** (sem bundler): HTML + CSS + JS vanilla — ideal para portfólio e Live Server.
- **Design system em CSS variables** (`css/styles.css`).
- **Interação progressiva** em `js/main.js`: header sticky, menu mobile, scroll reveal, validação de formulários (cliente).
- **Imagens locais** (sem hotlink Unsplash/Pexels em produção) — evita quebras.
- **Sem backend:** submits só validam e exibem sucesso local (demonstrativo).

## Estado das seções

| Seção | ID | Status |
|-------|-----|--------|
| Hero | — | Ativo (2 imagens) |
| Marcas | — | Ativo (faixa tipográfica) |
| Categorias | `#categorias` | 6 cards |
| Gerações | `#geracoes` | Timeline 1960–2000 |
| Embaixadores | `#embaixadores` | 6 cards |
| Instrumento Surpresa | `#surpresa` | Formulário + validação |
| Cadastro | `#cadastro` | Formulário + validação |
| Destaques | — | Removido (histórico) |

## Roadmap priorizado

Quadro operacional com IDs, donos, DoD e ordem de execução:  
**[`06-ACOES-IMEDIATAS.md`](06-ACOES-IMEDIATAS.md)** (Sprint 0 · 1 · 2).

### P0 — Sprint 0 (imediato) — concluído 2026-08-12
- [x] Meta Open Graph / Twitter Cards + canonical + theme-color + JSON-LD
- [x] `loading="lazy"` em imagens below-the-fold
- [x] Skip link de acessibilidade
- [x] Tratar links `href="#"` (+ stubs legais)
- [x] Decisão A: `_archive/` no Git; excluir do deploy

### P1 — Sprint 1 (produto) — concluído 2026-08-12
- [x] Aliviar hero (stats → `.site-stats`)
- [x] Stubs Termos e Privacidade
- [x] Âncoras `#colecao-*` por categoria
- [x] Foco do menu mobile + Escape
- [x] Netlify Forms (`surpresa` / `cadastro`)
- [x] WebP + `<picture>` nas 18 imagens ativas

### P2 — Sprint 2 (escala) — código pronto 2026-08-12
- [x] Workflow GitHub Pages + canônica documentada
- [x] README (badge, clone) + QA smoke
- [x] Aspect-ratio cards + redes ocultas até URLs reais
- [ ] Push `main` para publicar Pages (pendente mantenedor)

## Histórico resumido

1. Criação do site completo (hero → footer).  
2. Paleta rosa/laranja → **azul metálico**.  
3. Download local de imagens; correção de categorias.  
4. Remoção da seção Destaques.  
5. **2026-08-12:** auditoria Playwright + reorganização profissional de pastas e docs.

## Git

Remote: `https://github.com/JorgeRamalho/Artmusic.git` · branch `main`  
Registro interno: [`COMMITS.md`](COMMITS.md)
