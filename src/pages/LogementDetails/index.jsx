import "./index.scss"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import SliderHeader from "../../components/SliderHeader"
import Accordion from "../../components/Accordion"
import StarRating from "../../components/StarRating"
import Identity from "../../components/Identity"
import Place from "../../components/Place"

export default function LogementDetails() {
  const id = useParams().id
  const logementsList = logements
  const logement = logementsList[id]
  const slides = logement.pictures
  const imageAlt = "Visuels du logement"
  const title = logement.title
  const location = logement.location
  const tags = logement.tags
  const hostname = logement.host.name
  const hostpicture = logement.host.picture

  const description = logement.description
  const equipementArray = logement.equipments
  const equipementsList = () => {
    return (
      <ul>
        {equipementArray.map((eqt, index) => (
          <li key={index}>{eqt}</li>
        ))}
      </ul>
    )
  }
  const equipements = equipementsList()

  const accordionContent = [
    { title: "Description", content: description },
    { title: "Equipements", content: equipements },
  ]
  const rating = logement.rating
  const numbersOfStars = 5

  return (
    <div className="Logement">
      <SliderHeader slides={slides} imageAlt={imageAlt} />

      <div className="Logement-Details">
        <div className="top">
          <div className="Logement-Details__place">
            <Place title={title} location={location} tags={tags} />
          </div>
          <div className="Logement-Details__host">
            <Identity hostname={hostname} hostpicture={hostpicture} />
            <StarRating count={numbersOfStars} rating={rating} />
          </div>
        </div>
        <div className="bottom">
          <div className="Logement-Details__commodities">
            {accordionContent.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
