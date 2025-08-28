import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../RestaurantMenuList/styles'

import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../RestaurantMenuList'

const Aside = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeAside = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const totalPrices = () => {
        return items.reduce((accumulator, currentValue) => {
            return (accumulator += currentValue.preco!)
        }, 0)
    }

    return (
        <S.Container className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeAside}>
                <h2>Clique em qualquer lugar para fechar</h2>
            </S.Overlay>
            <S.Aside>
                <ul>
                    {items.map((item) => (
                        <S.Item key={item.id}>
                            <img src={item.foto} alt="" />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>{formataPreco(item.preco)}</span>
                            </div>
                            <button onClick={() => removeItem(item.id)} type="button" title="Remover" />
                        </S.Item>
                    ))}
                </ul>
                <div>
                    <S.Prices>
                        Valor total: <span>{formataPreco(totalPrices())}</span>
                    </S.Prices>
                    {items.length === 0 ? (
                        <div className='blocked'>
                            <span />
                            <Button title="Clique aqui para continuar com a compra" type="button">
                            Adicione itens no carrinho para continuar
                        </Button>
                        </div>
                    ) : (
                        <Button title="Clique aqui para continuar com a compra" type="button">
                            Continuar com a entrega
                        </Button>
                    )}
                </div>
            </S.Aside>
        </S.Container>
    )
}

export default Aside
