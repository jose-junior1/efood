import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'

import * as S from './styles'

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
                <S.HeaderBar $page='home'>
                    <S.Container $page='home'>
                        <div>
                            <img src={logo} alt="eFood" />
                        </div>
                        <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
                    </S.Container>
                </S.HeaderBar>
            )}
            {isRestaurantMenuListPage && (
                <S.HeaderBar
                    $page='restaurant'
                >
                    <S.Container
                        $page='restaurant'
                        className='container-restaurant-page'
                    >
                        <S.LinkToHome to='/' title='Home'>
                            Restaurantes
                        </S.LinkToHome>
                        <img className='restaurant-page-logo' src={logo} alt="eFood" />
                        <S.Carrinho onClick={openAside}>
                            <p><span>{items.length}</span> produto(s) no carrinho</p>
                        </S.Carrinho>
                    </S.Container>
                </S.HeaderBar>
            )}
        </>
    )
}

export default Header