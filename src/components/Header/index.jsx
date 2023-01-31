import { Link } from "react-router-dom"
import Logo from "../Logo"
import navItems from "./data.js"
import "./index.scss"

export default function Navigation() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo isHeader={true} />
      </Link>
      <nav className="header-nav">
        <ul className="header-nav-list">
          {navItems.map((nav, index) => (
            <li key={index} className="header-nav-list-item">
              <Link to={nav.link} className="header-nav-list-item-link">
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
