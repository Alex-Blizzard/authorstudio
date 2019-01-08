import React, { Component } from 'react';
import './App.css';
import HorizontalScroll from './Horizontal-Retail';
import Ret from  './Retail-Home'
import Des from  './Design'
import Pro from './Projects';
import Arrow from './Arrow';
import Rethome from './Retail-Content';
import Biba from './Biba';
import Maria from './Maria';
import AS from './logo2.png';
import './Retail-Home.css';
import Retimg from './17.jpg';
import STE from './STE';
import Royal from './Royal';


 
class Retail extends Component {

    render() {
        return (
          
          <div className='parent-ret'>
         
         <div className = 'ret-home-div'>
         
     
        <img src ={AS} className='ret-logo'></img>

        

        <div className='ret-img'><img src={Retimg} ></img></div>

        
   
    <div className='ret-hom-cont'>
    <label>RETAIL WORK</label>
       <label>Innovate. Inform. Inspire. </label>
    </div>

    

    </div>
            
            <HorizontalScroll reversescroll = 'true' >
            
            <STE/>

             <Biba />

            <Maria/>
            
            <Royal/>
            
            </HorizontalScroll>
          </div>
        )
      }
    }

export default Retail;