import styled from "styled-components";

interface ButtonProps {
    color?: string;
}

export const Container = styled.button<ButtonProps>`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 16px;
    background-color: ${({color}) => color ? color : '#fff'};
    color: var(--white);
    cursor: pointer;
    border-style: none;
    border-radius: 5px;
    transition: 0.2s;

    p {
        font-weight: 500;
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }
`