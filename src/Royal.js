import React, { Component } from 'react';
import './Retail-Home.css'
import r1 from './RoyalEnfield/1.jpg'
import r2 from './RoyalEnfield/2.jpg'
import r3 from './RoyalEnfield/3.jpg'
import r4 from './RoyalEnfield/4.jpg'
import r5 from './RoyalEnfield/5.jpg'
import r6 from './RoyalEnfield/6.jpg'
import r7 from './RoyalEnfield/7.jpg'



 
class Royal extends Component {

    render() {

        return (

        <div id="royal">

         

         <label id="Label-Royal">Royal Enfield</label>

    

        <div id="images">

            <img id="myImg" src={r1} style={{width:50+'%', maxWidth:8+'%'}} />

            <img id="myImg" src={r3} style={{width:50+'%', maxWidth:19.7+'%'}} />

            <img id="myImg" src={r2} style={{width:50+'%', maxWidth:8+'%'}} />
            
            <img id="myImg" src={r5} style={{width:50+'%', maxWidth:19.3+'%'}} /> 

            <img id="myImg" src={r4} style={{width:50+'%', maxWidth:7.8+'%'}} />

            <img id="myImg" src={r6} style={{width:50+'%', maxWidth:16.6+'%'}} />

            <img id="myImg" src={r7} style={{width:50+'%', maxWidth:14.2+'%'}} /> 

           

        </div>

        



<div className='ret-cont'>Conceptualize and implementing the Retail and Visual Merchandising Strategy and the idea of all Visual merchandising and projects activities across EBO's and Shop in shop Concept, trade shows, and events. Coordinating and providing vendor database for execution, coordinate with the design team for content and trade show to execute every innovative idea. </div>

        </div>

        )
    }
}

export default Royal;
   
   