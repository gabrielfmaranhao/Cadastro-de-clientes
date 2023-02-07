import styled from "styled-components";

interface IInputStyle {
    border_color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
    outline: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
}
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