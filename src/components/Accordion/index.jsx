import React, { useState } from "react"
import "./index.scss"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        {isActive ? (
          <div className="close">Close</div>
        ) : (
          <div className="open">Open</div>
        )}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion
