import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import { Carrinho, Container, HeaderBar, LinkToHome, Title } from './styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const isRestaurantMenuListPage = location.pathname.startsWith('/restaurant/')

    const dispatch = useDispatch()

    const openAside = () => {
        dispatch(open())
    }

    const { items } = useSelector((state: RootReducer) => state.cart)

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
                        className='container-restaurant-page'
                    >
                        <LinkToHome to='/' title='Home'>
                            Restaurantes
                        </LinkToHome>
                        <img className='restaurant-page-logo' src={logo} alt="eFood" />
                        <Carrinho onClick={openAside}>
                            <p><span>{items.length}</span> produto(s) no carrinho</p>
                        </Carrinho>
                    </Container>
                </HeaderBar>
            )}
        </>
    )
}

export default Header