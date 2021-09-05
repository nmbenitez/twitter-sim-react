import React from 'react';
import TwitterLogo from "../../assets/img/twitter-logo.png"
import './Header.scss';

export default function Header(){
    return(
        <div className="header">
            <img src={TwitterLogo} alt="Tweets Sim" />
            <h1> Tweets sim </h1>
        </div>
    );
}

