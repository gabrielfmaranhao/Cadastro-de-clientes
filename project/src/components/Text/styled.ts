import styled from "styled-components";
import { ITextStylesProps } from "../../interfaces";


export const TextStyled = styled.label`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    font-weight: ${({weight}:ITextStylesProps) => weight};
    color: ${({color}:ITextStylesProps) => `var(--${color})` }
`