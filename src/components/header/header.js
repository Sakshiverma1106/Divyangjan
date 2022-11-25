import React, { useRef } from 'react'
import "./header.css"
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Link, NavLink } from 'react-router-dom';
export default function Header({ color }) {
   console.log(color);
   const onClick = () => {
      const input = text.current.value;
      window.open(`/type/${input}`, '_SELF')
   }
   const text = useRef();
   return (
      <div className='header' style={{ backgroundColor: `${color}` }}>
         <NavLink to="/" className='header-option' >
            <h1 className='header-option'>Home</h1>
         </NavLink> <NavLink to="/chooseOptions" className='header-option' >
            <h1 className='header-option'>Sort shemes</h1>
         </NavLink> <NavLink to="/type/all" className='header-option' >
            <h1 className='header-option'>All Schemes</h1>
         </NavLink>
         <div className='input'>
            <input type='text' ref={text}></input>
            <SearchIcon style={{ fill: "blue", cursor: 'pointer' }} onClick={onClick} />
         </div>

         <NavLink to="/otherLinks" className='header-option'>
            <h1 className='header-option'>Helpful links</h1>
         </NavLink>
      </div >
   )
}
