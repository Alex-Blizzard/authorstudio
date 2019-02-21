import React from'react';
import './testsrl.css';
import AS from './logo2.png';


 const Menubar = ()=>
(

    <div className="menu-bar">

    <div className="menu-logo">

        <img src={AS}/>
    </div>

        <div className="menu-item">

            <label><span>Home</span></label>

            <label><span>Work</span></label>

            <label><span>About</span></label>

        </div>

    

    </div>


);


export default Menubar;