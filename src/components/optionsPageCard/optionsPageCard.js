import React from 'react'
import { Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './style.css'
export default function OptionPageCard({ index, intro, name, image, setType }) {
   return (
      <NavLink to={`/type/${name}`}>
         <div class="CardContainer" onClick={() => { setType(name); window.open(`/type/${name}`) }}>
            <div class="card">
               <div class="box">
                  <div class="content">
                     <h3>{name}</h3>
                     <p>{intro}</p>
                  </div>
               </div>
            </div>
         </div >
      </NavLink>
   )
}
