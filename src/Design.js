import React, { Component } from 'react';
import HorizontalScroll from './Horizontal-Retail';
import AS from './logo2.png';
import STE from './STE';
import './Design.css';
import Oppo from './Oppo';
import Logo from './Logo';
import Model from './3Dmodel';
import Vfx from './Vfx';
import './App.css';
import Load from './Hoc';
import Particles from 'react-particles-js';
import Menu from './Menubar';

const Maindesign = ()=>(

  <div className="main-des">
  
  <div className="des-left"> <img src ={AS} className='des-logo'></img><label> Design Work <span>Accessible. Affordable. Design.</span></label> </div>
  
  <div className="des-right">
  
  {/* <ParticleAnimation lineWidth ={1}style={{ position: 'absolute', width: '100%', height: '100%' }} color={{ r: 0, g: 51, b: 102, a: 255 }} /> */}

  <Particles params={{ "particles": { "number": { "value": 100 }, "size": { "value": 2 } , "color": { "value": "#003366"
    } , "line_linked" : {"color" : "#003366"}, "canvas" : {"height" : "100vh"}},"retina_detect": true ,"interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } } }} />
  
  </div>
  
              </div>

)


 
class Design extends Component {



    
    render() {
        return (
            
          <div className='parent-des'>

<Menu/>

            <Maindesign/>

            <HorizontalScroll reversescroll = 'true'>
           
            <STE/>
            <Oppo />
            <Model/>
            <Logo />
            <Vfx />
            </HorizontalScroll> 

          </div>
        )
      }
    }

export default Load(Design);