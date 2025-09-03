import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { TagContainer } from '../Tag/styles'

import colors from '../../styles/colors'

export const Card = styled.div`
    background-color: ${colors.pureWhite};
    position: relative;
    max-width: 472px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${TagContainer} {
        display: inline;
        margin-left: 8px;
    }

    img {
        width: 100%;
        height: 217px;
        display: block;
        object-fit: cover;
    }
`

export const ContainerInfos = styled.div`
    padding: 8px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: ${colors.rose};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    height: 100%;

    .capa {
        display: flex;
        justify-content: space-between;
    }

    .nota {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: bold;

        img {
            height: 21px;
            width: 21px;
        }

        @media (max-width: 767px) {
            font-size: 18px;
        }
    }
`

export const Title = styled.h3`
    font-size: 18px;
    display: block;

    @media (max-width: 767px) {
        font-size: 24px;
    }
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    text-align: justify;
    margin-top: 16px;

    @media (max-width: 767px) {
        font-size: 1em;
    }
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const ButtonAbout = styled(Link)`
    background-color: ${colors.rose};
    color: ${colors.white};
    padding: 4px 0;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    border: 1px solid transparent;
    width: 82px;

    &:hover {
        background-color: transparent;
        color: ${colors.rose};
        border-color: ${colors.rose};
    }

    @media (max-width: 767px) {
        width: 100%;
        padding: 16px;
        font-size: 1em;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        padding: 8px 0;
        font-size: 1em;
    }
`
