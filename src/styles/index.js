import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 auto;
    padding: 0;
    border-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
}`

export const Container = styled.div`
    width: 450px;
    min-height: 895px; //mudar se precisar
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-itens: center;
    padding: 12px 25px
`

export const Input = styled.input`
padding: 11px 24px;
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
cursor: pointer;
`

export const Item = styled.li`
padding: 8px 10px 8px 24px;
width: 354px;
height: 40px;
background: #da2535;
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
border-radius: 10px;
margin-top: 20px;
list-style: none;

font-weight: 500;
font-size: 16px;
line-height: 42px;
color: #FFFFFF;
text-decoration-line: line-through;
`;