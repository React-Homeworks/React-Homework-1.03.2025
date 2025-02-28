import React from 'react'
import "./Navbar.css"
import userImg from '/src/assets/user-profile-img.jpeg'

export default function Navbar() {
  return (
    <nav>
      <div className="userProfile">
        <img src={userImg} alt="" />
        <div className="user-info">
          <h3>Nikoloz Geladze</h3>
          <h5>Veb Developer</h5>
        </div>
      </div>
      <ul>
        <li>Services and Pricing</li>
        <li>About</li>
        <li>Contact</li>
        <li><i className="fa-solid fa-user"></i> Log In</li>
        <li><i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-linkedin-in"></i></li>
      </ul>
    </nav>
  )
}
