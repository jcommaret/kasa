import "./index.scss"

const imageHeader = ({ text, background, imageAlt }) => {
  return (
    <div className="imageHeader">
      <img className="imageHeader-image" src={background} alt={imageAlt} />
      {text && <p className="imageHeader-text">{text}</p>}
    </div>
  )
}

export default imageHeader
