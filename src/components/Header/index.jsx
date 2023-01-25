import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import "./index.scss"

export default function Navigation() {
  const navItems = ["Accueil", "A Propos"]
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} className="header-logo" alt="logo kasa" />
      </Link>
      <nav className="header-nav">
        <ul className="header-nav-list">
          {navItems.map((navText) => (
            <li className="header-nav-list-item">
              <Link to="/" className="header-nav-list-item-link">
                {navText}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
