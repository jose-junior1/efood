import styled from 'styled-components'
import colors from '../../styles/colors'
import discard from '../../assets/images/discard.png'
import { Button } from '../RestaurantMenuList/styles'


export const Container = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 360px;
    opacity: 0;
    pointer-events: none;
    transform: translateX(100%);
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

    &.is-open {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0%);
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr 70%;
    }
`

export const Overlay = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;

    h2 {
        margin: 0 auto;
        color: ${colors.white};
        cursor: pointer;
    }

    @media (max-width: 767px) {
        h2 {
            font-size: 18px;
            text-align: center;
            padding: 0 10px;
            line-height: 32px;
        }
    }
`

export const Aside = styled.aside`
    z-index: 1;
    width: 100%;
    background-color: ${colors.rose};
    padding: 32px 8px 32px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    button {
        margin-top: 24px;
        max-width: 100%;
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-height: 75vh;
        overflow-y: auto;
    }

    ${Button} {
        margin: 0;
    }

    .blocked {
        position: relative;

        span {
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            cursor: not-allowed;
        }

        button {
            pointer-events: none;
        }
    }

    .total {
        p {
            display: none;
        }
    }

    @media (max-width: 767px) {
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
        padding: 10px;

        .total {
            
            p {
                color: ${colors.white};
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-size: 18px;
                font-weight: 500;
            }
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Prices = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
    margin: 40px 0 16px 0;

    span {
        display: block;
        font-size: 12px;
        color: ${colors.white};
    }

    @media (max-width: 767px) {
        font-size: 18px;
        margin: 10px 0;

        span {
            font-size: 16px;
        }
    }
`

export const Item = styled.li`
    position: relative;
    display: flex;
    gap: 8px;
    padding: 8px 0 8px 8px;
    background-color: ${colors.white};

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    h3 {
        font-size: 18px;
        color: ${colors.rose};
        margin-bottom: 16px;
        font-weight: 900;
    }

    span {
        font-size: 14px;
    }

    button {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 16px;
        height: 16px;
        border: none;
        cursor: pointer;
        background-color: transparent;
        background-image: url(${discard});
        background-size: cover;
    }

    @media (max-width: 767px) {
        padding: 0;
        
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 8px 0;
        }

        h3 {
            font-size: 1em;
            padding-right: 8px;
            margin: 0;
        }

        span {
            font-size: 1em;
        }

        button {
            width: 24px;
            height: 24px;
        }
    }
`
