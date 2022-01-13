import React from "react";

import { Container,
         Sidebar,
         ContainerLogin,
         Login,
         Logo,
         ButtonGoogle,
         Separator,
         Text,
         Form,
    } from "./styles";
import ilustrationSVG from "../../assets/images/illustration.svg"
import logoSVG from "../../assets/images/logo.svg"
import googleSVG from "../../assets/images/google-icon.svg"
import { Button } from "../../components/button";

import { useNavigate, Link } from "react-router-dom";

import {auth, Firebase} from '../../service/firebase'

export const Home = () => {

    const navigate = useNavigate()

    const handleSignIn = async () => {

        console.log('action fired')
        const provider = new Firebase.auth.GoogleAuthProvider();

        const response = await auth.signInWithPopup(provider)

        console.log(response)

        navigate('/new-room')
        console.log('action closed')

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
                <ButtonGoogle onClick={() => {
                    handleSignIn()
                }}>
                    <img src={googleSVG} alt="logo do google" ></img>
                    <p>Crie sua sala com o google</p>
                </ButtonGoogle>
                <Separator>
                    <p>Ou entre em uma sala   </p>
                             </Separator>
                <Form>
                    <input
                    placeholder="Digite o codigo da sala"
                    type="text"
                    />
                    <Button onClick={() => {
                    console.log('botao clicado')
                }} title="Entrar na sala" type="submit" color="#835AFD" />
                </Form>
            </Login>
            </ContainerLogin>
        </>
    )
}