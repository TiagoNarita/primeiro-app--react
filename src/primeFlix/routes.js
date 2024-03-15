import { Routes, Route, BrowserRouter } from "react-router-dom";
import Filme from "./pages/Filmes";
import Home from "./pages/Home";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
