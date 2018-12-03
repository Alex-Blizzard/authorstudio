import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import BG from './bg.jpg';
import './App.css';
import Home from './home.js';
import Srl from './Scroll';
import Ret from  './Retail'
import Des from  './Design'
import Pro from './Projects';
import Anime from './Animation';
import ScrollEvent from 'react-onscroll';


class App extends Component {

  
  
  constructor(props) {
    super(props);
    
    this.sl = this.sl.bind(this);
 }

 componentDidMount() {

  /*Events.scrollEvent.register('begin', function(to, element) {
    console.log("begin", arguments);
  });
  //Events.scrollEvent.register('end', function(to, element) {
  //  console.log("end", arguments);
 // });
 
 scrollSpy.update();*/
//  console.log(window.screenTop());
    window.addEventListener('scroll', this.sl);
   
 }

  sl = () =>
    {

        var top = window.pageYOffset;
   document.querySelector('#realcontent').style.left = top+'px';
    //document.getElementById('realcontent').style.left = '-window.scrollTop()';

    console.log(top);

     /* var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
 
scroll.scrollTo(100,0);*/
     console.log('running');
    // document.getElementById('App').css("left",-(window).scrollTop());
     document.getElementById('real-cont').style.left = 'window.scrollTop()';
     
     //$("#App").css("left", -$(window).scrollTop());
     
       //window.scrollBy(100,0);


        
    }
  render() {

    
 
    return (

      <div className="App">

        <div id='real-cont'>
          
          <button onClick={this.sl} style={{position:'fixed'}}>Click me to scroll</button>
        
          <Ret />

          <Des/>
          
          <Pro/>
        
        </div>

        <div id='fake-cont'></div>
        
        
          
          
          
          
        
      </div>
      
    );
  }
}

export default App;
