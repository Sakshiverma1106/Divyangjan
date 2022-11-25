import React, { useEffect } from 'react'
import Banner from '../banner/banner'
import Header from '../header/header'
import "./splashScreen.css"
export default function SplashScreen() {
    const message = 'Hello There!  Welcome To the Divyangjan '
    const msg = new SpeechSynthesisUtterance()
    msg.text = message
    useEffect(() => {
        window.speechSynthesis.speak(msg)
    }, [])

    return (
        <div className="welcome" id='SA'>
            <span id="splash-overlay" className="splash"></span>
            <span id="welcome" className="z-depth-4"></span>
            <Banner />
            <Header color={'rgba(0, 0, 0, 0.491)'} />
        </div>
    )
}


