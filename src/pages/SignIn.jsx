/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

/*----------------- CSS -------------------*/
import './css/signIn.css';

/*----------------- Images -------------------*/
import logoHero from '../assets/images/logo-hero.svg';
import iconLogin from '../assets/images/icons-login.svg';


/*-------------- Components --------------*/
import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Title';

export default () => (
    <div className='page-auth'>
        <aside>
            <img src={logoHero} alt="logoImage" />
        </aside>

        <main>  
            <Title value="LOGIN"/> 

            <img src={iconLogin} alt="login-logo" />

            <form action="">
                <Input placeholder="Email" type="text" />
                <Input placeholder="Senha" type="password" />
                <Button value="Login"/>
            </form>
        </main>
    </div>
);