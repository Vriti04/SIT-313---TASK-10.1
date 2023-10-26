import React from 'react'
import './header.css'

export default function header() {
  return (
    <header>
    <nav className="navbar">
        <ul>
          <li className="l1">DEV@DEAKIN</li>
           <input className = "bar" placeholder="Search" />
           <li><a href="">Post</a></li>
           <li><a href="">Login</a></li>
        </ul>
    </nav>
    <img src="https://i.pinimg.com/564x/cb/0a/05/cb0a05c61fd4e19a4d84c4f68df01970.jpg"  height="530px" width="100%"></img>
</header>
  )
}
