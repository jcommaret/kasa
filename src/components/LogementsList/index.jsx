import "./index.scss"
import logements from "../../data/logements.json"
import { Link } from "react-router-dom"

export default function LogementsList() {
  const logementsList = logements
  return (
    <div className="logementsList">
      {logementsList.map((logement, index) => (
        <div key={index} className="logementsList-item">
          <Link to={`logement/${index}`}>
            <div className="logementsList-item_details">
              <img
                className="image"
                loading="lazy"
                src={logement.cover}
                alt="Visuel de l'appartement"
              />
              <h2>{logement.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
