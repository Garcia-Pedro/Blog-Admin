/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {Routes, Route} from 'react-router-dom';

/*----------------- CSS -------------------*/
import './App.css';

/*-------------- Pages ----------------*/
import Main from './pages/Main';
import Users from './pages/Users';
import SignIn from './pages/SignIn';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import AddArticle from './pages/AddArticle';
import EditArticle from './pages/EditArticle';
import ArticlesPage from './pages/ArticlesPage';

export default () => (
    <div>
        <Routes>
            <Route exact path = '/' element={<SignIn />} />
            <Route exact path = '/home' element={<Main />} />
            <Route exact path='/add_user' element={<AddUser />} />
            <Route exact path='/add_article' element={<AddArticle />} />
            <Route exact path='/articles_page' element={<ArticlesPage />} />
            <Route exact path='/users' element={<Users />} />
            <Route path='/edit/:id' element={<EditArticle />} />
            <Route path='/edit_user/:id' element={<EditUser />} />
        </Routes>
    </div>
);