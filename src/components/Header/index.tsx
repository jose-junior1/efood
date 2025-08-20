import { useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Carrinho, Container, HeaderBar, LinkToHome, Title } from './styles'

const Header = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const isRestaurantMenuListPage = location.pathname.startsWith('/restaurant/')

    return (
        <>
            {isHomePage && (
                <HeaderBar $page='home'>
                    <Container $page='home'>
                        <div>
                            <img src={logo} alt="eFood" />
                        </div>
                        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
                    </Container>
                </HeaderBar>
            )}
            {isRestaurantMenuListPage && (
                <HeaderBar
                    $page='restaurant'
                >
                    <Container
                        $page='restaurant'
                    >
                        <LinkToHome to='/' title='Home'>
                            Restaurantes
                        </LinkToHome>
                        <img src={logo} alt="eFood" />
                        <Carrinho>
                            <p>0 produto(s) no carrinho</p>
                        </Carrinho>
                    </Container>
                </HeaderBar>
            )}
        </>
    )
}

export default Header