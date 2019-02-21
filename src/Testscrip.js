import React , {Component} from 'react';

import Ret from './Retail-Home'

import ReactDOM from 'react-dom'

export default class Testscript extends Component{

    
    constructor(props)
    {
            super(props);

            this.showClass = this.showClass.bind(this);
    }

showClass()
{
 
                    let preState = this.props.stateChange.state.retailImg;

                    if(preState == 'retail-img')
                    {

                        this.props.stateChange.setState({retailImg:'changeClass'})
                    }

                    else{

                        this.props.stateChange.setState({retailImg:'retail-img'})
                    }

                    
           
                
            
            

        // if(this.props.children.props.children[i].props.className == 'Done')
        // {

        //     console.log('Working')
        // }
        //  console.log(i)

    

    // if(this.props.children.props.children[2].props.className == 'Don')
    // {

    //     console.log("Working")
    // }

    // else{
    //     console.log(" Not Working")

    // }
        // console.log(ReactDOM.findDOMNode())
    //  console.log(this.props.name);
}

    render(){

       

            return(

              <div onClick={this.showClass} className="main-div">
                  
                    {this.props.children}

                    {/* {console.log(this.props.children.className)} */}
              </div>
                    



            )


    }



}