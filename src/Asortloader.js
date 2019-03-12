import React,{Component } from 'react';
import a1 from './logoload.png'
import './loader.css'


export default class Loader extends Component{

    render()
    {


        return(


            <div className= "loaderdiv" >

                    <img src ={a1} ></img>

                    <label style={{display : 'block' , fontFamily : 'Titillium Web, sans-sarif', fontSize:'40px', marginTop: '20px',wordSpacing:'20px'}}> asort</label>

                    <div className="sk-cube-grid">

                        <div className="sk-cube sk-cube1"></div>

                        <div className="sk-cube sk-cube2"></div>

                        <div className="sk-cube sk-cube3"></div>

                        <div className="sk-cube sk-cube4"></div>

                        <div className="sk-cube sk-cube5"></div>

                        <div className="sk-cube sk-cube6"></div>

                        <div className="sk-cube sk-cube7"></div>

                        <div className="sk-cube sk-cube8"></div>

                        <div className="sk-cube sk-cube9"></div>

                    </div>
                
            </div>
        )
    }



}