import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import fundo from '../../assets/images/fundo.png'

import colors from "../../styles/colors"

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
        
        @media (max-width: 767px) {
            justify-content: space-around;
            align-items: center;
        }
    
        @media (min-width: 768px) and (max-width: 1024px) {
            justify-content: space-between;
            padding: 0 32px;
        }
`

export const LinkToHome = styled(Link)`
    color: ${colors.rose};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    
    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 767px) {
        padding: 8px;
        border-radius: 8px;
        background-color: ${colors.rose};
        color: ${colors.white};
    }
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
    
    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 767px) {
        display: none;
    }
`
