# To-do List (React)

A React version of my to-do list, built with Vite. It's the same problem as [Project 2](https://github.com/Gusto2004/Projeto-2-To-do-List), but solved with components and state instead of direct DOM manipulation.

## Features

- Add tasks (ignores empty text or text with only spaces)
- Mark a task as completed by clicking its text
- Delete tasks
- Tasks are saved in the browser (`localStorage`), so they survive a refresh
- Dark / light mode with a toggle button, also remembered between visits

## Technologies

- React 19 (`useState`, `useEffect`)
- Vite
- Plain CSS (CSS variables for the themes)
- ESLint
- `gh-pages` for deployment

## How to run

You need [Node.js](https://nodejs.org) installed.

```bash
npm install     # installs the dependencies
npm run dev     # starts the development server
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

Other useful commands:

```bash
npm run build     # builds the production version into the dist/ folder
npm run preview   # previews the build locally
npm run deploy    # publishes to GitHub Pages
```

## Structure

```
src/
  main.jsx     # entry point, mounts App
  App.jsx      # single component with all the logic
  App.css      # app styles
  index.css    # global styles and theme variables
```

## What I learned

- **`useState`** to hold state (input text, task list, theme). The initial state is read from `localStorage` through a function, so it only runs on the first render.
- **`useEffect`** for side effects: whenever `tasks` changes, I save them to `localStorage`; whenever the theme changes, I update the `<body>` class.
- **Immutability**: I never change the list directly. I use `[...tasks, newTask]` to add, `.map()` to edit a task and `.filter()` to remove one.
- **`key`** on each `<li>` so React knows which item is which when the list changes.

## Demo

🔗 [View the live app](https://gusto2004.github.io/Projeto-7-React-Todo/)

## Next steps

- [ ] Split `App.jsx` into components (`Form`, `TaskList`, `Task`)
- [ ] Filters: all / to do / completed
- [ ] Edit the text of an existing task
- [ ] Connect to the backend from [Project 4](https://github.com/Gusto2004/Projeto-4-Backend-To-do) instead of `localStorage`
