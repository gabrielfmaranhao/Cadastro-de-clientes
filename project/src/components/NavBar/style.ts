import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: var(--white-0);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    animation: backUp 1s ;
    @keyframes backUp {
        0% {opacity: 0; transform: translateY(-50px)}
        100% {opacity: 1; transform: translateY(0px)}
    }
`