import React from 'react'
import Logo from '../images/Logo.jpg'
import chairaman from '../images/chairman.jpg'
import college from '../images/college_pic.jpeg.jpg'

export default function Rootlayout() {
  return (
    <div>
      <nav >
      <img src={chairaman} height="150px" className="chairman"></img>
      <img src={Logo} width="80%" height="150px"></img>
      
      <img className = "college"src={college} height="150px"></img>
        

    </nav>
      <div className="scroll">
      <marquee bgcolor="red" className="nrmltext second" scrollamount="10">This is an info</marquee>
        <marquee bgcolor="blue" className="nrmltext temp" scrollamount="5">Vignan Visakhapatnam, is organizing a one-week ATAL FDP under the AICTE IDEA Lab on "Emerging Trends in 3D Printing & Design Thinking" in *Physical/Offline Mode* and is scheduled to take place from *December 18th to December 23rd, 2023*. The brochure is attached herewith for your kind perusal, and registration is open now.</marquee>
      
      </div>
      
    </div>
    
    
  )
}
