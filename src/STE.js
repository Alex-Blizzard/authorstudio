import React from 'react';

import './Anim.css';

const spanstyle = {
    whiteSpace: 'nowrap',
    // -ms-transform: 'rotate(-90deg) translateY(-580%)',
    transform: 'rotate(-90deg) translateY(-580%)',
    display:' block',
    fontSize: '14px',
    top: '50%',
    position: 'absolute',
    textTransform: 'uppercase',
    minwidth: '240px',
    textAlign: 'center',
    left: '50px',
    borderBottom: 'solid 1px rgba(0,0,0,1)',
    
    // -ms-transform-origin: 'center',
    transformOrigin: 'center',
    fontWeight: '500',
    fontFamily: 'Titillum Web , sans-serif'
};

const divstyle = {

    backgroundColor:' #000',
    color: '#fff',
    
    height: '100vh',
    width: '1%',
    position: 'relative',
    borderLeft: 'solid 1px rgba(0,0,0,0.15)',
    
    left: '-1px',
    marginRight: '-2px',
    overflow: 'hidden'

}


const STE = ()=>(


<div style={divstyle}>
<span style={spanstyle}>Scroll to explore</span>

</div>
    


    


);

export default STE;

   


