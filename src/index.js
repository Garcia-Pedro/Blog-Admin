/*------- CSS --------*/
import './index.css';

/*----------- React Imports ------------*/
import React from "react";
import ReactDOM  from "react-dom";
import {BrowserRouter} from 'react-router-dom';

/*------------------ Components -------------------*/
import App from './App';    

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>, 
    root
);