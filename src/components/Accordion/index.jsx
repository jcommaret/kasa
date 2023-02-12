import React, { useState } from "react"
import "./index.scss"

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        {isActive ? (
          <div className="close"></div>
        ) : (
          <div className="open"></div>
        )}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  )
}