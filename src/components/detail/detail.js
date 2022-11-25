import React from 'react'
import Header from '../header/header'
import './detail.css'
export default function Detail() {
   const title = localStorage.getItem('title');
   const info = localStorage.getItem('info')
   const image = localStorage.getItem('image')
   const brief = localStorage.getItem('brief');
   return (
      <div className='detail'>
         <Header color={'#512da8'} />
         <div class="course detailPageText">
            <div class="course-preview">
               <h6>Title</h6>
               <h2>{title}</h2>
            </div>
            <div class="course-info">
               <h6>Information</h6>
               <h4>{info}</h4>
               <h6>{brief}</h6>
               {image !== "" && <img src={image} className="images"></img>}
            </div>
         </div>
      </div>
   )
}
