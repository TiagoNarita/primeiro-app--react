import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
        <header>
            <h2 className="title">Tiago Narita</h2>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>Sobre</Link>
            </div>
        </header>
    );
};

export default Header;
