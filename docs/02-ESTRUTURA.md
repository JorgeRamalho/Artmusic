# 02 — Estrutura do projeto

## Árvore alvo (raiz enxuta)

```
Projeto-ArtMusic/
├── index.html                 # Única entrada HTML
├── README.md                  # Porta pública de docs
├── .gitignore
├── css/
│   └── styles.css             # Design system + layout (~30 KB)
├── js/
│   └── main.js                # Nav, reveal, formulários (~8 KB)
├── assets/
│   └── images/
│       ├── hero/              # 2 — hero-studio, hero-dj
│       ├── categories/        # 5 — cat-* (DJ reusa hero-dj)
│       ├── eras/              # 5 — era-60 … era-2000
│       ├── ambassadors/       # 6 — amb-1 … amb-6
│       └── _archive/          # 80 — candidatos / testes (não referenciados)
├── pages/
│   ├── termos.html
│   └── privacidade.html
├── docs/
│   ├── 00-INDICE.md … 07-QA-SMOKE.md
│   └── COMMITS.md
├── scripts/
│   ├── audit_images.py
│   ├── convert_webp.py
│   └── smoke_check.py
├── .github/workflows/
│   └── deploy-pages.yml       # GitHub Pages (Sprint 2)
├── netlify.toml
└── .deployignore
```

## Organização por pasta

### `css/`
| Arquivo | Responsabilidade |
|---------|------------------|
| `styles.css` | Tokens `:root`, reset, header, hero, seções, forms, footer, media queries (1024 / 768 / 480) |

### `js/`
| Arquivo | Responsabilidade |
|---------|------------------|
| `main.js` | `initNavigation`, `initScrollEffects`, `initRevealAnimations`, `initForms` + validadores |

### `assets/images/`
| Subpasta | Uso no HTML | Critério |
|----------|-------------|----------|
| `hero/` | Hero stack | Above the fold |
| `categories/` | Cards de categoria | Catálogo |
| `eras/` | Timeline gerações | Narrativa |
| `ambassadors/` | Depoimentos | Social proof |
| `_archive/` | Nenhum | Rascunhos (~15,5 MB) — manter fora do deploy ideal |

### `docs/`
Documentação numerada para leitura sequencial.

### `scripts/`
Utilitários de manutenção (não fazem parte do runtime do site).

## O que NÃO fica na raiz

- Imagens soltas
- Notas de commit avulsas
- Scripts de auditoria
- Screenshots temporários de teste

## Inventário de mídia (2026-08-12)

| Conjunto | Arquivos | Tamanho aprox. |
|----------|----------|----------------|
| Em uso no HTML | 18 | ~1,16 MB |
| Arquivo (`_archive`) | 80 | ~15,5 MB |
| Total | 98 | ~16,7 MB |

## Paths no HTML

Padrão: `assets/images/<grupo>/<arquivo>.jpg`  
Ex.: `assets/images/categories/cat-cordas.jpg`  
DJ & Eletrônicos reutiliza `assets/images/hero/hero-dj.jpg`.
