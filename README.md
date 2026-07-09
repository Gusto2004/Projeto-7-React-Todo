# Lista de Tarefas (React)

Versão em React da minha lista de tarefas, construída com Vite. É o mesmo problema do [Projeto 2](https://github.com/Gusto2004/Projeto-2-To-do-List), mas resolvido com componentes e estado em vez de manipulação direta do DOM.

## Funcionalidades

- Adicionar tarefas (ignora texto vazio ou só com espaços)
- Marcar como concluída, clicando no texto da tarefa
- Apagar tarefas
- As tarefas ficam guardadas no browser (`localStorage`), logo sobrevivem a um refresh
- Modo escuro / claro com botão de alternância, também memorizado entre visitas

## Tecnologias

- React 19 (`useState`, `useEffect`)
- Vite
- CSS puro (variáveis CSS para os temas)
- ESLint
- `gh-pages` para o deploy

## Como correr

Precisas de ter o [Node.js](https://nodejs.org) instalado.

```bash
npm install     # instala as dependências
npm run dev     # arranca o servidor de desenvolvimento
```

Depois abre o endereço que aparece no terminal (normalmente `http://localhost:5173`).

Outros comandos úteis:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # vê localmente o resultado do build
npm run deploy    # publica no GitHub Pages
```

## Estrutura

```
src/
  main.jsx     # ponto de entrada, monta o App
  App.jsx      # componente único com toda a lógica
  App.css      # estilos da app
  index.css    # estilos globais e variáveis de tema
```

## O que aprendi

- **`useState`** para guardar o estado (texto do input, lista de tarefas, tema). O estado inicial é lido do `localStorage` através de uma função, para só correr no primeiro render.
- **`useEffect`** para os efeitos secundários: sempre que as `tarefas` mudam, gravo-as no `localStorage`; sempre que o tema muda, atualizo a classe do `<body>`.
- **Imutabilidade**: nunca altero a lista diretamente. Uso `[...tarefas, nova]` para adicionar, `.map()` para editar uma tarefa e `.filter()` para remover.
- **`key`** em cada `<li>` para o React saber que item é qual quando a lista muda.

## Demo

🔗 [Ver app ao vivo](https://gusto2004.github.io/Projeto-7-React-Todo/)

## Próximos passos

- [ ] Separar o `App.jsx` em componentes (`Formulario`, `ListaTarefas`, `Tarefa`)
- [ ] Filtros: todas / por fazer / concluídas
- [ ] Editar o texto de uma tarefa já criada
- [ ] Ligar ao backend do [Projeto 4](https://github.com/Gusto2004/Projeto-4-Backend-To-do) em vez do `localStorage`
