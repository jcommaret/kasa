import "./index.scss"
import aboutItems from "./data.js"
import Accordion from "../../components/Accordion"
import ImageHeader from "../../components/ImageHeader"
import backgroundImage from "../../assets/img/about/header-big.png"

// Data
const background = backgroundImage
const imageAlt = "Image de fond du header representant des vacances"

export default function About() {
  return (
    <>
      <div className="About">
        <ImageHeader background={background} imageAlt={imageAlt} />
        <div className="Accordion-list">
          {aboutItems.map(({ title, content, index }) => (
            <Accordion key={index} title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  )
}
