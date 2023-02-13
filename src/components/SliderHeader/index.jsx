import "./index.scss"
import { useState } from "react"

export default function SliderHeader({ slides, imageAlt }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentNumber, setCurrentNumber] = useState(1)

  const goToPrev = () => {
    const isFirstSlide = currentSlide === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1
    const isFirstNumber = currentNumber === 1
    const newNumber = isFirstNumber ? slides.length : currentNumber - 1
    setCurrentSlide(newIndex)
    setCurrentNumber(newNumber)
  }

  const goToNext = () => {
    const isLastSlide = currentSlide === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentSlide + 1
    const isLastNumber = currentNumber === slides.length
    const newNumber = isLastNumber ? 1 : currentNumber + 1
    setCurrentSlide(newIndex)
    setCurrentNumber(newNumber)
  }

  return (
    <div className="sliderHeader">
      <div onClick={goToPrev} className="sliderHeader-prev"></div>
      <img
        className="sliderHeader-image"
        src={slides[currentSlide]}
        alt={imageAlt}
      />
      <p className="sliderHeader-text">
        {[currentNumber]}/{slides.length}
      </p>

      <div onClick={goToNext} className="sliderHeader-next"></div>
    </div>
  )
}