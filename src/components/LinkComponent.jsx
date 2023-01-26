/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import './css/linkComponent.css';

export default (props) => (
    <div className='link'>
        <a className='link-component' href={props.href}>{props.value || 'Default'}</a>
    </div>
)