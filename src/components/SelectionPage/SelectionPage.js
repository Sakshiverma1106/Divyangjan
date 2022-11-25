import React, { useEffect, useState } from 'react'
import Header from '../header/header';
import OptionPageCard from '../optionsPageCard/optionsPageCard'
import './SelectionPage.css';

export default function SelectionPage({ setType }) {
   const elem = [{ name: 'blind', image: 'blind.png' }, { name: 'deaf', image: 'deaf.png' }, { name: 'physically impared', image: 'physical.png' }, { name: 'speech', image: 'other.png' }, { name: 'All', image: 'other.png' }]
   const msg = new SpeechSynthesisUtterance()
   const message = 'Select Disability , Blind  , Deaf,  Physically Impared,Speech and  all or just tap and speak Disability'
   const [text, setText] = useState('nothing')
   const synth = window.speechSynthesis
   const utterThis = new SpeechSynthesisUtterance('Sorry!Please say it again')
   console.log(window, "window.onmousemove");
   useEffect(() => {
      if (text === 'nothing') {
         msg.text = message
      } else
         msg.text = text
      window.speechSynthesis.speak(msg);
   }, [text])
   const GetSpeech = () => {
      console.log("clicked microphone");
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      let recognition = new SpeechRecognition();
      recognition.onstart = () => {
         console.log("starting listening, speak in microphone");
      }
      recognition.onspeechend = () => {
         console.log("stopped listening");
         recognition.stop();
      }
      recognition.onresult = (result) => {
         const type = (result.results[0][0].transcript);
         if (type == 'blind' || type === "deaf" || type === 'death' || type === "physically impared" || type === "all")
            window.open(`/type/${type}`, "_SELF")
         else {
            setText('please say it agan')
         }
      }

      recognition.start();
   }

   return (
      <div className='SelectionPageContainer'>
         <Header color={'#512da8'} />
         < h2 className={'h2'} onClick={GetSpeech}>Please Select Disability</h2>
         <div className={'optionContainer'} >
            {
               elem.map((el, k) => <OptionPageCard setType={setType} key={k} name={el.name} image={el.image}></OptionPageCard>)
            }

         </div>
      </div >
   )
}
