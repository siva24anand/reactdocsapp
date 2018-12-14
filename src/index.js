import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import ConditionalRendering from './Components/ConditionalRendering';
import LoggingButton from './Components/LoggingButton';
import Toggle from './Components/Toggle';
import Clock from './Components/Clock';
import HelloWorld from './Components/HelloWorld';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Toggle />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
//ReactDOM.render(<LoggingButton />, document.getElementById('root'));
ReactDOM.render(<ConditionalRendering />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
