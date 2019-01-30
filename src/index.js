import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function RenderApp(){
    ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(RenderApp,1000);

