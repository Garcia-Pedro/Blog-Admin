/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

/*----------------- CSS -------------------*/
import "./css/addArticle.css";

/*----------------- Images -------------------*/
import logoHero from "../assets/images/logo-hero.svg";
import iconHome from "../assets/images/icons-home.svg";
import iconBlog from "../assets/images/icons-blog.svg";
import authorImage from "../assets/images/user-photo.svg";
import iconLogout from "../assets/images/icons-logout.svg";
import iconNotification from "../assets/images/icons-notification.svg";

/*-------------- Components --------------*/
import User from "../components/User";
import Form from "../components/Form";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default () => (
  <div className="main-page">
    <aside className="menu-side">
      <div>
        <img className="logo-hero" src={logoHero} alt="logoImage" />
      </div>

      <Navbar>
        <ul>
          <li>
            <Link to={`/home`}>
              <a>
                <img src={iconHome} alt="" />
              </a>
            </Link>
          </li>
          <li>
            <Link to={`/articles_page`}>
              <a className="active">
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
        title="Gerenciamento de Artigos"
        text="Gerencie os seus artigos com as operações disponíveis."
      />

      <h3>Postar Artigo</h3>

      <Form />
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
