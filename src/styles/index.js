import styled, { createGlobalStyle } from "styled-components";
import App from './../App';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 auto;
    padding: 0;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
}`

export const Container = styled.div`
    margin-top:55px;
    width: 80%;
    height: 800px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
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

&:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`

export const Item = styled.li`
padding: 8px 10px 8px 24px;
width: 354px;
height: 40px;
background: ${(props) => (props.checked ? "#da2535" : "#FFF")};
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
border-radius: 10px;
margin-top: 20px;
list-style: none;

display: flex;
align-items: center;
justify-content: space-between;

font-weight: 500;
font-size: 16px;
line-height: 42px;
color: ${(props) => (props.checked ? "#FFF" : "#000")};
text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};


div{
    display:flex;
    justify-content: space-between;
    gap:10px;
}

button {
    background: transparent;
    border: none;
    color: ${(props) => (props.checked ? "#FFF" : "#000")};
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
}
`;