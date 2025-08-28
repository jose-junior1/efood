import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

import cart from '../../assets/images/cart.png'
import { RootReducer } from '../../store'

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