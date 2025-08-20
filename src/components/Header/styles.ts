import styled, { css } from "styled-components";

import fundo from '../../assets/images/fundo.png'
import { Link } from "react-router-dom";
import colors from "../../styles/colors";

type Props = {
    $page: string
}

export const HeaderBar = styled.header<Props>`
    width: 100%;
    text-align: center;
    background-image: url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    height: ${({ $page }) => $page === 'home' ? '384px' : '125px'};

`
export const Container = styled.div<Props>`
    display: flex;
    max-width: 1024px;
    width: 100%;

    ${({ $page }) => $page === 'home' && css`
        flex-direction: column;
        justify-content: space-around;
        max-width: 539px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    `}

    ${({ $page }) => $page === 'restaurant' && css`
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    `}
    
`

export const LinkToHome = styled(Link)`
    color: ${colors.rose};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
`

export const Carrinho = styled.div`
    cursor: pointer;

    p {
        font-weight: 900;
        font-size: 18px;
    }
`
