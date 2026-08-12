# 07 — QA Smoke (Sprint 2)

Checklist regressivo para validar o site após mudanças.  
Automatizado: `python scripts/smoke_check.py`  
Live: `python scripts/smoke_check.py --url http://127.0.0.1:5500/index.html`

## A. Automático (smoke_check.py)

- [ ] Title / description / OG / Twitter / canonical / JSON-LD  
- [ ] Skip link + `main#conteudo`  
- [ ] Hero sem stats; `.site-stats` presente  
- [ ] 6 âncoras `#colecao-*`  
- [ ] ≥18 sources WebP  
- [ ] Forms Netlify `surpresa` + `cadastro`  
- [ ] Sem `href="#"`  
- [ ] Links legais `pages/`  
- [ ] Redes sociais ocultas (comentário S2-05)  
- [ ] `hero-studio.webp` no disco  

## B. Playwright / browser (manual ou MCP)

| # | Caso | Viewport | Esperado |
|---|------|----------|----------|
| 1 | Load `index.html` | 1440×900 | Sem erros de console; imagens ok |
| 2 | Skip link (Tab) | desktop | Foco no link; Enter → `#conteudo` |
| 3 | Overflow-X | 390×844 | `scrollWidth ≈ innerWidth` |
| 4 | Menu mobile | 390×844 | Toggle abre; foco em “Categorias”; Escape fecha |
| 5 | Coleção | qualquer | Click “Ver coleção” → card `:target` |
| 6 | Form surpresa vazio | qualquer | 5 erros de validação |
| 7 | Form surpresa válido | qualquer | Mensagem de sucesso (local ok sem Netlify) |
| 8 | Termos / Privacidade | qualquer | Páginas abrem e voltam ao index |
| 9 | Lazy imgs | desktop | Below-fold com `loading="lazy"` |
| 10 | Card Sopro | desktop | Imagem enquadrada (não faixa fina vazia) |

## C. Deploy

- [ ] Push em `main` dispara `.github/workflows/deploy-pages.yml`  
- [ ] Site em `https://jorgeramalho.github.io/Artmusic/`  
- [ ] Forms aparecem no painel Netlify (se host Netlify)  
- [ ] `_archive` **não** está no artefato Pages  

## Comando rápido

```powershell
cd "j:\area de trabalho\Fron_End\Projetos\Projeto-ArtMusic"
python scripts\smoke_check.py
python scripts\smoke_check.py --url http://127.0.0.1:5500/index.html
```
