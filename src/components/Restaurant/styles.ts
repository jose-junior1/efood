import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import colors from '../../styles/colors'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    background-color: ${colors.pureWhite};
    position: relative;
    max-width: 472px;
    width: 100%;

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
    gap: 16px;

    div {
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
`
