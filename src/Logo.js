import React, { Component } from 'react';
import './Design.css';
import l1 from './Logo/1.jpg';
import l2 from './Logo/2.jpg';
import ParticleAnimation from 'react-particle-animation';


class Logo extends Component {


    render() {

        return (

        <div id="logo">

        <ParticleAnimation style={{ position: 'absolute', width: '135vw', height: '100%' }}  background={{r: 0, g: 0, b: 0, a: 255}} />
        
         <label id="Label" >Logo Design</label>

        <div id="images">

            <img id="myImg" src={l1} style={{width:25+'%', maxWidth:50+'%'}} />

            <img id="myImg" src={l2} style={{width:25+'%', maxWidth:50+'%'}} />

        </div>

        



<div className='logo-cont'>To celebrate the first flagship store of the Italian brand MARIA GRAZIA SEVERI in Milan ,With implementation of Visual Merchandising Strategies includes Window Display and In- Store Presentation through direction of ARTE VETERINA PROJECT and AUTHOR STUDIO.  </div>

        </div>

        )
    }
}

export default Logo;
   
   