import logo from "../white-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <ul className="nav-items">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Blogs</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
