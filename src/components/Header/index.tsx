import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Container, HeaderBar, Title } from './styles'

const Header = () => (
    <HeaderBar>
        <Container>
            <Link to='/' title='Home'>
                <img src={logo} alt="eFood" />
            </Link>
            <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </Container>
    </HeaderBar>
)

export default Header