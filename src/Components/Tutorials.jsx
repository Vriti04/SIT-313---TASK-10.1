import React from 'react'
import Tutorials from './TutorialsLists'
import './Tutorials.css'


function images() {
  return (
    <div className="imageContainer">
      {Tutorials.map((props) => {
      return(
        <div className="imageCard"> 
        <div className="image">
          <img src= {props.src} alt="loading.." height = "100%" width = "100%"></img>
        </div>
        <div className="imageTitle">
          {props.Title}
        </div>
        <div className="imageDesc">
          <>
          <h4>Description</h4>
          {props.Desc}
          </>
        </div>
        <div className="imageEx">
          {props.example}
        </div>
        <div className="imageStar">5
        <img src={props.img} 
                alt="Loading"
                height="10%"
                width="45%"
                />
        </div>
        <div className="imageAuthor">
          {props.Author}
        </div>
      </div>
      )    
      })}
    </div>
  )
}

export default images
