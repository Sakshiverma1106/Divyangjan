import React from 'react'
import { helpfulLinks } from '../utils'
import "./helpfullink.css"
import Header from '../header/header'
export default function HelpfullLink() {

  return (
    <div className='helplink-container'>
      <Header color={'rgba(0, 0, 0, 0.491)'}></Header>
      <h1 className='container-h1'>Some Popular Weblinks</h1>
      <div className='imageContainer'>
        <div className='image image1' onClick={() => { window.open(helpfulLinks[0], "_self") }}></div>
        <div className='image image2' onClick={() => { window.open(helpfulLinks[1], "_self") }}></div>
        <div className='image image3' onClick={() => { window.open(helpfulLinks[2], "_self") }}></div>
      </div>
    </div>
  )
}
