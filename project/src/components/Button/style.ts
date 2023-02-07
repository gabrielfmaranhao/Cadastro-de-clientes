import styled from "styled-components";


export interface IButtonStyles {
    background: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
    height: number
    width?: number
    color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
}
export const ButtonStyled = styled.button`
    background: ${({background}:IButtonStyles) => `var(--${background})`};
    height: ${({height}:IButtonStyles) => `${height}rem`};
    width: ${({width}:IButtonStyles) => `${width}rem`};
    color: ${({color}:IButtonStyles) => `var(--${color})`};
    border-radius: 4px;
    border: none;
`