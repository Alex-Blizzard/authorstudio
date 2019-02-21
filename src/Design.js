import React, { Component } from 'react';
import HorizontalScroll from './Horizontal-Retail';
import AS from './logo2.png';
import STE from './STE';
import ParticleAnimation from 'react-particle-animation';
import './Design.scss';
import Oppo from './Oppo';
import Logo from './Logo';
import Model from './3Dmodel';
import Vfx from './Vfx';
import './App.css';

class Maindesign extends Component{

    render()
    {


        return(

            <div className="main-des">
<div className="des-left"> <img src ={AS} className='des-logo'></img><label> Design Work <span>Accessible. Affordable. Design.</span></label> <label> </label></div>

<div className="des-right">

<ParticleAnimation lineWidth ={.2}style={{ position: 'absolute', width: '100%', height: '100%' }} color={{ r: 0, g: 51, b: 102, a: 255 }} />

</div>

            </div>


        )
    }

}
 
class Design extends Component {



    
    render() {
        return (
            
          <div className='parent-des'>

<Maindesign/>

            <HorizontalScroll reversescroll = 'true'>
           
            <STE/>
            <Oppo />
            <Model/>
            <Logo />
            <Vfx />
            </HorizontalScroll> 

         {/* <div className = 'des-home-div'>
         
     
        <img src ={AS} className='des-logo'></img>

        

        <div className='des-img'><img src={Retimg} ></img></div>

        
   
    <div className='des-hom-cont'>
    <label>RETAIL WORK</label>
       <label>Innovate. Inform. Inspire. </label>
    </div>

    

    </div>
            
            <HorizontalScroll reversescroll = 'true' >
            
            <STE/>

            
            
            </HorizontalScroll> */}
          </div>
        )
      }
    }

export default Design;