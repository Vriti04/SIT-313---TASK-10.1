import React from 'react'
import './email.css'

function Email(){
    return(
      <div class="container">
      <h1 id="h">DEV@DEAKIN</h1>
      <h1 id="sub">Subscribe for the Latest Updates</h1>

  
      <form id="subscribe-form" action="/subscribe" method="POST">
  
        <input className="in"  type="email" id="email" name="email" placeholder="Enter your email" required/>
        <button id="btn" type="submit">Subscribe</button>
      </form>
      <p id="message" class="hidden"></p>
    </div>

    )
}

export default Email;