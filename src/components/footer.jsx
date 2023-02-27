import React from 'react'


import {FiInstagram} from "react-icons/fi";
const Footer = () => {
 
  return (
<section class="section is-small">    
  
      
      <div className="columns">
        
        <div className='column'>
          <br/>
        
        </div>

        <div className="column">
            <br/>
          <div className='bottom'>
            ® Holm Developer- är ett skyddat märke
            <br />
            Holm Developer © 2023. Alla rättigheter förbehållna.<br />
          </div>
          <div className='bottom'>
            
            <a href="https://www.instagram.com/holmdev/"><FiInstagram size={32} /></a>
          

      </div>
        <div className="column">

          
        </div>
      </div>
      </div>
  
      </section>
  )
}
export default Footer;