import logo from '../../../assets/img/logo.png';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <a href="#home" className='logo'>
        <img src={logo} className="header-logo" alt="logo kasa" />
      </a>
      <nav className="header-nav">
        
        <ul className="header-nav-list">
          <li className="header-nav-list-item">
            <a href="#home" className="header-nav-list-item-link">Accueil</a>
          </li>
          <li className="header-nav-list-item">
            <a href="#a-propos" className="header-nav-list-item-link">A Propos</a>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;