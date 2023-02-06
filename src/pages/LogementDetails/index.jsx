import "./index.scss"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import SliderHeader from "../../components/Slider"
import Accordion from "../../components/Accordion"

export default function LogementDetails() {
  const id = useParams().id
  const logementsList = logements
  const logement = logementsList[id]
  const title = logement.title
  const location = logement.location
  const tags = logement.tags
  const hostname = logement.host.name
  const description = logement.description

  const hostpicture = logement.host.picture
  const rating = logement.rating

  const eqts = logement.equipments
  const equipements = eqts.map((eqt, index) => <li key={index}>{eqt}</li>)

  const accordionContent = [
    { title: "Description", content: description },
    { title: "Equipements", content: equipements },
  ]

  const SliderPictures = logement.pictures
  const Arrayofpictures = SliderPictures
  const background = Arrayofpictures[0]

  return (
    <div className="Logement">
      <SliderHeader background={background} />

      <div className="Logement-Details">
        <div className="top">
          <div className="Logement-Details__place">
            <h2>{title}</h2>
            <p>{location}</p>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="Logement-Details__host">
            <div className="Logement-Details__identity">
              <p>{hostname}</p>
              <img src={hostpicture} alt="Hote" />
            </div>

            <div className="Logement-Details__ratingBox">
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="Logement-Details__commodities">
            {accordionContent.map(({ title, content, index }) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
