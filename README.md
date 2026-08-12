# ArtMusic

Loja premium de instrumentos musicais — site estático (HTML, CSS e JavaScript).

[![Deploy GitHub Pages](https://github.com/JorgeRamalho/Artmusic/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/JorgeRamalho/Artmusic/actions/workflows/deploy-pages.yml)

| | |
|---|---|
| **Preview local** | [http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html) |
| **Produção (Pages)** | [https://jorgeramalho.github.io/Artmusic/](https://jorgeramalho.github.io/Artmusic/) |
| **Repositório** | [github.com/JorgeRamalho/Artmusic](https://github.com/JorgeRamalho/Artmusic) |

## Clone e preview

```powershell
git clone https://github.com/JorgeRamalho/Artmusic.git
cd Artmusic
python -m http.server 8080
# → http://127.0.0.1:8080
```

Ou abra `index.html` com **Live Server** (porta 5500).

## Smoke check

```powershell
python scripts\smoke_check.py
python scripts\smoke_check.py --url http://127.0.0.1:5500/index.html
```

## Raiz do projeto (enxuta)

| Item | Função |
|------|--------|
| `index.html` | Entrada |
| `.github/workflows/` | Deploy GitHub Pages |
| `netlify.toml` / `.deployignore` | Publish Netlify / exclusões |
| `css/` · `js/` | Estilos e interação |
| `assets/images/` | Mídia (`_archive` fora do deploy) |
| `pages/` | Termos e Privacidade |
| `docs/` | Documentação + sprints |
| `scripts/` | Auditoria, WebP, smoke |

## Documentação

- Índice: [`docs/00-INDICE.md`](docs/00-INDICE.md)  
- Quadro de sprints: [`docs/06-ACOES-IMEDIATAS.md`](docs/06-ACOES-IMEDIATAS.md)  
- QA: [`docs/07-QA-SMOKE.md`](docs/07-QA-SMOKE.md)  
- Auditoria: [`docs/03-AUDITORIA.md`](docs/03-AUDITORIA.md)  

## Stack

HTML5 · CSS3 (design system azul metálico) · JS vanilla · WebP + `<picture>` · Netlify Forms · Google Fonts (Bebas Neue, Exo 2, Outfit)

## Deploy

- **GitHub Pages:** push em `main` → workflow `Deploy GitHub Pages` (exclui `_archive`, `docs`, `scripts`).  
- **Netlify (opcional):** `npx netlify deploy` com `netlify.toml`; ativar Forms no painel para `surpresa` e `cadastro`.

## Autor

**Jorge R. Barbosa**  
[LinkedIn](https://www.linkedin.com/in/jorge-r-barbosa-aabb0417b/) · [GitHub](https://github.com/JorgeRamalho)
