import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    color?: string;
}

export const Button = ({title, color,  ...rest}: Props) => {
    

    return (
        <Container color={color} {...rest} >
            {title}
        </Container>
    )
}