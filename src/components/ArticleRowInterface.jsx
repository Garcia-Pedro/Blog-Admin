import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./css/articleRowInterface.css";
import editIcon from "../assets/images/icons/edit.svg";
import hideIcon from "../assets/images/icons/hide.svg";
import deleteIcon from "../assets/images/icons/delete.svg";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  async function deleteArticle (id)
  {
    await axios.delete(`http://localhost:5000/articles/${id}`)
    .then((response) => {
      navigate('/articles_page');
    })
  }

  return (
    <>
      <tr>
        <td className="date-row">{article.date}</td>
        <td className="categorie-row">{article.categorie}</td>
        <td className="subtitle-row">{article.subtitle}</td>

        <td className="articles-buttons">
          <button>
            <img src={hideIcon} alt="" />
          </button>

          <Link to={`/edit/${article.id}`}>
            <button>
              <img src={editIcon} alt="" />
            </button>
          </Link>

          <button onClick={() => deleteArticle(article.id)}>
            <img src={deleteIcon} alt="" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ArticleCard;
