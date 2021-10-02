import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZE = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyles,
    buttonSize
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0];

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <Link to='Sign Up' className ='btn-mobile'> 
            <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick} type={type}> 
                {children}
            </button>
        </Link>
    )
}

