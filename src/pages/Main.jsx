/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

/*----------------- CSS -------------------*/
import "./css/main.css";

/*----------------- Images -------------------*/
import logoHero from "../assets/images/logo-hero.svg";
import iconHome from "../assets/images/icons-home.svg";
import iconLogout from "../assets/images/icons-logout.svg";
import iconBlog from "../assets/images/icons-blog.svg";
import iconMessage from "../assets/images/icons-message.svg";
import iconNotification from "../assets/images/icons-notification.svg";
import iconUsers from "../assets/images/icons-users.svg";
import authorImage from "../assets/images/user-photo.svg";

/*-------------- Components --------------*/
import User from "../components/User";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CountCard from "../components/CountCard";
import ArticleCard from "../components/ArticleCard";

export default () => {
  const [articles, setArticle] = useState([]);
  const [comments, setComments]  = useState([]);
  const [users, setUsers]  = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/articles").then((response) => {
      setArticle(response.data);
    }); 

    axios.get("http://localhost:5000/comments").then((response) => {
      setComments(response.data);
    });

    axios.get("http://localhost:5000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="main-page">
      <aside className="menu-side">
        <div>
          <img className="logo-hero" src={logoHero} alt="logoImage" />
        </div>

        <Navbar>
          <ul>
            <li>
              <Link to={`/home`}>
                <a className="active">
                  <img src={iconHome} alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link to={`/articles_page`}>
                <a>
                  <img src={iconBlog} alt="" />
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/">
                <img src={iconNotification} alt="" />
              </a>
            </li>
          </ul>
        </Navbar>
      </aside>

      <main>
        <Header
          title="Overview"
          text="Tenha uma vista geral das oiperações realizadas."
        />

        <div className="counter-cards">
          <CountCard
            length = {articles.length}
            icon={iconBlog}
            type="Artigos postados"
          />

          <CountCard 
            length = {comments.length}
            icon={iconMessage} 
            type="Mensagens" 
          />
          <CountCard 
            length = {users.length}
            icon={iconUsers} 
            type="Usuários" 
          />
        </div>

        <div className="recents-articles">
          <h2>Artigos Recentes</h2>

          <ArticleCard />
        </div>
      </main>

      <aside className="users-side">
        <h2>Bem-vindo de volta</h2>
        <span className="user-task">Admin</span>

        <img className="online-user" src={authorImage} alt="userImage" />
        <span>Garcia Pedro</span>

        <div className="others-users">
          <h4>Outros Usuários</h4>

          <div className="users">
            <User
              userImage={authorImage}
              userName="Crisvan Van-Dúnem"
              userTask="Editor"
            />

            <User
              userImage={authorImage}
              userName="Antonio Gabriel"
              userTask="Editor"
            />
          </div>

          <a href="/users">Ver todos</a>
        </div>

        <a className="logoff" href="/">
          <img src={iconLogout} alt="logout" />
          Logout
        </a>
      </aside>
    </div>
  );
};
