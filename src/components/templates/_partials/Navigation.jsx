import { Link } from "react-router-dom";
import logo from '../../../assets/img/logo.png';
import '../../sass/header.scss';

export default function Navigation() {
    return (
      <header className="header">
        <Link to="/" className='logo'>
          <img src={logo} className="header-logo" alt="logo kasa" />
        </Link>
        <nav className="header-nav"> 
          <ul className="header-nav-list">
            <li className="header-nav-list-item">
              <Link to="/" className="header-nav-list-item-link">Accueil</Link>
            </li>
            <li className="header-nav-list-item">
              <Link to="/about" className="header-nav-list-item-link">A Propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}