/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

/*----------------- CSS -------------------*/
import "./css/users.css";

/*----------------- Icons ------------------*/
import iconHome from "../assets/images/icons-home.svg";
import iconBlog from "../assets/images/icons-blog.svg";
import iconLogout from "../assets/images/icons-logout.svg";
import iconMessage from "../assets/images/icons-message.svg";
import iconNotification from "../assets/images/icons-notification.svg";

/*----------------- Images -------------------*/
import logoHero from "../assets/images/logo-hero.svg";
import authorImage from "../assets/images/user-photo.svg";

/*-------------- Components --------------*/
import User from "../components/User";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import UserRow from "../components/UserRow";
import LinkComponent from "../components/LinkComponent";

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
          <li>
            <Link to={`/messages_page`}>
              <a>
                <img src={iconMessage} alt="" />
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

      <h3>Usuários</h3>

      <table className="users-table">
        <thead>
          <tr>
            <th className="state-column">Função</th>
            <th className="name-column">Nome</th>
            <th className="email-column">Email</th>
            <th className="admin-column"></th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
        </tbody>
      </table>

      <LinkComponent href="/add_user" value="Adicionar" />
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
