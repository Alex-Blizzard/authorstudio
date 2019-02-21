import React, { Component } from 'react';
import './Design.scss';
import mo1 from './Model/1.jpg';
import mo4 from './Model/4.jpg';
import mo5 from './Model/5.jpg';
import ParticleAnimation from 'react-particle-animation';

class Model extends Component {


    render() {

        return (

        <div id="model">

        <ParticleAnimation style={{ position: 'absolute', width: '205vw', height: '100vh' }} color={{ r: 0, g: 51, b: 102, a: 255 }}  />

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
   
   