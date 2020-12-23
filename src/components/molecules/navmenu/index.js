import React from 'react';
import Icon from '../../atoms/icon';
import './style.css';

export default ({ menuItems, textShow }) => {

    const list = menuItems.map(({text, icon, id}) => {
        return (
            <li key={id} style={{ textAlign : textShow ? 'left' : 'center'}}>
                <Icon 
                    image={icon}
                    alt="home"
                    classNames={id === 1 ? 'active' : ''}
                />
                <span style={{display: textShow ? 'inline-block' : 'none'}}>{text}</span>
            </li>
        );
    });

    return (
        <ul>
            { list }
        </ul>
    )
}
