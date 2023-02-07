import styled from "styled-components";
import { IInputStyle } from "../../interfaces";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    input {
        padding: 5px;
        height: 1.5rem;
        border-radius: 4px;
        border: 1px solid var(--white-1);
        border-color: ${({border_color}:IInputStyle)=> `var(--${border_color})`};
        outline-color: ${({outline}:IInputStyle)=> `var(--${outline})`};
    }
`