

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
import WheelReact from 'wheel-react';



//import 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
//import './jquery.mousewheel';

let top = window.outerWidth;

let wyo = 0;
class App extends Component {

  
  
  constructor(props) {
    super(props);
    
    this.sl = this.sl.bind(this);

   /* scroll(ref){

      ref.current.scrollIntoView({behaviour:'smooth'});
    }*/



    
  // window.addEventListener('scroll',this.sl);

   WheelReact.config({
    left: () => {
      console.log('wheel left detected.');
    },
    right: () => {
      console.log('wheel right detected.');
    },
    up: () => {
      console.log('wheel detected.');

      var left = Number(document.querySelector('#real-cont').style.left.split('px')[0]);

     // console.log('Left :' , left);

      left = window.outerWidth;

     // console.log('Left :' , left);

     // console.log('Window Y : ', window.pageYOffset);

      let newleft = left - window.pageYOffset;

     // console.log('New Left : ', newleft);
     

      document.getElementById('real-cont').style.left= newleft+'px';
    },
    down: () => {
      
    }
  });
    
 }
 componentDidMount(){
  document.getElementById('real-cont').style.left= top+'px';

 // window.pageYOffset =0;
 }


 

  sl = () =>
    {
      

      console.log('Y Value : ' ,window.deltaY);
      document.querySelector('#real-cont').style.left = '-100px';

       /* 

       
        //console.log(typeof left);
        
        
       // }
       //var top=left;//-window.pageYOffset;
       
        //console.log('left:',window.pageYOffset);
        //if(top!=window.pageYOffset){
         var newCal = (window.pageYOffset-left);
       // 
       var newTop  = (left-newCal);

       console.log('New Cal:', newCal, 'left:', left, 'newTop :' ,newTop);
       
        //}
        
       
        //top-=newTop;
      //}
        //top= window.pageYOffset;
       
        var w = window.outerWidth;
        var h = window.outerHeight;
        
        //console.log(w);
        //console.log(h);

       // var left = window.pageXOffset;
       
        //var top = document.body.innerWidth;
      //  if(window.pageYOffset>0){
     //      top = window.pageYOffset;
     //   }
   document.querySelector('#real-cont').style.left = newTop+'px';

   //this.scrollLeft -= (chg * 50); //need a value to speed up the change
     // evt.preventDefault();
   //document.querySelector('#real-cont').style.top = 'px';
    //document.getElementById('realcontent').style.left = '-window.scrollTop()';
    

 
   
   
    
    //console.log(top);

     /* var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
 
scroll.scrollTo(100,0);*/
    // console.log('running');
    // document.getElementById('App').css("left",-(window).scrollTop());
    // document.getElementById('real-cont').style.left = 'window.scrollTop()';
     
     //$("#App").css("left", -$(window).scrollTop());
     
       //window.scrollBy(100,0);


        
    }

    
  render() {

    
 
    return (

      <div className="App" {...WheelReact.events} mooth={true} offset={-70} duration= {500}>

 <button onClick={this.sl} className='bt'>Click</button>

        <div id='real-cont' >

       

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
