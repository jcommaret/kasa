import logoHeader from "../../assets/img/logo.png"
import logoFooter from "../../assets/img/logo_footer.png"

export default function Logo(props) {
  const isHeader = props.isHeader
  if (isHeader) {
    return <img src={logoHeader} className="header-logo" alt="Logo Kasa" />
  }
  if (!isHeader) {
    return <img src={logoFooter} className="footer__logo" alt="Logo Kasa" />
  }
}
