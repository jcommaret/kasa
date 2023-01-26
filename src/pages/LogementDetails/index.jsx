import "./index.scss"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import Subheader from "../../components/SubHeader"

export default function LogementDetails() {
  const id = useParams().id
  const logementsList = logements
  const logement = logementsList[id]
  console.log(logement)
  const title = logement.title
  const location = logement.location
  const tags = logement.tags
  const hostname = logement.host.name
  const hostpicture = logement.host.picture
  const rating = logement.rating
  const description = logement.description
  const equipements = logement.equipments
  return (
    <div className="Logement">
      <Subheader isSlider={true} />
      <div className="LogementDetails">
        <div className="LogementDetails-place">
          <h2>{title}</h2>
          <p>{location}</p>
          <ul>
            {tags.map((tag, id) => (
              <li key={id}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="LogementDetails-host">
          <p>{hostname}</p>
          <img src={hostpicture} alt="Hote" />
          <p>{rating}</p>
        </div>

        <div className="LogementDetails-description">
          <h2>Description</h2>
          <p>{description}</p>
        </div>

        <div className="LogementDetails-equipements">
          <h2>Equipements</h2>
          <ul>
            {equipements.map((equipement, id) => (
              <li key={id}>{equipement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
