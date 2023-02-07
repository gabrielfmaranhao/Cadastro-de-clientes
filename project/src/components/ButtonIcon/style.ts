import styled from "styled-components";

interface IButtonPropsStyle {
    top: number
    right: number
}

export const Button = styled.button`
    background: none;
    position: absolute;
    top: ${({top}:IButtonPropsStyle) => `${top}px`};
    right: ${({right}:IButtonPropsStyle) => `${right}px`};
    border: none;
`