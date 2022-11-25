import React, { useEffect, useLayoutEffect, useState } from 'react'
import './mainPage.css'
import SchemeContainer from '../schemeContainer/schemeContainer'
import axios from 'axios';
import Header from '../header/header';
export default function MainPage() {
   const [schemes, setSheme] = useState([]);
   const [message, setMessages] = useState([]);
   const msg = new SpeechSynthesisUtterance()
   const [stop, setStop] = useState(false)
   let final = ''
   message.forEach(element => {
      final += element;
   });
   msg.text = ['let me read some schemes for you', ...message]
   let location = window.location.href?.split('/');
   location = location[location.length - 1]
   useEffect(() => {

      async function fetchApi() {
         const data = await axios.get('http://localhost:8080');
         let filter = [];
         data?.data?.map((elem, index) => {
            console.log(elem?.key_words);
            if (elem?.key_words?.includes(location)) {
               const currentScheme = `Scheme` + (index + 1) + elem?.scheme_title + ' Invented by' + elem?.brief + ' description ' + elem?.scheme_info;
               setMessages([currentScheme, ...message])
               filter.push(elem)
            }
         })
         setSheme(filter);
      }
      fetchApi();
   }, [])
   useEffect(() => {
      if (stop) {
         window.speechSynthesis.cancel()
         return;
      }
      if (location === 'blind' && message.length > 1)
         window.speechSynthesis.speak(msg)

   }, [message.length, stop])

   return (
      <div className='schemeContainer' >
         <Header color={'#512da8'} />
         <div className='cardContainers'>
            {
               schemes.length === 0 ? <p style={{ fontSize: '20px' }}>Sorry! No Schemes Available 😢  </p> : schemes?.map(elem => <SchemeContainer title={elem.scheme_title} info={elem.scheme_info} image={elem.image} brief={elem.brief} />)
            }
         </div>
         {/* <button onClick={() => setStop(!stop)} style={{ position: 'absolute', top: '0px', width: '100px', height: '50px', left: '0px' }}>{stop ? 'Stop' : 'Start'}</button> */}
      </div>
   )
}
