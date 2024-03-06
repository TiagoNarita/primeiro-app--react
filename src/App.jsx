import Nome from "./nome";
import { useState } from "react";

function App() {
    const [aluno, setAluno] = useState("Sujeito Programador");

    function HandleChangeName(nome) {
        setAluno(nome);
    }

    return (
        <div>
            <h1>Componente App</h1>
            <br />
            <h2>Olá: {aluno}</h2>
            <button onClick={() => HandleChangeName("safadinho")}>
                Mudar Nome
            </button>
        </div>
    );
}

export default App;
