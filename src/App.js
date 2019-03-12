import React, { Component } from 'react';
import './App.css';
import HorizontalScroll from './Horizontal';
import Ret from  './Retail-Home'
import Des from  './Design-Home'
import Pro from './Projects';
import Home from './home';
import Arrow from './Arrow';
import Retail from './Retail';
import { BrowserRouter as Router,Route, Link , Switch,Redirect} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Menu from './Menubar';
import Animate from './Hoc';
import Design from './Design';



const HomePage = ()=>(

<div className='parent'>
 
 <Menu/>

   <HorizontalScroll reversescroll = 'true' >

     <Home/>
   
     <Arrow/>
 
     <Link to = "/Retail"><Ret /></Link>
 
     <Link to = '/Design'> <Des/> </Link>
   
     <Pro/>
   
    </HorizontalScroll>
     
  </div> 

)



// console.log(location.location.key)


const ScrollingHorizontally = ()=>(
  
<Router>


  <Route render={({location})=> console.log(location)||(

    <div>

        {/* <Route exact path="/" render={()=> <Redirect to="/"/>}/>   */}

      <TransitionGroup>

        <CSSTransition key = {location.key} classNames="fade" timeout={3000}>

          <Switch location={location}>

            <Route exact path="/" component={HomePage}></Route>

            <Route path="/Retail" component={Retail}></Route>

            <Route path="/Design" component={Design}></Route>

          </Switch>


        </CSSTransition>

      </TransitionGroup>
    
    

    </div>
    
    
    
    )}>

    


  </Route>
</Router>

)











// class ScrollingHorizontally extends Component {

//   constructor()
//     {
//             super();

//             this.state = {
//               loading: true,
//                 myclass:'retail-img',
                
//             }

//     }
  

//     render() {
     
//         return (
// <Router>

//   <Route render={(location)=> console.log(location) || (
   

// <Switch>

// <Route exact path="/" component={HomePage}></Route>

// <Route path="/Retail" component={Retail}></Route>

// <Route path="/Design" component={Design}></Route>

// </Switch>


//   )}>

      

//   </Route>


// </Router>
      
//         )
//       }
//     }

export default Animate(ScrollingHorizontally);