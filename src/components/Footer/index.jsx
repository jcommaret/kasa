import "./index.scss"
import Logo from "../Logo"

export default function Footer() {
  const footerText = "© 2020 Kasa. All rights reserved"
  return (
    <footer className="footer">
      <Logo isHeader={false} />
      <p>{footerText}</p>
    </footer>
  )
}
