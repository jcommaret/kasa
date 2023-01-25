import { Link } from "react-router-dom"

import "./index.scss"

export default function ErrorPage() {
  const pageTitle = "404"
  const pageDescription = "Oups ! La page que vous demandez n'existe pas."
  const LinkToHome = "Retourner sur la page d’accueil"
  
  return (
    <div className="NotFound">
      <div className="NotFound__content">
        <h1 className="NotFound__title">{pageTitle}</h1>
        <p className="NotFound__text">{pageDescription}</p>
        <Link to="/" className="NotFound__Link">
          {LinkToHome}
        </Link>
      </div>
    </div>
  )
}
