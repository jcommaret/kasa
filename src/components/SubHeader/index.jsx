import "./index.scss"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"

import backgroundHeader from "../../assets/img/subheader-big.png"

export default function Subheader(props) {
  const id = useParams().id

  const isSlider = props.isSlider

  const subheaderTextPart1 = "Chez vous,"
  const subheaderTextPart2 = "partout et ailleurs"

  if (isSlider === false) {
    return (
      <div className="subheader-NotSliding">
        <div className="subheader-NotSliding__item">
          <img src={backgroundHeader} alt="" />
          <p className="subheader-text">
            {subheaderTextPart1}
            <br />
            {subheaderTextPart2}
          </p>
        </div>
      </div>
    )
  }

  if (isSlider) {
    const logementsList = logements
    const logement = logementsList[id]
    const picturesArray = logement.pictures
    const pics = picturesArray.map((pict, id) => (
      <li key={id}>
        <img src={pict} alt="plop" />
      </li>
    ))

    return (
      <div className="subheader-Sliding">
        <ul>{pics}</ul>
      </div>
    )
  }

  return <div>NOTHING</div>
}
