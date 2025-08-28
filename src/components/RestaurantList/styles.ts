import styled from 'styled-components'
import { RestaurantsProps } from '../../types' 
import colors from '../../styles/colors'

export const Container = styled.section<Omit<RestaurantsProps, 'title' | 'restaurants'>>`
    padding: 32px 0;
    background-color: ${colors.pureWhite};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (max-width: 767px) {
        padding: 32px 16px;
    }

    .container {
        margin-top: 80px;
        margin-bottom: 120px;

        @media (max-width: 767px) {
            margin-bottom: 80px;
        }
    }
`

export const Title = styled.h2`
    font-size: 18px;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    row-gap: 48px;
    width: 100%;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`
