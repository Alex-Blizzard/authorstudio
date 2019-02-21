import React, { Component } from 'react';
import './Design.css';
import l1 from './Logo/1.jpg';
import l2 from './Logo/2.jpg';
import ReactPlayer from 'react-player'
import v1 from './VFX/1.mp4'
import v2 from './VFX/2.mp4'
import ParticleAnimation from 'react-particle-animation';

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
        <ParticleAnimation  style={{ position: 'absolute', width: '135vw', height: '100%' }} color={{ r: 0, g: 51, b: 102, a: 255 }} />
         <label id="Label" >Visual Effects</label>
         <AddViewPlayer url={v1}/>
         <AddViewPlayer url={v2}/>
<div className='vfx-cont'>To celebrate the first flagship store of the Italian brand MARIA GRAZIA SEVERI in Milan ,With implementation of Visual Merchandising Strategies includes Window Display and In- Store Presentation through direction of ARTE VETERINA PROJECT and AUTHOR STUDIO. </div>
        </div>

        )
    }
}

export default Vfx;
   
   