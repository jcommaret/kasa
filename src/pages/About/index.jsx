import "./index.scss"
import aboutItems from "./data.js"
import Accordion from "../../components/Accordion"
import Subheader from "../../components/ImageHeader"

export default function About() {
  return (
    <>
      <Subheader />
      <div className="About">
        {aboutItems.map(({ title, description }) => (
          <Accordion title={title} content={description} />
        ))}
      </div>
    </>
  )
}
