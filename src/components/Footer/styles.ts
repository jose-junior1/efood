import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
    background-color: ${colors.white};
    padding: 40px 0;
    text-align: center;
    width: 100%;
    flex-shrink: 0;
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
        padding-top: 32px;
    }
    
    p {
        max-width: 480px;
        font-size: 10px;
        padding-top: 80px;
    }

    @media (max-width: 767px) {
        padding: 0 16px;

        p {
            font-size: 14px;
            text-align: justify;
            padding-top: 40px;
        }
    }
`
