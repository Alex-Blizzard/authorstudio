import React, { Component } from 'react';
import './Design.css';
import o1 from './Oppo/1.png';
import o2 from './Oppo/2.png';
import o3 from './Oppo/3.png';
import ParticleAnimation from 'react-particle-animation';

class Oppo extends Component {


    render() {

        return (

        <div id="oppo">
        <ParticleAnimation style={{ position: 'absolute', width: '215vw', height: '100%' }}  background={{r: 0, g: 0, b: 0, a: 255}}/>

         <label id="Label" >Web Design</label>

        <div id="images">

            <img id="myImg" src={o2} style={{width:29+'%', maxWidth:29+'%'}} />

            <img id="myImg" src={o3} style={{width:29+'%', maxWidth:29+'%'}} />

            <img id="myImg" src={o1} style={{width:29+'%', maxWidth:29+'%'}} />
            
            

        </div>

        



<div className='oppo-cont'>To celebrate the first flagship store of the Italian brand MARIA GRAZIA SEVERI in Milan ,With implementation of Visual Merchandising Strategies includes Window Display and In- Store Presentation through direction of ARTE VETERINA PROJECT and AUTHOR STUDIO.  </div>


        </div>

        )
    }
}

export default Oppo;
   
   