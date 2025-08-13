import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import colors from '../../styles/colors'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    background-color: ${colors.pureWhite};
    position: relative;
    height: 398px;
    width: 472px;

    ${TagContainer} {
        display: inline;
        margin-left: 8px;
    }

    img {
        width: 100%;
        height: 217px;
        display: block;
    }
`

export const ContainerInfos = styled.div`
    height: 181px;
    padding: 8px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: ${colors.rose};

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
    }
`

export const Title = styled.h3`
    font-size: 18px;
    display: block;
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    text-align: justify;
    margin: 16px 0;
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const ButtonAbout = styled(Link)`
    background-color: ${colors.rose};
    color: ${colors.white};
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    border: 1px solid transparent;

    &:hover {
        background-color: transparent;
        color: ${colors.rose};
        border-color: ${colors.rose};
    }
`
