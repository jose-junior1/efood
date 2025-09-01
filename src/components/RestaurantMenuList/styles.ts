import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.section`
    padding: 32px 0;
    background-color: ${colors.pureWhite};

    @media (max-width: 767px) {
        padding: 32px 16px;
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 32px;
    width: 100%;
    margin-top: 48px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 50px;
    }
`
export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scale(0.1);
    pointer-events: none;
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    
    &.visible {
        opacity: 1;
        pointer-events: auto;
        transform: scale(1);
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
        cursor: pointer;
    }
`

export const ModalContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 656px;
    gap: 24px;
    max-width: 1024px;
    width: 100%;
    height: 344px;
    z-index: 10;
    padding: 32px;
    background-color: ${colors.rose};
    color: ${colors.white};

    .close-modal {
        position: absolute;
        top: 8px;
        right: 8px;

        span {
            display: none;
        }
    }
    
    .close {
        height: 16px;
        width: 16px;
        cursor: pointer;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 767px) {
        height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
        padding: 16px;
        position: relative;
        z-index: 2;

        .picture{
            padding-top: 30px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .close-modal {
            display: flex;
            align-items: center;
            position: absolute;
            top: 8px;
            right: 8px;
            border-radius: 8px;
            height: 30px;
            box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);
            border: none;

            span {
                display: block;
                background-color: rgba(230, 10, 20, 0.2);
                padding: 6px;
                height: 30px;
                border-radius: 8px 0 0 8px;
                font-size: 1em;
            }

            p {
                background-color: rgba(230, 10, 20, 0.8);
                width: 30px;
                height: 100%;
                padding: 6px;

                border-radius: 0 8px 8px 0;
            }
        }

        .close {
            position: static;
        }

        button {
            width: 100%;
        }
    }
`

export const Button = styled.button`
    background-color: ${colors.white};
    color: ${colors.rose};
    font-weight: bold;
    font-size: 14px;
    padding: 4px;
    text-align: center;
    border: 1px solid transparent;
    cursor: pointer;
    width: 218px;

    &:hover {
        border-color: ${colors.white};
        background-color: transparent;
        color: ${colors.white};
    }

    @media (max-width: 767px) {
        padding: 16px 0;
        font-size: 16px;

        &:hover {
            border-color: transparent;
            background-color: ${colors.white};
            color: ${colors.rose};
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
    }

    .added {
        background-color: ${colors.green};
        color: ${colors.white};
        border-color: transparent;

        &:hover {
            border-color: transparent;
        }

        @media (max-width: 767px) {
            padding: 16px 0;
            font-size: 16px;
        }
    }

    @media (max-width: 767px) {
        gap: 40px;

        h3 {
            margin-bottom: 20px;
            font-size: 24px;
        }

        p {
            line-height: 18px;
            font-size: 1em;
            text-align: justify;
        }
    }
`