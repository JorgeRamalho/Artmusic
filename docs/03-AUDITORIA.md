# 03 — Auditoria completa (Playwright)

**URL auditada:** http://127.0.0.1:5500/index.html  
**Data:** 2026-08-12  
**Ferramenta:** Playwright MCP (`user-playwright`)  
**Viewports:** Desktop 1440×900 · Mobile 390×844  

## Score resumido (0–10)

| Dimensão | Nota | Veredito |
|----------|------|----------|
| SEO técnico | 4,5 | Base ok; faltam OG, canonical, JSON-LD |
| Usabilidade | 7,5 | Forms e nav sólidos; muitos links `#` |
| Responsividade | 8,0 | Sem overflow; menu e grid ok no mobile |
| Layout / composição | 7,0 | Forte atmosfera; hero denso (stats + 2 CTAs) |
| Identidade visual | 8,0 | Azul metálico coerente + tipografia expressiva |
| Tipografia | 8,5 | Bebas Neue / Exo 2 / Outfit bem hierarquizados |
| UX / UI | 7,5 | Landmarks e labels bons; falta skip-link |
| Funcionalidade | 7,0 | Validação cliente ok; sem persistência |
| Estratégia de código | 7,5 | Vanilla limpo; assets órfãos eram o maior risco |
| Estrutura de projeto | 9,0 | Após reorganização: raiz enxuta + docs |

**Média ponderada aproximada: 7,4 / 10**

---

## 1. SEO

### Presente
- `lang="pt-BR"`
- `<title>` descritivo: *ArtMusic | Instrumentos Musicais Premium*
- `meta name="description"` (~155 caracteres, alinhada ao produto)
- `viewport` correto
- Um único `h1`; cinco `h2` coerentes com seções
- Favicon SVG data-URI
- 19 imagens com `alt` preenchido (0 alts vazios, 0 imagens quebradas)

### Ausente / frágil
- Sem Open Graph (`og:title`, `og:image`, …)
- Sem Twitter Cards
- Sem `link rel="canonical"`
- Sem JSON-LD (`Organization` / `Store`)
- Sem `meta theme-color` / `robots`
- Links de categoria apontam para `#categorias` (não há páginas de coleção)
- 14 âncoras `href="#"` (footer / termos) — sinal negativo para crawlers e usuários

---

## 2. Usabilidade e acessibilidade

### Pontos fortes
- Landmarks: `header`, `nav`, `main`, `footer`
- Menu mobile com `aria-label` e `aria-expanded` (teste: abre e seta `true`)
- Formulários: labels 1:1 com campos; `aria-live` nos erros
- Submit vazio do clube surpresa retornou 5 erros claros:
  - nome, e-mail, estilo, plano, termos
- Máscara de telefone e regra de idade (≥16) no cadastro

### Gaps
- Sem skip link “Ir para o conteúdo”
- Favicon emoji 🎸 e ícones emoji no UI — inconsistentes em alguns SOs
- Termos / Privacidade / redes sociais / Outlet = placeholders
- Scroll listener no header sem `passive` (impacto menor)

---

## 3. Responsividade

| Viewport | Overflow-X | Menu | Hero title | Grid categorias |
|----------|------------|------|------------|-----------------|
| 1440×900 | Não | Links horizontais | 96px | multi-coluna |
| 390×844 | Não | Toggle visível / open | 56px | 1 coluna (~359px) |

Breakpoints CSS: `1024px`, `768px`, `480px`.

---

## 4. Layout e composição

### Hierarquia de seções
1. Hero (marca + H1 + subtítulo + 2 CTAs + stats + stack de imagens)  
2. Marcas tipográficas  
3. Categorias (6 cards)  
4. Gerações (timeline)  
5. Embaixadores  
6. Surpresa (oferta + form)  
7. Cadastro  
8. Footer  

### Observações de design (alinhadas a boas práticas de landing)
- **Marca no hero:** logo no header + H1 forte — ok, mas o primeiro viewport concentra stats + stack de imagens (alto ruído para “uma composição”).
- **Cards:** categorias e embaixadores usam cards como unidades interativas/conteúdo — aceitável; hero não usa “card flutuante” de promo sticker.
- **Atmosfera:** fundo profundo `#060a10`, grain, orbs e gradientes — identidade clara (não flat genérico).
- **Conceito:** “todas as gerações” é bem contado pela timeline; falta página “Sobre” para aprofundar a marca.

---

## 5. Identidade visual e tipografia

| Papel | Família | Uso observado |
|-------|---------|---------------|
| Display | Bebas Neue | Logo, H1 (~96px desktop) |
| Heading | Exo 2 | Títulos de seção |
| Body | Outfit | Texto corrido |

Paleta: azul metálico / ciano / prata sobre preto-azulado. Contraste texto `#e8eef5` em `#060a10` — alto. Gradientes em CTAs e `.gradient-text` reforçam o metal/tech musical.

---

## 6. Funcionalidade

| Feature | Status |
|---------|--------|
| Smooth scroll âncoras | OK |
| Header scrolled | OK |
| Menu mobile | OK |
| IntersectionObserver reveal | OK |
| Validação surpresa / cadastro | OK (client-only) |
| Persistência / API | Não implementado (demo) |
| Console errors | 0 warnings/errors no load |

---

## 7. Performance e assets (pré/pós organização)

- **Antes:** 98 JPGs flat em `assets/images/` (~16,7 MB), sendo **80 órfãos (~15,5 MB)**.
- **Depois:** 18 ativos em pastas semânticas; 80 em `_archive/`.
- Below-the-fold ainda sem `loading="lazy"` (só hero com `eager`).
- Algumas imagens de categoria com aspect ratio extremo (ex.: flauta 826×182) — risco de crop estranho no card.

---

## 8. Estratégia de desenvolvimento

**Adequada ao estágio:** site de portfólio / protótipo de marca sem build step.  
**Próximo salto natural:** Netlify Forms ou backend leve + compressão WebP + páginas internas de coleção.

---

## Checklist de ação (prioridade)

1. OG + Twitter + canonical + JSON-LD  
2. `loading="lazy"` nas imgs não-hero  
3. Skip link + revisar foco do menu  
4. Resolver ou remover links `#`  
5. Excluir `_archive/` do deploy (ou `.gitignore` se não for versionar)  
6. Aliviar stats do primeiro viewport ou mover para seção seguinte  
7. WebP / compressão das 18 imagens ativas  
