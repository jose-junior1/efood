import styled from "styled-components"

import colors from "../../styles/colors"

export const CartIcon = styled.button`
    opacity: 1;
    position: fixed;
    bottom: 30px;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid ${colors.rose};
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    span {
        color: ${colors.white};
        font-size: 16px;
        font-weight: bold;
    }

    @media (max-width: 767px) {
        transition: none;
    }
`