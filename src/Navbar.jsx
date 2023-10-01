import { Link } from "react-router-dom";
const Navbar = () => {
  return ( 
    <nav className="nav">
      <Link to="/" className="site-title">Abazrashid</Link>
      <ul>
        <li className="active">
          <Link to="/pricing">Pricing</Link>
        </li> 
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;