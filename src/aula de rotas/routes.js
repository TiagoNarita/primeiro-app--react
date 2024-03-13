import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Sobre from "./pages/Sobre/index";
import Header from "./Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
