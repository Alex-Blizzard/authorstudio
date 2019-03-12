import React, { Component } from 'react';
import './Design.css';
import l1 from './Logo/1.jpg';
import l2 from './Logo/2.jpg';

import Particles from 'react-particles-js';


class Logo extends Component {


    render() {

        return (

        <div id="logo">

        {/* <ParticleAnimation lineWidth ={1} style={{ position: 'absolute', width: '100%', height: '100%' }}  background={{r: 0, g: 0, b: 0, a: 255}} /> */}
        <Particles params={{ "particles": { "number": { "value": 100 }, "size": { "value": 3 } , "color": { "value": "#fff"
    } , "line_linked" : {"color" : "#fff"}}, "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } } }} style={{position : 'absolute',width: '100%', height: '100%'}}/>
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
   
   