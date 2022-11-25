import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./banner.css"
export default function Banner() {
   function ChangeToNextImage() {
      x = (x === imageArray.length - 1) ? 0 : x + 1;
      document.getElementById("img")
         .src = imageArray[x];
   }

   function ChangeToPreviousImage() {
      x = (x <= 0) ? imageArray.length - 1 : x - 1;
      document.getElementById("img")
         .src = imageArray[x];
   }

   function startTimer() {
      setInterval(ChangeToNextImage, 3000);
   }
   useEffect(() => {
      startTimer()
   }, [startTimer])
   const thoughts = ["Your present circumstances don't determine where you can go; they merely determine where you start.", "Aerodynamically the bumblebee shouldn't be able to fly. But the bumblebee doesn't know that so it goes on flying anyway.", "It does not matter how slowly you go as long as you do not stop.", "I don't need easy. I just need possible.", "I don't know what lies around the bend, but I'm going to believe that the best does."]
   const min = 0;
   const max = thoughts.length;
   const rand = min + Math.random() * (max - min);
   const thoughtOfDaya = thoughts[Math.round(rand)]
   var x = -1;
   var imageArray = ["https://spng.subpng.com/20220826/saz/motivational-quote-mobile-phone-green-for-international-disability-day-63082e23655bd9.68163224.jpg", 'https://ecdn.teacherspayteachers.com/thumbitem/Free-disABILITY-motivational-posters-5241564-1656584239/original-5241564-2.jpg', 'https://i.pinimg.com/736x/63/29/71/63297195466c0f58ddb27b6a437992ed.jpg', 'https://image.shutterstock.com/image-vector/disabled-woman-leg-prosthesis-smiling-260nw-1490695421.jpg']
   return (
      <div className='banner'>
         <div class="container">
            <div class="scroller">
               <div class="inner">
                  <span>Welcome To Divyangjan</span>
                  <span>We are here to help you</span>
                  <span>Disability need not be  <a class="blue">an Obstacle to success</a> </span>
               </div>
            </div>
            <div className="thougth">~ {thoughtOfDaya} 😊 🤞 </div>
            <div className="btns">
               <NavLink style={{ textDecoration: 'none' }} to="/chooseOptions"><div className='navigationBtn left'>Sort Schemes</div> </NavLink>
               <NavLink style={{ textDecoration: 'none' }} to='/type/all'>  <div className='navigationBtn right'>All Schemes</div>
               </NavLink>
            </div>
         </div>
         <div class="container2">
            <img className='img1' id="img" style={{ backgroundImage: 'url("https://ecdn.teacherspayteachers.com/thumbitem/Free-disABILITY-motivational-posters-5241564-1656584239/original-5241564-2.jpg")' }}></img>
         </div>
      </div>
   )
}
