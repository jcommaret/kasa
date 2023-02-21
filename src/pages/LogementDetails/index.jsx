import "./index.scss"
import { useNavigate, useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import SliderHeader from "../../components/SliderHeader"
import Accordion from "../../components/Accordion"
import StarRating from "../../components/StarRating"
import Identity from "../../components/Identity"
import Place from "../../components/Place"
import { useEffect, useState } from "react"

export default function LogementDetails() {
  const id = useParams().id
  const navigate = useNavigate()
  const logementsList = logements
  const [logement, setLogement] = useState()

  const equipementsList = (logement_) => {
    return (
      <>
        {logement_ && (
          <ul>
            {logement_.equipments?.map((eqt, index) => (
              <li key={index}>{eqt}</li>
            ))}
          </ul>
        )}
      </>
    )
  }

  useEffect(() => {
    const page = parseInt(id)
    let error = false
    if (page) {
      if (logementsList.length > page) {
        const log = logementsList[page]
        if (log) {
          const accordeonContent = [
            {
              title: "Description",
              content: log.description,
            },
            {
              title: "Equipements",
              content: equipementsList(log),
            },
          ]
          setLogement({
            ...logement,
            id: log.id,
            title: log.title,
            cover: log.cover,
            pictures: log.pictures,
            description: log.description,
            host: log.host,
            rating: log.rating,
            location: log.location,
            equipments: log.equipements,
            tags: log.tags,
            accordeonContent: accordeonContent,
          })
        } else {
          error = true
        }
      } else {
        error = true
      }
    } else {
      error = true
    }
    if (error === true) {
      navigate("/error")
    }
  }, [id])

  const numbersOfStars = 5

  return (
    <div className="Logement">
      {logement && (
        <SliderHeader slides={logement.pictures} imageAlt={logement.title} />
      )}
      {logement && (
        <div className="Logement-Details">
          <div className="top">
            <div className="Logement-Details__place">
              <Place
                title={logement.title}
                location={logement.location}
                tags={logement.tags}
              />
            </div>
            <div className="Logement-Details__host">
              <Identity
                hostname={logement.hostname}
                hostpicture={logement.host.picture}
              />
              <StarRating count={numbersOfStars} rating={logement.rating} />
            </div>
          </div>
          <div className="bottom">
            <div className="Logement-Details__commodities">
              {logement.accordeonContent.map(({ title, content }, index) => (
                <Accordion key={index} title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
