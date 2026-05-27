# cavassani.github.io

Portfolio pessoal de **Marcelo Sanches Cavassani** — Analista de Engenharia de TI.

Site one-page hospedado no GitHub Pages, desenvolvido com Bootstrap 4 e jQuery.

## Seções

- **Home** — Apresentação com parallax e overlay gradiente
- **Serviços** — APIs e Integrações, Sistemas Corporativos, Desenvolvimento de Jogos (Godot)
- **Projetos** — Repositórios do GitHub carregados dinamicamente via API
- **Habilidades** — Tabela com linguagens, frameworks, ferramentas e conhecimentos
- **Contato** — Links diretos para WhatsApp e Telegram

## Tecnologias

- HTML5 + CSS3
- Bootstrap 4.4
- jQuery 1.11
- Font Awesome 4.3 / Simple Line Icons
- WOW.js (animações ao scroll)
- GitHub REST API (repositórios dinâmicos)
- Formspree (formulário de contato — comentado)

## Estrutura

```
cavassani.github.io/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── style.css       # Estilos customizados
│   │   ├── animate.css     # Animações WOW.js
│   │   ├── font-awesome.min.css
│   │   └── simple-line-icons.css
│   ├── js/
│   │   ├── custom.js       # Scripts principais
│   │   ├── githubapi.js    # Integração com GitHub API
│   │   ├── wow.min.js
│   │   └── jquery-1.11.1.min.js
│   ├── bootstrap/          # Bootstrap 4.4
│   ├── fonts/              # Icon fonts
│   ├── images/             # Imagens do layout
│   └── php/
│       └── contact.php     # (mantido como referência)
├── assets/
│   └── images/             # Imagens (cover, projetos, etc.)
└── README.md
```

## Como rodar localmente

```bash
git clone https://github.com/cavassani/cavassani.github.io.git
cd cavassani.github.io
# Abra o index.html no navegador
open index.html
```

Nenhum build step ou servidor necessário — é HTML estático.

## Deploy

O deploy é automático via GitHub Pages. Toda alteração na branch `master` é publicada em:

```
https://cavassani.github.io
```

## Personalização

### Conteúdo

Edite `index.html` para alterar textos, seções e links.

### Estilos

Cores e layout em `assets/css/style.css`. Variáveis de cor usadas:

| Cor | Uso |
|-----|-----|
| `#4A4A4A` | Primária (botões, footer, navbar ativo, ícones) |
| `#2D2D2D` | Hover dos botões |
| `#E7746F` | Coral (links e destaques) |
| `#FFD700` | Amarelo Pac-Man (preloader) |

### Links de contato

Em `index.html`, atualize os atributos `href`:

```html
<a href="https://wa.me/55DDDSEUNUMERO">WhatsApp</a>
<a href="https://t.me/SEUUSUARIO">Telegram</a>
```

### Projetos do GitHub

Os repositórios são carregados automaticamente pela função `requestUserRepositories("cavassani")` em `assets/js/githubapi.js`. Para usar com outro usuário, altere o parâmetro.

## Histórico de mudanças

- Substituição do formulário por botões de contato direto (WhatsApp + Telegram)
- Modernização visual (gradientes, sombras, cores consistentes)
- Remoção de ~400 linhas de CSS morto e 8 scripts JS não utilizados
- Preloader substituído por spinner CSS
- Paleta de azul para cinza

## Licença

MIT
