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
`

export const Input = styled.input`
padding: 8px 24px;
width: 224px;
height: 50;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
border-radius: 10px;
border: none;

font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #da2535;

&::placeholder{
    font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #da2535;
}
`

// export const Flex = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// `

export const Button = styled.button`
width: 112px;
height: 50px;
background: #da2535;
border-radius: 10px;
border: none;
margin-left: 10px;

font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #fbfbfb;

`