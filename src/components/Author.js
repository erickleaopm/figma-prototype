import React from "react"

const Author = ({ name, username, profile_image }) => {
  return (
    <div className="author">
      <img src={profile_image.large} alt={name} className="author-img" />
      <div className="author-info">
        <h2>{name}</h2>
        <p>@{username}</p>
      </div>
    </div>
  )
}

export default Author
