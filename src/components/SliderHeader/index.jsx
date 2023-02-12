import "./index.scss"
import { useState } from "react"

export default function SliderHeader({ text, background, imageAlt }) {
  let [currentSlide] = useState(0)

  return (
    <div className="slideHeader">
      <div
        //        onClick={ChangeSlide(background[currentSlide]-1)}
        className="slideHeader-prev"
      ></div>
      <img
        className="slideHeader-image"
        src={background[currentSlide]}
        alt={imageAlt}
      />
      {text && <p className="slideHeader-text">{text}</p>}
      <div
        //      onClick={ChangeSlide(background[currentSlide]+1)}
        className="slideHeader-next"
      ></div>
    </div>
  )
}