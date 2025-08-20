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
