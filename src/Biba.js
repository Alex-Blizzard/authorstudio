import React, { Component } from 'react';
import './testsrl.css'
import b1 from './Biba/1.jpg'
import b2 from './Biba/2.jpg'
import b3 from './Biba/3.jpg'


 
class Biba extends Component {

  

    render() {

        return (

        <div id="biba">

        <label>Biba</label>

        <div id="images">

            <img id="myImg" src={b1} style={{width:50+'%', maxWidth:18+'%'}} />

            <img id="myImg" src={b2} style={{width:50+'%', maxWidth:58.3+'%'}} />

            <img id="myImg" src={b3} style={{width:50+'%', maxWidth:18+'%'}} />


        </div>

        



<div className='ret-cont'>BIBA Apparels Private Limited ("BIBA"), has been dressing and embellishing demure maidens from every corner of India since 1986. Contemporary ethnic fashion at an affordable price is BIBA's commitment to fashion enthusiasts. </div>

        </div>

        )
    }
}

export default Biba;
   
   