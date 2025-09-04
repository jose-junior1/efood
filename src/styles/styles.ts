import styled, { createGlobalStyle } from 'styled-components'

import colors from './colors'

export const GlobalStyles = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    html, body {
        height: 100%;
    }

    body {
        color: ${colors.rose};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        position: relative;
    }

    .content-master {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 100%;
    }

    .content {
        flex: 1;
        height: 100%;
    }
`

export const RestaurantCover = styled.div`
    width: 100%;
    height: 280px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .restaurant-infos {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        .tipo {
            font-weight: 100;
            font-size: 32px;
            color: rgba(255, 255, 255, 0.6);
            padding-top: 25px;
            text-transform: capitalize;
            position: absolute;
        }

        .restaurant-name {
            color: ${colors.pureWhite};
            position: absolute;
            bottom: 32px;
            font-size: 32px;

            @media (max-width: 767px) {
                left: 30px;
            }
        }
    }

    @media (max-width: 767px) {
        padding: 0 30px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0 50px;
    }
`