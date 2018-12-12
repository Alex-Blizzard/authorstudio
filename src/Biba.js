import React, { Component } from 'react';
import './testsrl.css'
import b1 from './Biba/1.jpg'
import b2 from './Biba/2.jpg'
import b3 from './Biba/3.jpg'


 
class Biba extends Component {

    constructor(props) {
        super(props)
    
    this.Imgmodal = this.Imgmodal.bind(this);
    this.close = this.close.bind(this);
    }

       
        
        Imgmodal=(evt)=>{
        
            var modal = document.getElementById('myModal');
        
            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById('myImg');
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
            
              modal.style.display = "block";
              modalImg.src = evt;
              //captionText.innerHTML = this.alt;
            console.log(evt);
        }

        close = ()=>
        {
 
           var span = document.getElementsByClassName("close")[0];
           var img = document.getElementById('myImg');
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
           var modal = document.getElementById('myModal');
           
          
             modal.style.display = "none";
       

        }

    render() {
        return (
<div id="biba">

<img id="myImg" src={b1} style={{width:50+'%', maxWidth:18+'%'}} onClick={()=>this.Imgmodal(b1)}/>

<img id="myImg" src={b2} style={{width:50+'%', maxWidth:58.3+'%'}} onClick={()=>this.Imgmodal(b2)}/>

<img id="myImg" src={b3} style={{width:50+'%', maxWidth:18+'%'}} onClick={()=>this.Imgmodal(b3)}/>

<div id="myModal" class="modal">


    <span class="close" onClick={this.close}>&times;</span>
    <div class="modal-content">
    <img  id="img01" />
    </div>
    <div id="caption"></div>

    </div>

<label>Biba</label>

<div className='ret-cont'>Retails goods and retail services can be displayed to highlight their features and benefits. We help is to attract, engage and motivate the customer towards making a purchase.</div>

</div>

        )
    }
}

export default Biba;
   
   