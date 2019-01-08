import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollingHorizontally from './Hor';
import Arrowanim from './Arrow';
import Retailhome from './Retail-Content';
import Retail from './Retail';
import Maria from './Maria';
import SET from './STE';
import Royal from './Royal'


ReactDOM.render(<Retail/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
