import styled from 'styled-components'
import { MenuProps } from '.'
import colors from '../../styles/colors'

export const Container = styled.section<Omit<MenuProps, 'title' | 'restaurants'>>`
    padding: 32px 0;
    background-color: ${colors.pureWhite};
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 32px;
    width: 100%;
    margin-top: 48px;
`
export const Modal = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.visible {
        display: flex;
        opacity: 1;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
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
    z-index: 1;
    padding: 32px;
    background-color: ${colors.rose};
    color: ${colors.white};
    
    .close {
        position: absolute;
        top: 8px;
        right: 8px;
        height: 16px;
        width: 16px;
        cursor: pointer;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    button {
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
`