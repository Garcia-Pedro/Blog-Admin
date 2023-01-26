/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/user.css';

export default (props) => (
    <div className="user">
        <img src={props.userImage} alt="userImage" />

        <div className="user-datas">
            <span>{props.userName}</span>
            <small>{props.userTask}</small>
        </div>
    </div>
);