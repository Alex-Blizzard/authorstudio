import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollingHorizontally from './Hor';
import Arrowanim from './Arrow';
import Retailhome from './Retail-Content';
import Retail from './Retail';
import Biba from './Biba';
import Image from './Imagemodal'


ReactDOM.render(<Biba/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
