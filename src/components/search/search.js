import React from 'react'
import styles from "../../styles/search.module.css"
import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
   return (
      <div className={styles.container}>
         <input className={styles.input} type="text" placeholder='Type diability'></input>
         <SearchIcon />
      </div>
   )
}
