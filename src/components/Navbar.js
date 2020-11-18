import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import home from "../assets/home.svg"
import search from "../assets/search.svg"
import plus from "../assets/plus.svg"
import chat from "../assets/chat.svg"
import user from "../assets/user.svg"

const Navbar = () => {
  return (
    <footer className="navbar">
      <AniLink fade to="/dashboard">
        <img src={home} alt="Dashboard" />
      </AniLink>
      <AniLink fade to="/search">
        <img src={search} alt="Search" />
      </AniLink>
      <AniLink fade to="/">
        <img src={plus} alt="Add" />
      </AniLink>
      <AniLink fade to="/chat">
        <img src={chat} alt="Chat" />
      </AniLink>
      <AniLink fade to="/profile">
        <img src={user} alt="Profile" />
      </AniLink>
      <div className="underline"></div>
    </footer>
  )
}

export default Navbar
