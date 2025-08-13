import { Container, FooterSection } from './styles'

import logo from '../../assets/images/logo.png'
import instaIcon from '../../assets/images/instagram-icon.png'
import faceIcon from '../../assets/images/facebook-icon.png'
import twiIcon from '../../assets/images/twitter-icon.png'

const Footer = () => (
    <Container>
        <img className='logo' src={logo} alt="eFood" />
        <FooterSection>
            <div className='social'>
                <img src={instaIcon} alt="Instagram" />
                <img src={faceIcon} alt="Facebook" />
                <img src={twiIcon} alt="Twitter" />
            </div>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
            </p>
        </FooterSection>
    </Container>
)

export default Footer
