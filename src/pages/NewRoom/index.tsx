import React from "react";

import { Container,
         Sidebar,
         ContainerLogin,
         Login,
         Logo,
         Text,
         Form,
         SignIn,
         Title
    } from "./styles";
import ilustrationSVG from "../../assets/images/illustration.svg"
import logoSVG from "../../assets/images/logo.svg"
import googleSVG from "../../assets/images/google-icon.svg"
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";


export const NewRoom = () => {

    const navigate = useNavigate()

    const handleCreateRoom = () => {

        navigate('/rooms/new')
    }

    return (
        <>
            <Sidebar>
                <img src={ilustrationSVG} alt="Perguntas e respostas"></img>
                <Text>
                    <strong>Crie salas de 	Q&amp;A</strong>
                    <p>Tire duvidas da sua audiencia em tempo real.</p>
                </Text>
            </Sidebar>
            <ContainerLogin>
            <Login>
                <Logo>
                    <img src={logoSVG} alt="logo" />
                </Logo>
                <Title>
                    Crie uma nova sala
                </Title>
                <Form>
                    <input
                    placeholder="Nome da sala"
                    type="text"
                    />
                    <Button title="Criar sala" type="submit" color="#835AFD" />
                </Form>
                <SignIn>
                    <span>Quer entrar em uma sala já existente?<Link to="/"> Clique aqui</Link></span>
                </SignIn>
            </Login>
            </ContainerLogin>
        </>
    )
}