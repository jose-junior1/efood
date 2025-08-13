import styled from 'styled-components'
import { Props } from '.'
import colors from '../../styles/colors'

export const TagContainer = styled.div<Props>`
    background-color: ${colors.rose};
    color: ${colors.white};
    font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
    font-weight: bold;
    padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
    display: inline-block;
`
