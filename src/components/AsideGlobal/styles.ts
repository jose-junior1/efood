import styled from "styled-components"

import { Button } from "../RestaurantMenuList/styles"

import discard from '../../assets/images/discard.png'

import colors from "../../styles/colors"


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

    @media (min-width: 768px) and (max-width: 1023px) {
        text-align: center;
    }
`
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
        grid-template-columns: 1fr;
        width: 100%;

        ${Overlay} {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const ButtonClose = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 8px;
    top: 8px;
    border-radius: 8px;
    z-index: 1001;
    background-color: ${colors.rose};
    color: ${colors.white};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;

    span {
        padding: 0 8px;
        font-weight: bold;
    }

    b {
        background-color: ${colors.strongRose};
        padding: 8px 12px;
        border-radius: 0 8px 8px 0;
        font-size: 18px;
    }

    @media (max-width: 767px) {
        opacity: 1;
        pointer-events: auto;
    }
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;

    label {
        font-size: 14px;
        font-weight: bold;
    }

    input {
        height: 32px;
        max-width: 100%;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid transparent;
        font-size: 16px;
        padding: 0 8px;
        background-color: ${colors.white};
        color: ${colors.black};
    
        &:focus {
            outline: none;
            border-color: ${colors.blue};
        }

        &.error {
            border-color: red;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: ${colors.lightRed};

            &::placeholder {
                text-align: center;
                color: red;
                font-weight: bold;
                letter-spacing: 0;
                font-size: 13px;
            }
        }
    }

    small {
        color: ${colors.white};
    }
`

export const Aside = styled.aside`
    z-index: 1;
    max-width: 100%;
    width: 100%;
    background-color: ${colors.rose};
    padding: 32px 8px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    color: ${colors.white};
    box-shadow: 1px 1px 18px 2px rgba(0, 0, 0, 0.5);
    
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
    }
    
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        max-width: 100%;
        width: 100%;
    }

    .home-group {
        display: flex;
        justify-content: space-between;

        div {
            max-width: 155px;
            width: 100%;
        }
    }
    
    .card-group {
        display: grid;
        grid-template-columns: 228px 87px;
        justify-content: space-between;
        width: 100%;
    }

    .button-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

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
        padding: 50px 10px 10px 10px;
        height: 100%;
        width: 100%;

        .card-group {
            max-width: 100%;
            grid-template-columns: 1fr 90px;
            gap: 16px;
            justify-content: space-around;
            width: 100%;
        }

        .home-group {
            gap: 16px;
            div {
                max-width: 100%;
            }
        }
        
        ul {
            height: 70vh;
        }

        .total p {
            color: ${colors.white};
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: 500;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .card-group {
            max-width: 100%;
            width: 100%;
            grid-template-columns: 1fr 60px;
            gap: 16px;
        }

        .home-group {
            gap: 16px;

            div {
                max-width: 100%;
            }
        }

        .total {
            p {
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-size: 18px;
                font-weight: 500;
            }
            
            span {
                font-size: 1em;
            }
        }

        ${Button} {
            padding: 8px 0;
            font-size: 1em;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Prices = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};

    span {
        display: block;
        font-size: 12px;
        color: ${colors.white};
    }

    @media (max-width: 767px) {
        font-size: 18px;
        margin: 10px 0;

        span {
            font-size: 1em;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 18px;
        font-weight: normal;

        span {
            font-size: 1em;
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
        color: ${colors.rose};
    }

    button {
        position: absolute;
        bottom: 4px;
        right: 4px;
        width: 22px;
        height: 22px;
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

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0;
    }
`

export const FinishContent = styled.div`
    div {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        text-align: justify;
    }

    @media (max-width: 767px) {
        h2 {
            font-size: 18px;
        }

        p {
            font-size: 1em;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        h2 {
            font-size: 18px;
        }

        p {
            font-size: 1em;
        }
    }
`