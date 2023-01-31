import logoHeader from "../../assets/img/logo/header/logo.png"
import logoFooter from "../../assets/img/logo/footer/logo.png"

export default function Logo(props) {
  const isHeader = props.isHeader

  if (isHeader) {
    return <img src={logoHeader} className="header-logo" alt="Logo Kasa" />
  }

  if (!isHeader) {
    return <img src={logoFooter} className="footer__logo" alt="Logo Kasa" />
  }
}
