import Nome from "./nome";

function App() {
    return (
        <div>
            <h1>Componente App</h1>
            <Nome aluno="tiago" idade={20} />
            <br />
            <Nome aluno="douglas" idade={30} />
        </div>
    );
}

export default App;
