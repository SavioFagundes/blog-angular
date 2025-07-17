# Films Blog - Angular

Um blog moderno e elegante sobre cinema, construído com Angular 20 e Angular Material. Este projeto oferece uma experiência rica para leitura de artigos sobre filmes, críticas cinematográficas e análises da indústria do cinema.

## 🎬 Sobre o Projeto

O Films Blog é uma aplicação web responsiva que apresenta:

- **Artigos sobre Cinema**: Análises detalhadas de filmes, desde clássicos até lançamentos contemporâneos
- **Críticas Especializadas**: Reviews aprofundadas de diferentes gêneros cinematográficos
- **Interface Moderna**: Design escuro e elegante com navegação intuitiva
- **Experiência Mobile**: Totalmente responsivo para todos os dispositivos

## 🚀 Funcionalidades

### ✨ Principais Características

- **Página Inicial**: Hero section com artigo em destaque e grid de posts recentes
- **Detalhes do Artigo**: Visualização completa dos posts com artigos relacionados
- **Sobre o Autor**: Página dedicada com informações do crítico cinematográfico
- **Navegação Responsiva**: Menu desktop e mobile com Angular Material
- **Tema Escuro**: Interface otimizada para leitura confortável

### 🎨 Design System

- **Cores Principais**: Paleta escura com vermelho (#e83f5b) como cor de destaque
- **Tipografia**: Inter como fonte principal
- **Componentes**: Angular Material com customizações
- **Responsividade**: Breakpoints para desktop, tablet e mobile

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 20**: Framework principal
- **Angular Material**: Componentes UI
- **TypeScript**: Linguagem de programação
- **SCSS**: Pré-processador CSS
- **RxJS**: Programação reativa

### Ferramentas de Desenvolvimento
- **Angular CLI**: Scaffolding e build tools
- **ESLint**: Linting de código
- **Prettier**: Formatação de código

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Instalação

1. **Clone o repositório**
```bash
git clone <https://github.com/SavioFagundes/blog-angular.git>
cd angular-blog
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale o Angular Material** (se não estiver instalado)
```bash
npm install @angular/material @angular/cdk @angular/animations
```

4. **Inicie o servidor de desenvolvimento**
```bash
ng serve
```

5. **Acesse a aplicação**
Abra o navegador e navegue para `http://localhost:4200/`

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── home/              # Página inicial
│   │   │   ├── post-detail/       # Detalhes do artigo
│   │   │   └── about/             # Sobre o autor
│   │   └── template/
│   │       └── header/            # Cabeçalho de navegação
│   ├── models/
│   │   └── post.model.ts          # Modelos de dados
│   ├── services/
│   │   └── post.service.ts        # Serviços de dados
│   ├── assets/
│   │   └── image/                 # Imagens do projeto
│   ├── app.routes.ts              # Configuração de rotas
│   └── app.config.ts              # Configuração da aplicação
├── styles.css                     # Estilos globais
└── custom-theme.scss              # Tema personalizado do Angular Material
```

## 🧭 Navegação e Rotas

- **/** - Página inicial com lista de artigos
- **/post/:id** - Detalhes de um artigo específico
- **/about** - Página sobre o autor

## 📝 Conteúdo Disponível

### Categorias de Artigos
- **Ficção Científica**: Análises de filmes do gênero sci-fi
- **Horror**: Críticas de cinema de terror
- **Clássicos**: Obras-primas atemporais do cinema
- **Indústria**: Análises sobre o negócio cinematográfico
- **Diretores**: Perfis de cineastas renomados

### Artigos Incluídos
1. "Os Melhores Filmes de Ficção Científica de 2024"
2. "A Evolução do Horror no Cinema Moderno"
3. "Clássicos do Cinema que Você Precisa Assistir"
4. "O Impacto dos Streamings na Indústria Cinematográfica"
5. "Diretores Emergentes que Você Deveria Conhecer"

## 🎨 Customização

### Alterando o Tema
Edite o arquivo `src/custom-theme.scss` para modificar as cores do Angular Material:

```scss
$primary: mat.define-palette(mat.$red-palette, 600);
$accent: mat.define-palette(mat.$gray-palette, 700);
```

### Modificando Variáveis CSS
Altere as variáveis no arquivo `src/styles.css`:

```css
:root {
    --white: #f2f2f2;
    --dark-gray: #2c2c2c;
    --darkest-gray: #202020;
    --red: #e83f5b;
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
ng serve                    # Inicia servidor de desenvolvimento
ng serve --open            # Inicia servidor e abre navegador

# Build
ng build                   # Build de produção
ng build --prod           # Build otimizado para produção

# Testes
ng test                    # Executa testes unitários
ng e2e                     # Executa testes end-to-end

# Linting
ng lint                    # Verifica código com ESLint

# Geração de componentes
ng generate component nome # Gera novo componente
ng generate service nome   # Gera novo serviço
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Savio Fagundes

## 🙏 Agradecimentos

- Angular Team pelo excelente framework
- Angular Material pela biblioteca de componentes
- Comunidade open source pelas ferramentas utilizadas

---

⭐ Se este projeto foi útil para você, não se esqueça de dar uma estrela!

## 📚 Recursos Adicionais

- [Angular Documentation](https://angular.dev)
- [Angular Material Components](https://material.angular.io)
- [Angular CLI Command Reference](https://angular.dev/tools/cli)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
