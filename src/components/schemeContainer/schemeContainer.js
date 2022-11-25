import React, { useEffect } from 'react'
import './schemeContainer.css'

export default function SchemeContainer({ title, info, image, brief }) {
   const onClick = () => {
      localStorage.setItem('title', title)
      localStorage.setItem('info', info)
      localStorage.setItem('image', image)
      localStorage.setItem('brief', brief)
      window.open('/detail', "_SELF")
   }
   return (
      <div class="courses-container">
         <div class="course">
            <div class="course-preview">
               <h6>Name</h6>
               <h2>{title}</h2>
            </div>
            <div class="course-info">
               <h6>Information</h6>
               <h4>{info}</h4>
               <div class="continueBtn" onClick={onClick}>Continue Reading</div>
            </div>
         </div>
      </div>

   );
}
