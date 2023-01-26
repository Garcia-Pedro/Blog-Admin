/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/article.css';

export default ({article}) => (
    <>
        <div className="article-card">
            <div className="article-head">
                <img src={article.image} alt="articleImage" />
            </div>
            
            <div className="article-body">
                <small className="categorie">{article.categorie}</small>

                <h4>{article.subtitle}</h4>
            </div>

            <div className="article-footer">
                <div className="author-inf">
                    <img src={article.authorImage} alt="authorImage" />
                    <span>{article.author}</span>
                </div>

                <div>
                    <span className="date">{article.date}</span>
                </div>
            </div>
        </div>
    </>
);