import React ,{Component} from 'react';
import './App.css'
import { JellyfishSpinner } from "react-spinners-kit";
const AnimateLoad = (WrappedComponent) => {
    return (class extends Component {


        state = {loader:true, pageAnimation:false}

        componentWillMount(){

            this.setState({loader:true});
         }

        
        componentDidMount(){
            
           setTimeout(() => {
            this.setState({pageAnimation: true,loader:false});
            }, 3000)
        }
        render(){
          
            return (
                <div>
                    <div style={{position:'fixed', left:'50%', top:'50%', marginLeft:'-100px', marginTop:'-100px' ,textAlign:'center'}}>
                    <JellyfishSpinner size={200} color="#686769" loading={this.state.loader}  />
                    </div>
                    <div className={`fade-in ${this.state.pageAnimation && 'visible'}`}>
                    <WrappedComponent {...this.props} />
                    </div>
                </div>
            )
         
           
        }
    }
    )
}

export default AnimateLoad;