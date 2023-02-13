import "./index.scss"
import { useState } from "react"

export default function SliderHeader({ text, slides, imageAlt }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToPrev = () => {
    const isFirstSlide = currentSlide === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1
    setCurrentSlide(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentSlide === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentSlide + 1
    setCurrentSlide(newIndex)
  }

  return (
    <div className="slideHeader">
      <div onClick={goToPrev} className="slideHeader-prev"></div>
      <img
        className="slideHeader-image"
        src={slides[currentSlide]}
        alt={imageAlt}
      />
      {text && <p className="slideHeader-text">{text}</p>}
      <div onClick={goToNext} className="slideHeader-next"></div>
    </div>
  )
}