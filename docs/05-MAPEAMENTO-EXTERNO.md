# 05 — Mapeamento externo à raiz

Este documento localiza o **Projeto-ArtMusic** no disco e lista pastas irmãs / relacionadas **fora** da pasta raiz do repositório.

## Posição no filesystem

```
j:\area de trabalho\Fron_End\
├── Arquivos\                 # Banco de arquivos gerais (não é o repo)
│   ├── Aguardando\
│   ├── Imagens\
│   └── TXT\
└── Projetos\                 # Portfólio de projetos front-end
    ├── Projeto-ArtMusic\     ★ ESTE REPOSITÓRIO (raiz Git)
    ├── Projeto-Astronautech\
    ├── Projeto-Betshow\
    ├── … (dezenas de Projeto-*)
    └── …
```

## Relação com pastas fora da raiz

| Caminho | Relação com ArtMusic | Ação recomendada |
|---------|----------------------|------------------|
| `Fron_End\Projetos\` | Pasta-mãe de todos os projetos | Manter ArtMusic isolado aqui |
| `Fron_End\Arquivos\Imagens\` | Possível origem de assets brutos | Não misturar com `assets/` do site; copiar só o que for publicado |
| `Fron_End\Arquivos\TXT\` | Notas gerais | Docs oficiais ficam em `Projeto-ArtMusic/docs/` |
| `Fron_End\Arquivos\Aguardando\` | Fila / WIP externo | Evitar dependência runtime |
| Outros `Projeto-*` | Irmãos de portfólio (sem shared monorepo) | Sem imports cruzados |

## Escopo Git

O repositório Git inicia em `Projeto-ArtMusic/`.  
Pastas em `Fron_End\Arquivos\` e outros `Projeto-*` **não** fazem parte deste remote (`github.com/JorgeRamalho/Artmusic`).

## Princípio de organização

1. **Código e assets de produção** → somente dentro de `Projeto-ArtMusic/`  
2. **Rascunhos e banco bruto** → `Fron_End\Arquivos\` (ou `assets/images/_archive/` se já importados)  
3. **Documentação oficial** → `Projeto-ArtMusic/docs/`  
4. **Raiz do projeto** → apenas entrada + config + pastas nomeadas  

## Checklist de higiene externa

- [ ] Não referenciar no HTML caminhos absolutos fora do repo  
- [ ] Não commitar conteúdo de `Arquivos\` neste Git  
- [ ] Ao trazer imagem nova: colocar direto em `assets/images/<grupo>/`  
- [ ] Manter `_archive/` fora do deploy público quando possível  
