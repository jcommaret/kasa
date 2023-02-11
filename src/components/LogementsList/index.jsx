import "./index.scss"
import logements from "../../data/logements.json"

export default function LogementsList() {
  const logementsList = logements
  return (
    <div className="logementsList">
      {logementsList.map((logement, id) => (
        <div key={id} className="logementsList-item">
          <a href={`logement/${id}`}>
            <div className="logementsList-item_details">
              <img
                className="image"
                loading="lazy"
                src={logement.cover}
                alt="Visuel de l'appartement"
              />
              <h2>{logement.title}</h2>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
