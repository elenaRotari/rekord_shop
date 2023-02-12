import "./Navbar.scss";
import { BiUser, BiSearchAlt, BiCartAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../useFetch.js";
function Navbar({ setProduct }) {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator("/login");
  };
  const [search, setSearch] = useFetch(
    "http://localhost:4321/api/products?search="
  );
  const handleSearch = (e) => {
    fetch("http://localhost:4321/api/products?search=" + e.target.value)
      .then((res) => res.json())
      .then((json) => setProduct((prev) => (prev = { ...prev, data: json })));
  };
  return (
    <header className="header">
      <h3>Global Records</h3>
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <BiSearchAlt className="search-icon" />
        <BiUser onClick={handleClick} className="logeduser" />
        <BiCartAlt />
      </div>
    </header>
  );
}

export default Navbar;
