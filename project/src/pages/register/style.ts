import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Box = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    background: var(--white-0);
    border-radius: 8px;
    align-items: center;
    padding: 20px;
    position: absolute;
    .image {
        display: none;
    }
    animation: 1s animateLogin;
    @keyframes animateLogin {
        0%{opacity:0; scale:0;}
        100%{opacity:1; scale:1;}
    }
    @media screen and (min-width: 630px) {
        flex-direction: row;
        background: linear-gradient(to right , var(--green-1) 50%, var(--white-0) 50%);
        .image {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            img {
                width: 250px;
                height: 250px;
            }
            p {
                text-align: center;
            }
        }
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .link {
            display: flex;
            justify-content: center;
            gap: 5px;
            a {
                font-size: 12px;
                font-weight: 700;
                text-decoration: none;
                color: var(--green-1);
            }
        }
    @media screen and (min-width: 630px) {
        width: 50%;
        padding-left: 20px;
        max-width: 30.5rem;
    }
`