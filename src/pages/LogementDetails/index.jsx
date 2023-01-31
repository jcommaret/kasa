import "./index.scss"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import Subheader from "../../components/ImageHeader"
import Accordion from "../../components/Accordion"

export default function LogementDetails() {
  const id = useParams().id
  const logementsList = logements
  const logement = logementsList[id]

  const title = logement.title
  const location = logement.location
  const tags = logement.tags
  const hostname = logement.host.name
  const hostpicture = logement.host.picture
  const rating = logement.rating
  const description = logement.description

  const eqts = logement.equipments
  const equipements = eqts.map((eqt, index) => <li key={index}>{eqt}</li>)

  const accordionContent = [
    { title: "Description", content: description },
    { title: "Equipements", content: equipements },
  ]

  return (
    <div className="Logement">
      <Subheader />
      <div className="LogementDetails">
        <div className="top">
          <div className="LogementDetails-place">
            <h2>{title}</h2>
            <p>{location}</p>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="LogementDetails-host">
            <p>{hostname}</p>
            <img src={hostpicture} alt="Hote" />
            <p>{rating}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="LogementDetails-Commodities">
            {accordionContent.map(({ title, content, index }) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
