/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import iconSearch from '../assets/images/icons-search.svg';

/*----------------- CSS -------------------*/
import './css/header.css';

export default (props) => (
    <>
        <header>
            <div className="header-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>

            <div className="search-area">
                <input type="search" placeholder='Pesquisar'/>
                
                <button>
                    <img src= {iconSearch} alt="" />
                </button>
            </div>
        </header>
    </>
);