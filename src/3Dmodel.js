import React, { Component } from 'react';
import './Design.css';
import mo1 from './Model/1.jpg';
import mo4 from './Model/4.jpg';
import mo5 from './Model/5.jpg';
import ParticleAnimation from 'react-particle-animation';
import Particles from 'react-particles-js';

class Model extends Component {


    render() {

        return (

        <div id="model">


<Particles params={{ "particles": { "number": { "value": 100 }, "size": { "value": 3 } , "color": { "value": "#003366"
    } , "line_linked" : {"color" : "#003366"}}, "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } } }} style={{position : 'absolute',width: '50%', height: '100%'}}/>

        {/* <ParticleAnimation lineWidth ={1} style={{ position: 'absolute', width: '100%', height: '100vh' }} color={{ r: 0, g: 51, b: 102, a: 255 }}  /> */}
    

         <label id="Label" >3D Model</label>

        <div id="images">

            <img id="myImg" src={mo5} style={{width:21+'%', maxWidth:21+'%'}} />

            <img id="myImg" src={mo4} style={{width:21+'%', maxWidth:21+'%'}} />

            <img id="myImg" src={mo1} style={{width:21+'%', maxWidth:21+'%'}} />

        </div>

        



<div className='model-cont'>To celebrate the first flagship store of the Italian brand MARIA GRAZIA SEVERI in Milan ,With implementation of Visual Merchandising Strategies includes Window Display and In- Store Presentation through direction of ARTE VETERINA PROJECT and AUTHOR STUDIO. </div>

        </div>

        )
    }
}

export default Model;
   
   