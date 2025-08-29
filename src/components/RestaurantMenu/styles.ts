import styled from 'styled-components'
import colors from '../../styles/colors'

export const Card = styled.div`
    background-color: ${colors.rose};
    position: relative;
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    img {
        width: 100%;
        height: 167px;
        display: block;
    }

    @media (max-width: 767px) {
        img {
            height: 250px;
        }
    }
`

export const ContainerInfos = styled.div`
    width: 100%;
    padding: 8px 0;

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
    color: ${colors.white};

    @media (max-width: 767px) {
        font-size: 24px;
    }
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    text-align: justify;
    margin: 16px 0;
    color: ${colors.white};

    @media (max-width: 767px) {
        font-size: 1em;
    }
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const ButtonCart = styled.button`
    width: 100%;
    padding: 4px 6px;
    font-size: 14px;
    background-color: ${colors.white};
    color: ${colors.rose};
    font-weight: bold;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        color: ${colors.white};
        border-color: ${colors.white};
    }

    @media (max-width: 767px) {
        font-size: 1em;
        padding: 16px;

        &:hover {
            background-color: ${colors.white};
            color: ${colors.rose};
            border-color: ${colors.white};
        }
    }
`
