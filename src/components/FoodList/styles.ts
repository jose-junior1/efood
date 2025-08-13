import styled from 'styled-components'
import { Props } from '.'
import colors from '../../styles/colors'

export const Container = styled.section<Omit<Props, 'title' | 'foods'>>`
    padding: 32px 0;
    background-color: ${colors.pureWhite};
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
    margin-top: 48px;
`
