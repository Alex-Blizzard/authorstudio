import React, { Component } from 'react';
import './App.css';
import HorizontalScroll from './Horizontal-Retail';
import Ret from  './Retail-Home'
import Des from  './Design'
import Pro from './Projects';
import Arrow from './Arrow';
import Rethome from './Retail-Content';


 
class Retail extends Component {

    render() {
        return (
          
          <div className='parent-ret'>
         
         <Rethome/>
          
            
            <HorizontalScroll reversescroll = 'true' >
            
            

            <Ret />

            <Des/>
            
            <Pro/>
            
            </HorizontalScroll>
          </div>
        )
      }
    }

export default Retail;