import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import cart from '../../assets/images/cart.png'

import * as S from './styles'

const Cart = () => {
    const dispatch = useDispatch()

    const openAside = () => {
        dispatch(open())
    }

    const { items } = useSelector((state: RootReducer) => state.cart)

    return (
        <S.CartIcon onClick={openAside}>
            <span>{items.length}</span>
            <img src={cart} alt="Carrinho" />
        </S.CartIcon>
    )
}

export default Cart