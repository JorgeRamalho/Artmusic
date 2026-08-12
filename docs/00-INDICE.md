# Documentação ArtMusic — Índice

Documentação profissional do projeto ArtMusic (auditoria e reorganização de 2026-08-12).

| # | Documento | Conteúdo |
|---|-----------|----------|
| 00 | [INDICE](00-INDICE.md) | Este mapa de navegação |
| 01 | [PLANEJAMENTO](01-PLANEJAMENTO.md) | Visão, histórico, roadmap |
| 02 | [ESTRUTURA](02-ESTRUTURA.md) | Organização de pastas e arquivos |
| 03 | [AUDITORIA](03-AUDITORIA.md) | Relatório Playwright (SEO, UX/UI, responsividade) |
| 04 | [DESIGN-SYSTEM](04-DESIGN-SYSTEM.md) | Paleta, tipografia, componentes |
| 05 | [MAPEAMENTO-EXTERNO](05-MAPEAMENTO-EXTERNO.md) | Pastas fora da raiz do projeto |
| 06 | [ACOES-IMEDIATAS](06-ACOES-IMEDIATAS.md) | Sprint 0–2, ownership e DoD |
| 07 | [QA-SMOKE](07-QA-SMOKE.md) | Checklist + smoke automático |
| — | [COMMITS](COMMITS.md) | Registro interno de commits |

## Fluxo recomendado de leitura

1. **README** na raiz → contexto rápido  
2. **ESTRUTURA** → onde cada arquivo vive  
3. **AUDITORIA** → o que melhorar  
4. **ACOES-IMEDIATAS** → o que fazer agora (colaboração)  
5. **DESIGN-SYSTEM** → regras visuais  
6. **PLANEJAMENTO** → visão e histórico  

## Princípio da raiz enxuta

Na pasta raiz permanecem apenas:

- `index.html` — entrada
- `.gitignore` — configuração Git
- `README.md` — porta de documentação
- pastas de código/mídia/docs (`css/`, `js/`, `assets/`, `docs/`, `scripts/`, `pages/`)
