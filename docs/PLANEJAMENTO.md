# ArtMusic — Planejamento e histórico do projeto

## Visão geral

Site estático da loja **ArtMusic** (instrumentos musicais premium), desenvolvido em HTML, CSS e JavaScript puro, com imagens locais em `assets/images/`.

**Repositório remoto:** https://github.com/JorgeRamalho/Artmusic.git  
**Branch principal:** `main`

---

## Estrutura do projeto

```
Projeto-ArtMusic/
├── index.html          # Página principal (seções e conteúdo)
├── css/styles.css      # Design system (paleta azul metálica)
├── js/main.js          # Navegação, scroll reveal, formulários
├── assets/images/      # Imagens locais (categorias, hero, eras, embaixadores)
└── docs/
    ├── PLANEJAMENTO.md # Este arquivo
    └── COMMITS.md      # Registro de commits do projeto
```

---

## Histórico de desenvolvimento (chat)

### 1. Criação do site
- Loja completa com hero, marcas, categorias, destaques, linha do tempo (1960–2000), embaixadores, clube Instrumento Surpresa e formulários de cadastro.
- Design com gradientes, tipografia (Bebas Neue, Exo 2, Outfit) e animações.

### 2. Paleta e layout
- Troca da paleta rosa/laranja por **azul metálico** (`#060a10`, gradientes azul/ciano/prata).
- Hero centralizado com `.hero-inner`; galeria com 2 imagens (estúdio DJ + show ao vivo).
- Contrabaixo no hero foi adicionado e depois removido a pedido.

### 3. Correção de imagens
- URLs Unsplash/Pexels quebradas ou incorretas → download local e Wikimedia Commons quando necessário.
- **Cordas:** guitarrista (`cat-cordas.jpg`).
- **Sopro:** flauta transversal (`cat-sopro.jpg`).
- **Percussão:** bateria dourada (`cat-percussao.jpg`).
- **Teclados:** console de órgão com manuais (`cat-teclados.jpg`) — substituiu foto de árvore.
- **Áudio & Estúdio:** sala de controle com mesa de mixagem (`cat-audio.jpg`) — substituiu foto de mecânico/carro.

### 4. Ajustes de seções
- Tentativa de remover card **DJ & Eletrônicos** → desfeita (card mantido).
- Remoção parcial da coluna direita em Destaques → depois **remoção completa** da seção **Destaques da temporada** (produtos com imagens incorretas).
- Links "Ver coleção" das categorias passaram a apontar para `#categorias`.
- Menu e rodapé sem link para Destaques.

### 5. Estado atual do site

| Seção            | Status                                      |
|------------------|---------------------------------------------|
| Hero             | 2 imagens (hero-studio, hero-dj)            |
| Marcas           | Ativo                                       |
| Categorias       | 6 cards (Cordas, Sopro, Percussão, Teclados, DJ, Áudio) |
| Destaques        | **Removido**                                |
| Gerações         | Linha do tempo 60–2000                      |
| Embaixadores     | 6 cards                                     |
| Instrumento Surpresa | Formulário ativo                        |
| Cadastro         | Formulário ativo                            |

---

## Fluxo Git (commits no projeto)

1. Alterar arquivos no projeto.
2. Registrar a mudança em `docs/COMMITS.md` (data, mensagem, resumo).
3. Commitar na pasta do projeto:
   ```powershell
   cd "c:\Users\jorge\OneDrive\Desktop\Fron_End\Projetos\Projeto-ArtMusic"
   git add .
   git status
   git commit -m "descrição clara da alteração"
   git push
   ```

---

## Próximos passos sugeridos (opcional)

- Corrigir imagens dos embaixadores/produtos órfãos em `assets/images/` se forem reutilizados.
- README.md público para o GitHub.
- Preview local: `python -m http.server 8080` → http://localhost:8080
