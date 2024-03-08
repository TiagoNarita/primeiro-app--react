import { useState, useEffect } from "react";

function App() {
    const [works, setWork] = useState(["tirar o lixo", "estudar programação"]);
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("@tarefas", JSON.stringify(works));
    }, [works]);

    useEffect(() => {
        const tarefasStorage = localStorage.getItem("@tarefas");

        if (tarefasStorage) {
            setWork(JSON.parse(tarefasStorage));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setWork([...works, input]);
        setInput("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Digite uma tarefa para adicona</label>
                <br />
                <input
                    type="text"
                    placeholder="Digite aqui"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <br />
                <button type="submit">enviar</button>
                <br />
                <br />
            </form>
            <div>
                <ul>
                    {works.map((work) => (
                        <li key={work}>{work}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default App;
