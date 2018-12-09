import React, { Component } from 'react';
import './App.css';
import HorizontalScroll from './Horizontal';
import Ret from  './Retail-Home'
import Des from  './Design'
import Pro from './Projects';
import Home from './home';
import Arrow from './Arrow';
import Loader from 'react-loader-spinner';

 
class ScrollingHorizontally extends Component {

    render() {
        return (
          
          <div className='parent'>
         
          
          <Home/>
            
            <HorizontalScroll reversescroll = 'true' >
            
            <Arrow/>

            <Ret />

            <Des/>
            
            <Pro/>
            
            </HorizontalScroll>
          </div>
        )
      }
    }

export default ScrollingHorizontally;