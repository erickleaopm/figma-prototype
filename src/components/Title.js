import React from "react"

const Title = ({ title, styleClass }) => {
  return (
    <div className="section-title">
      <h1 className={`title ${styleClass ? styleClass : ""}`}>
        {title || "Default title"}
      </h1>
    </div>
  )
}

export default Title
