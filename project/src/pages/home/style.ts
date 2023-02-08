import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    display: flex;
    width: 100%;
    height: 2rem;
    align-items: center;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px;
    background: var(--white-0);
`
export const ShowCase = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 80%;
        max-width: 30rem;
    }
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5rem;
    .form {
        width: 80%;
        max-width: 30rem;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

`
