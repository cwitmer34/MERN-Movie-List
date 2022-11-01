import { Link } from "react-router-dom";
import logo from "../assets/logos/movielist.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Movie list logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="home nav-link">
            home
          </Link>
          <Link to="/new" className="new-movie nav-link">
            add movie
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
