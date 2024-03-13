import { useParams } from "react-router-dom";

function Produto() {
    const { id } = useParams();

    return (
        <div>
            <h2>Detalhe do produto</h2>
            My Product is {id}
        </div>
    );
}
export default Produto;
