import React from 'react';
import s from './Header.module.css';
import logo from  '../../assets/img/logo.svg';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo}/>
                <p>SocialClub</p>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login} <button onClick={props.logout} className={s.btnLogout}>Выход</button>
                    </div>
                : <NavLink to={'/login'} className={s.btnLogin}>Вход</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;