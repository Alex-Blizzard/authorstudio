import React, { Component } from 'react';
import './App.css';
import HorizontalScroll from './Horizontal';
import Ret from  './Retail'
import Des from  './Design'
import Pro from './Projects';
import Home from './home'

 
class ScrollingHorizontally extends Component {

    render() {
        return (
          <div className='parent'>
          <Home/>
            <HorizontalScroll reversescroll = 'true' >

            <Ret />

            <Des/>
            
            <Pro/>
            
            </HorizontalScroll>
          </div>
        )
      }
    }

export default ScrollingHorizontally;