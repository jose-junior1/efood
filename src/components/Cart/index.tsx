import { useDispatch, useSelector } from 'react-redux'

import { backToCart, open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import cart from '../../assets/images/cart.png'

import * as S from './styles'

const Cart = () => {
    const dispatch = useDispatch()

    const openAside = () => {
        dispatch(open())
        dispatch(backToCart())
    }

    const { items } = useSelector((state: RootReducer) => state.cart)

    return (
        <S.CartIcon onClick={openAside} title={items.length === 1 ? "Clique aqui para ver o produto no carrinho" : items.length === 0 ? "Clique aqui para ver o carrinho vazio" : "Clique aqui para ver os produtos no carrinho"}>
            <span>{items.length}</span>
            <img src={cart} alt="Carrinho" />
        </S.CartIcon>
    )
}

export default Cart