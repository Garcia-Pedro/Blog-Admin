import axios from 'axios';
import ArticleRowInterface from './ArticleRowInterface';
import React, {useState, useEffect} from "react";

export default () => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/articles?_embed=comments&_order=desc&_sort=id')
            .then((response) => {
                setArticle(response.data);
        });

    }, []);

    return (
        <>
            {
                articles.length ? articles.map((article) => (
                    <ArticleRowInterface article={article} />
                )) : 'Sem Artigos...'
            }
        </>
    );
}