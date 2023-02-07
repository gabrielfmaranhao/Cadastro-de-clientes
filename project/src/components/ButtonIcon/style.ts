import styled from "styled-components";
import { IButtonPropsStyle } from "../../interfaces";


export const Button = styled.button`
    background: none;
    position: absolute;
    top: ${({top}:IButtonPropsStyle) => `${top}px`};
    right: ${({right}:IButtonPropsStyle) => `${right}px`};
    border: none;
`