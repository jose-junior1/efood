import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
    background-color: ${colors.white};
    padding: 40px 0;
    margin-top: 120px;
    text-align: center;
    height: 298px;
`

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .social {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 32px;
    }
    
    p {
        max-width: 480px;
        font-size: 10px;
        margin-top: 80px;
    }
`
