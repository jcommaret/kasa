import "./index.scss"

import logoFooter from "../../assets/img/logo_footer.png"

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo Kasa" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
