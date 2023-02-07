import "./index.scss"

const slideHeader = ({ text, background, imageAlt }) => {
  return (
    <div className="slideHeader">
      <div className="slideHeader-prev"></div>
      <img className="slideHeader-image" src={background} alt={imageAlt} />
      {text && <p className="slideHeader-text">{text}</p>}
      <div className="slideHeader-next"></div>
    </div>
  )
}

export default slideHeader
