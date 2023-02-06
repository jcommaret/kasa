import "./index.scss"

const slideHeader = ({ text, background, imageAlt }) => {
  return (
    <div className="slideHeader">
      <img className="slideHeader-image" src={background} alt={imageAlt} />
      {text && <p className="imageHeader-text">{text}</p>}
    </div>
  )
}

export default slideHeader
