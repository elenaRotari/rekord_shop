import "./Navbar.scss";
import { BiUser, BiSearchAlt, BiCartAlt } from "react-icons/bi";
function Navbar() {
  return (
    <header className="header">
      <h3>My Shop</h3>
      <div className="search">
        <input type="text" placeholder="Search" />
        <BiSearchAlt className="search-icon" />
        <BiUser />
        <BiCartAlt />
      </div>
    </header>
  );
}

export default Navbar;
