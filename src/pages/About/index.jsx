import "./index.scss"
import aboutItems from "./data.js"
import Accordion from "../../components/Accordion"
import ImageHeader from "../../components/ImageHeader"
import backgroundImage from "../../assets/img/header/home.png"

// Data
const background = backgroundImage
const imageAlt = "Image de fond du header representant des vacances"

export default function About() {
  return (
    <>
      <ImageHeader background={background} imageAlt={imageAlt} />
      <div class="About">
        {aboutItems.map(({ title, description }) => (
          <Accordion title={title} content={description} />
        ))}
      </div>
    </>
  )
}
