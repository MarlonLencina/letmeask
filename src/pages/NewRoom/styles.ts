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


export const Title = styled.h1`

font-size: 24px;
margin: 64px 0 24px;
`


export const SignIn = styled.div`

display: flex;
justify-content: center;
max-width: 320px;

span {
    color: var(#737380);
    margin-top: 18px;
    font-size: 14px;

}

a {
    text-decoration: none;
    color: var(--purple);
    font-size: 14px;


}

`

