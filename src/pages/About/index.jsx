import "./index.scss"
import aboutItems from "./data.js"
import Accordion from "../../components/Accordion"

export default function About() {
  return (
    <div className="About">
      {aboutItems.map(({ title, description }) => (
        <Accordion title={title} content={description} />
      ))}
    </div>
  )
}
