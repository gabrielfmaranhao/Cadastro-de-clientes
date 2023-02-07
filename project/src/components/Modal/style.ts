import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    .modal-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--white-1);
        position: relative;
        padding: 10px;
        border-radius: 10px;
        width: 80%;
        max-width: 25rem;
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
        }
        .position {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }
`