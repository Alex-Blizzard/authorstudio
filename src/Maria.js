import React, { Component } from 'react';
import './Retail-Home.css'
import m1 from './Maria/1.jpg'
import m2 from './Maria/2.jpg'
import m3 from './Maria/3.jpg'
import m4 from './Maria/4.jpg'
import m5 from './Maria/5.jpg'
import { StickyContainer, Sticky } from 'react-sticky';


 
class Biba extends Component {

    clicked = ()=>{


        var pos = document.getElementById('Label').style.cssText +="left:100px;";

        var add = document.getElementById('Label');

        
         console.log("Top Postion is : " + add.offsetLeft);

      

    }

    componentWillMount(){

        // var pos = document.getElementById('Label').style.cssText +="left : 0px;";


    }

    


    render() {

        return (

        <div id="maria">

         

         <label id="Label" onClick={this.clicked}>Maria Grazia Severi</label>

        

    

        <div id="images">

            <img id="myImg" src={m1} style={{width:50+'%', maxWidth:15+'%'}} />

            <img id="myImg" src={m2} style={{width:50+'%', maxWidth:21+'%'}} />

            <img id="myImg" src={m3} style={{width:50+'%', maxWidth:15+'%'}} />
            
            <img id="myImg" src={m4} style={{width:50+'%', maxWidth:21+'%'}} />

            <img id="myImg" src={m5} style={{width:50+'%', maxWidth:15+'%'}} />

        </div>

        



<div className='ret-cont'>To celebrate the first flagship store of the Italian brand MARIA GRAZIA SEVERI in Milan ,With implementation of Visual Merchandising Strategies includes Window Display and In- Store Presentation through direction of ARTE VETERINA PROJECT and AUTHOR STUDIO. The windows display made for this special occasion, recall the art nouveau motifs and bright color, creating a play of light and shadow which highlights the leaders of this collection. </div>

        </div>

        )
    }
}

export default Biba;
   
   