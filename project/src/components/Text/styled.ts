import styled from "styled-components";

export interface ITextStylesProps {
    size: number
    color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0" 
    weight: number
}

export const TextStyled = styled.label`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    font-weight: ${({weight}:ITextStylesProps) => weight};
    color: ${({color}:ITextStylesProps) => `var(--${color})` }
`