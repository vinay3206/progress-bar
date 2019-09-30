import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    background-color: orange; /* Blue background */
    border: none; /* Remove borders */
    color: white; /* White text */
    padding: 8px 16px; /* Some padding */
    font-size: 16px; /* Set a font size */
    cursor: pointer; /* Mouse pointer on hover */
    margin-left: 0.5rem;
    background-position: center;
    transition: background 0.8s;
    outline: none;
    box-shadow: 0 0 4px #999;
    text-transform: upppercase;
    border-radius: 5px;

    :hover {
        background: #FFC966 radial-gradient(circle, transparent 1%, #FFC966 1%) center/15000%;
    }

    :active {
        background-color: #FFF6E5;
        background-size: 100%;
        transition: background 0s;
    }
`

const Button = ({ text, icon, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
           <i className={`fa ${icon}`} />
            {text}
        </StyledButton>
    )
}

export default Button