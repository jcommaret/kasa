import "./index.scss"
import logements from "../../data/logements.json"

export default function LogementsList() {
  const logementsList = logements
  return (
    <>
      <div className="logementsList">
        {logementsList.map((logement, id) => (
          <div key={id} className="logementsList-item">
            <a href={`logement/${id}`}>
              <div className="logementsList-item_details">
                <img className="image" src={logement.cover} alt="plop" />
                <h2>{logement.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
