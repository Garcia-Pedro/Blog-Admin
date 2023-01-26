import "./css/form.css";
import axios from "axios";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialValue = {
  title: "",
  categorie: "",
  description: "",
  subtitle: "",
  source: "",
  image: "",
};

export default ({ id }) => {
  const [values, setValues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/articles/${id}`).then((response) => {
        setValues(response.data);
      });
    }
  }, []);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? "put" : "post";
    const url = id
      ? `http://localhost:5000/articles/${id}`
      : `http://localhost:5000/articles`;

    axios[method](url, values).then((response) => {
      navigate("/articles_page");
    });
  }

  return (
    <>
      <form onSubmit={onSubmit} className="new-article-form" action="">
        <div>
          <input
            name="title"
            placeholder="Título"
            onChange={onChange}
            value={values.title}
          />

          <input
            name="categorie"
            placeholder="Categoria"
            onChange={onChange}
            value={values.categorie}
          />

          <textarea
            rows="10"
            cols="30"
            name="description"
            className="description"
            placeholder="Descrição"
            onChange={onChange}
            value={values.description}
          />
        </div>

        <div>
          <input
            name="subtitle"
            placeholder="Subtítulo"
            onChange={onChange}
            value={values.subtitle}
          />

          <input
            name="source"
            placeholder="Fontes"
            onChange={onChange}
            value={values.source}
          />

          <input
            type="file"
            name="image"
            placeholder="Fotos"
            onChange={onChange}
          />

          <Button name="btnSetArticle" value="Postar" />
        </div>
      </form>
    </>
  );
};
