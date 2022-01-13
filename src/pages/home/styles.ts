import styled from "styled-components";

export const Container = styled.div`

`

export const Sidebar = styled.div`

flex: 1;
background-color: var(--purple);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 120px 40px;

img {
    max-width: 320px;
}

`

export const Text = styled.div`

margin-top: 16px;


strong {
    color: var(--white);
    font-size: 36px;
    line-height: 42px;
}

p {

    color: var(--white);
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;

}

`

export const ContainerLogin = styled.div`
flex: 1;
padding: 0 32px;
display: flex;
align-items: center;
justify-content: center;
`

export const Login = styled.div`

max-width: 320px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`


export const Logo = styled.div`


`


export const ButtonGoogle = styled.button`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 16px;
    margin-top: 64px;
    background-color: var(--danger);
    color: var(--white);
    cursor: pointer;
    border-style: none;
    border-radius: 5px;
    transition: 0.2s;

    p {
        font-weight: 500;
    }

    img {
        margin-right: 8px;
    }


    :hover {
        filter: brightness(0.8);
    }

`


export const Separator = styled.div`

width: 100%;
display: flex;
align-items: center;
margin: 32px 0;

p {
    color: var(--gray);
    font-size: 14px;
}

::before {
content: '';
flex: 1;
height: 1px;
background-color: var(--gray);
margin-right: 16px;
}

::after {
content: '';
flex: 1;
height: 1px;
background-color: var(--gray);
margin-left: 16px;
}

`


export const Form = styled.div`

input {
    width: 100%;
    height: 56px;
    border-radius: 8px;
    padding: 0 16px;
    background-color: var(--white);
    margin-bottom: 16px;
    border-style: none;
    border: 1px solid var(--gray);

    :focus {
        outline: none;
    } 
}

`

