# Currículo online — Marcelo Cavassani

Site estático de currículo profissional, desenvolvido para apresentar o perfil,
as habilidades, a formação acadêmica e o histórico de carreira de Marcelo
Cavassani. A página também reúne informações de contato e links para os perfis
no GitHub e no LinkedIn.

## Tecnologias utilizadas

- **Astro 7**: framework usado para estruturar e gerar o site estático.
- **HTML**: marcação semântica do currículo, escrita em um arquivo Astro.
- **CSS**: estilos próprios, incluindo o layout em colunas e os ajustes para
  telas menores.
- **Font Awesome 6.4**: ícones de contato carregados pela CDN do cdnjs.
- **Node.js e npm**: ambiente e gerenciador de pacotes para desenvolvimento e
  build. O projeto declara Node.js `>=22.12.0`.

Não há framework JavaScript de interface nem código de aplicação executado no
navegador; a página é renderizada como conteúdo estático pelo Astro.

## Estrutura do site

### Organização dos arquivos

```text
.
├── public/
│   ├── favicon.ico       # Ícone do site
│   ├── favicon.svg       # Versão SVG do ícone
│   └── foto.jpg          # Foto de perfil exibida no currículo
├── src/
│   ├── assets/
│   │   ├── astro.svg     # Asset de exemplo do starter do Astro
│   │   └── background.svg # Asset de exemplo do starter do Astro
│   ├── components/
│   │   └── Welcome.astro # Componente de exemplo do starter
│   ├── layouts/
│   │   └── Layout.astro  # Layout de exemplo do starter
│   ├── pages/
│   │   └── index.astro   # Página principal do currículo
│   └── styles/
│       └── global.css    # Estilos globais e responsivos
├── astro.config.mjs      # Configuração do Astro
├── package.json          # Scripts, dependências e requisito do Node.js
├── package-lock.json     # Versões travadas das dependências npm
└── tsconfig.json         # Configuração de TypeScript para ferramentas
```

Os arquivos identificados como exemplos do starter (`src/assets/astro.svg`,
`src/assets/background.svg`, `src/components/Welcome.astro` e
`src/layouts/Layout.astro`) não compõem a página principal atual.

### Organização visual da página

A página `/` é implementada em `src/pages/index.astro` e segue esta sequência:

1. **Cabeçalho** — foto de perfil, nome e título profissional.
2. **Barra de contato** — localização, e-mail e links clicáveis para GitHub e
   LinkedIn.
3. **Conteúdo principal em duas colunas**:
   - **Coluna lateral**: perfil profissional, habilidades, formação acadêmica
     e referências.
   - **Coluna de carreira**: experiências profissionais em ordem cronológica,
     com período, cargo, empresa e descrição das atividades.

O CSS em `src/styles/global.css` define a tipografia, cores, espaçamentos,
ícones, colunas e aparência dos links. Em telas com largura de até `650px`, o
layout adapta as colunas para uma única coluna e reorganiza a barra de contato.

## Como executar

Na raiz do projeto:

```sh
npm install
npm run dev
```

O servidor de desenvolvimento do Astro fica disponível, por padrão, em
`http://localhost:4321`.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Abre localmente uma prévia do build de produção. |
| `npm run astro -- --help` | Exibe as opções da CLI do Astro. |

## Build para produção

Para gerar e visualizar o build localmente:

```sh
npm run build
npm run preview
```

O conteúdo final é estático e pode ser publicado em um serviço de hospedagem de
sites estáticos. Os ícones do Font Awesome dependem da disponibilidade da CDN
externa do cdnjs.
