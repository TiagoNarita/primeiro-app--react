import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Sobre from "./pages/Sobre/index";
import Header from "./ui/Header";
import Erro from "./pages/Erro";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Sobre />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
