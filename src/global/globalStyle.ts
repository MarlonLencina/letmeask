import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {

    box-sizing: border-box;
    margin: 0;
    padding: 0%;

}


:root {
    --black: #000;
    --white: #fff;
    --shadow: #050206;
    --purple: #835AFD;
    --danger: #E73F5D;
    --gray: #a8a8b3;

}


body,input,button,textarea {
    font-family: 'Poppins', sans-serif;
}

#root {
    display: flex;
    align-items: stretch;
    height: 100vh;
}

`