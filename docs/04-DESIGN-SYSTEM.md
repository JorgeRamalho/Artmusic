# 04 — Design system

Fonte canônica: `css/styles.css` (`:root`).

## Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg-deep` | `#060a10` | Fundo body |
| `--color-bg` | `#0a1018` | Camadas |
| `--color-bg-elevated` | `#0f1724` | Elevação |
| `--color-bg-card` | `#141e2b` | Cards |
| `--color-text` | `#e8eef5` | Texto principal |
| `--color-text-muted` | `#8fa3b8` | Secundário |

Gradientes principais: azul elétrico → ciano → prata (`--gradient-primary`, `--gradient-text`, `--gradient-metallic`).

### Acentos por categoria
`cordas` `#38bdf8` · `sopro` `#22d3ee` · `percussao` `#60a5fa` · `teclados` `#818cf8` · `dj` `#0ea5e9` · `audio` `#94a3b8`

### Eras
`60` slate · `70` sky · `80` cyan · `90` teal · `2000` blue

## Tipografia

| Token | Stack |
|-------|-------|
| `--font-display` | Bebas Neue |
| `--font-heading` | Exo 2 |
| `--font-body` | Outfit |

Carregamento via Google Fonts (preconnect + `display=swap`).

## Forma e motion

- Raios: `--radius-sm` 8 → `--radius-xl` 32 · `--radius-full`
- Sombras: sm/md/lg + `--shadow-glow`
- Transição padrão: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Header fixo: `--header-height: 72px`
- Overlay `.grain` (noise SVG, opacity baixa)

## Componentes de UI (classes)

| Classe | Papel |
|--------|-------|
| `.btn` / `.btn-primary` / `.btn-ghost` | CTAs |
| `.category-card` | Card de catálogo |
| `.era-card` | Item de timeline |
| `.ambassador-card` | Social proof |
| `.form` / `.form-group` / `.invalid` | Formulários |
| `.reveal` / `.visible` | Entrada animada |

## Breakpoints

- ≤1024px — layout intermediário  
- ≤768px — menu hamburger, stacks  
- ≤480px — tipografia e espaçamentos compactos  

## Direção visual (resumo)

Premium musical, escuro, metálico, sem estética “purple SaaS”. Manter contraste alto e evitar proliferação de pills/glow excessivo além do já definido no sistema.
