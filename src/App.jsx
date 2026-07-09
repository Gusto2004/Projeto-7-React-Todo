import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState(() => {
    const guardadas = localStorage.getItem("tarefas");
    return guardadas ? JSON.parse(guardadas) : [];
  });
  const [escuro, setEscuro] = useState(() => {
    const guardado = localStorage.getItem("tema");
    return guardado ? guardado === "escuro" : true;
  });

  useEffect(() => {
    // O QUE fazer
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]); // QUANDO fazer (a "lista de dependências")

  useEffect(() => {
    if (escuro) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
  }, [escuro]);

  function adicionarTarefa(e) {
    e.preventDefault();

    if (texto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  function apagarTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className="app">
      <div className="topo">
        <h1>As minhas tarefas</h1>
        <button className="toggle-tema" onClick={() => setEscuro(!escuro)}>
          {escuro ? "☀️" : "🌙"}
        </button>
      </div>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Escreve uma tarefa..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span
              className={tarefa.concluida ? "concluida" : ""}
              onClick={() => alternarConcluida(tarefa.id)}
            >
              {tarefa.texto}
            </span>
            <button onClick={() => apagarTarefa(tarefa.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
