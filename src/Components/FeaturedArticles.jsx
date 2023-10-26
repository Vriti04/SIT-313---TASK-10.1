import React from 'react'
import Data from './ArticlesLists.jsx'
import './Tutorials.css'


function images() {
  return (
    <div className="imageContainer">
      {Data.map((item) => {
      return(
        <div className="imageCard"> 
        <div className="image">
          <img src= {item.src} alt="loading.." height = "100%" width = "100%"></img>
        </div>
        <div className="imageTitle">
          {item.Title}
        </div>
        <div className="imageDesc">
          <>
          <h4>Description</h4>
          {item.Desc}
          </>
        </div>
        <div className="imageEx">
          {item.example}
        </div>
        <div className="imageStar">5
        <img src={item.img} 
                alt="Loading"
                height="10%"
                width="45%"
                />
        </div>
        <div className="imageAuthor">
          {item.Author}
        </div>
      </div>
      )    
      })}
    </div>
  )
}

export default images
