import React , {Component} from 'react';
import AS from './logo1.png';
import i1 from './1.jpg';
import './testsrl.css';
import i2 from './8.jpg';
import i3 from './6.jpg';
import {Link } from "react-router-dom";
import App from './App';
import Retail from './Retail';
import Anim from './Retailanim';
import './Animation';
import Testscript from './Testscrip';

import ReactDOM from 'react-dom'

class Ret extends Component{

constructor(props){

    super(props);

    this.state = {

        retailImg : 'retail-img'
    }

    this.my = React.createRef();

    this.btn = React.createRef();
}



    render(){


        return(

<div id="retail" >

<Testscript stateChange={this}>


<div className="retail-home-main" ref={this.my}>

    <div className="retail-home-image">

        <img src = {i2} className={this.state.retailImg}/>

       

    </div>


        <label>RETAIL</label>

       <button ref={this.btn} className='Done'>Animate</button>

        <div className='ret-cont'>Retails goods and retail services can be displayed to highlight their features and benefits. We help is to attract, engage and motivate the customer towards making a purchase.</div> 

    </div>


    


{/* <button  onClick={this.showAnim}>Animate</button> */}

</Testscript>
  
</div>



        )
    }
}


// const Ret = (props)=>{

//     const showAnim =()=> {
        
//     }

//     return (

// <div id="retail">

//       <img src = {i2} />
//       <label>Retail</label>
//       <button onClick={} >Animate</button>
//         <div className='ret-cont'>Retails goods and retail services can be displayed to highlight their features and benefits. We help is to attract, engage and motivate the customer towards making a purchase.</div>

        
//     </div>
// );
// }

export default Ret;

   


