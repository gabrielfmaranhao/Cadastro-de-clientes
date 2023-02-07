import styled from "styled-components";
import { IButtonStyles } from "../../interfaces";


export const ButtonStyled = styled.button`
    background: ${({background}:IButtonStyles) => `var(--${background})`};
    height: ${({height}:IButtonStyles) => `${height}rem`};
    width: ${({width}:IButtonStyles) => width ? `${width}rem`: "100%"};
    color: ${({color}:IButtonStyles) => `var(--${color})`};
    border-radius: 4px;
    border: none;
`