import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
}`

export const Container = styled.div`
    width: 100%;
    min-height: 895px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-itens: center;
    padding: 12px 25px

.title {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px
    color: #da2535;

    mix-blend-mode: normal;
}
`