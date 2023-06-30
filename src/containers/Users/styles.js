import styled from "styled-components";
import Background from "../../assets/bg image 2.svg"


export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
    height: 100%;
    min-height: 100vh;

`
export const Image = styled.img `
    margin-top: 2rem;
`
export const ContainerItens = styled.div `
    background: linear-gradient(
        157.44deg, rgba(255, 255, 255, 0.6) 
        0.84%,rgba(255, 255, 255, 0.6) 
        0.85% , rgba(255, 255, 255, 0.15) 100% );
    backdrop-filter: blur(4.3rem);
    border-radius: 6.1rem 6.1rem 0rem 0rem;
    padding: 5rem 3.6rem;
    display: flex;
    flex-direction: column;
    width: 41rem;
    height: 100%;
    min-height: calc(100vh - 14rem);
`

export const H1 = styled.h1 `

font-style: normal;
font-weight: 700;
font-size: 3.4rem;
line-height: 4rem;
text-align: center;
color: #FFFFFF;
margin-bottom: 2.4rem;
`
export const Button = styled.button`

    width: 34.2rem;
    height: 7.4rem;
    margin-top: 12rem;
    background: transparent;
    border-radius: 1.4rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.8rem;
    border: 0.1rem solid white;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
    img {
        transform: rotateY(180deg);
    }

    

`

export const User = styled.li`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.4rem;
    border: none;
    outline: none;
    width: 34.2rem;
    height: 5.8rem;
    padding-left: 2.5rem;
    margin-top: 2.8rem;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 2.8rem;
        color: #ffffff;
        
    }

    button {
        background: none;
        cursor: pointer;
        border: none;
    }
`