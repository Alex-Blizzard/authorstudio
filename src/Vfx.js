import React, { Component } from 'react';
import './Design.css';
import ReactPlayer from 'react-player'
import v1 from './VFX/1.mp4'
import v2 from './VFX/2.mp4'
import Particles from 'react-particles-js';

class AddViewPlayer extends Component {
    state ={
        playing:false,
    }
    videoStartHandler = ()=>{
        this.setState(preState=>{
          return {
                playing:!preState.playing
          }
        });
      }
    render(){
        return(
            <ReactPlayer  className = {this.state.playing?'itPlaying vplayer':'vplayer'} url={this.props.url} playing={this.state.playing}  onClick={this.videoStartHandler} loop ={true} controls={false} pip={false}> </ReactPlayer>
        )
    }
}

class Vfx extends Component {
   
    render() {
        return (
        <div id="vfx">

<Particles params={{ "particles": { "number": { "value": 100 }, "size": { "value": 3 } , "color": { "value": "#003366"
    } , "line_linked" : {"color" : "#003366"}}, "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } } }} style={{position : 'absolute',width: '100%', height: '100%'}}/>
        {/* <ParticleAnimation  lineWidth ={1} style={{ position: 'absolute', width: '100%', height: '100%' }} color={{ r: 0, g: 51, b: 102, a: 255 }} /> */}
         <label id="Label" >Visual Effects</label>
         <AddViewPlayer url={v1}/>
         <AddViewPlayer url={v2}/>
<div className='vfx-cont'>To celebrate the first flagship store of the Italian brand MARIA GRAZIA SEVERI in Milan ,With implementation of Visual Merchandising Strategies includes Window Display and In- Store Presentation through direction of ARTE VETERINA PROJECT and AUTHOR STUDIO. </div>
        </div>

        )
    }
}

export default Vfx;
   
   