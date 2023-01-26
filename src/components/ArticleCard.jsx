import React, { useEffect, useState } from "react";
import axios from "axios";

import "./css/articleCard.css";

/*-------------  Components ---------------*/
import Article from "./Article";
import Carrousel from "./Carrousel";

const ArticleCard = () => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/articles?_embed=comments&_order=desc&_sort=id"
      )
      .then((response) => {
        setArticle(response.data);
      });
  }, []);

  return (
    <>
      <Carrousel>
        {articles.length
          ? articles.map((article) => <Article article={article} />)
          : "Sem Artigos..."}
      </Carrousel>
    </>
  );
};

export default ArticleCard;
