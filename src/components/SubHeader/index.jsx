import "./index.scss"

export default function Subheader(props) {
  const isSlider = props.isSlider

  const subheaderTextPart1 = "Chez vous,"
  const subheaderTextPart2 = "partout et ailleurs"

  if (isSlider) {
    return (
      <div className="subheader">
        <p className="subheader-text">put slider here</p>
      </div>
    )
  }

  if (isSlider === false) {
    return (
      <div className="subheader">
        <p className="subheader-text">
          {subheaderTextPart1}
          <br />
          {subheaderTextPart2}
        </p>
      </div>
    )
  }
}
