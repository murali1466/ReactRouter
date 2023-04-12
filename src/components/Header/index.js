import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="blog-heading">Blog</h1>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reactrouter/src/components/About">About</Link>
          </li>
          <li>
            <Link to="/reactrouter/src/components/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
