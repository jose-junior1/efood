import styled from "styled-components";

import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
    background-image: url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 384px;
    width: 100%;
    text-align: center;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 539px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
`
