import React ,{Component}from 'react'

import './App.css'
import ParticleAnimation from 'react-particle-animation';
import './Particle.json'
export default class Particle extends Component{



    render()
    {
        

        return(

            <ParticleAnimation style={{height:'100vh'}}>
<div id="particles-js"></div>

            </ParticleAnimation>

            
 
            
        )
    }
}