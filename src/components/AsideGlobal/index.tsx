import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { RootReducer } from '../../store'
import { backToCart, close, goToDelivery, goToPayment, remove } from '../../store/reducers/cart'
import { Button } from '../RestaurantMenuList/styles'
import { formataPreco } from '../RestaurantMenuList'

export const AsideGlobal = () => {
    const { isOpen, items, currentStep } = useSelector((state: RootReducer) => state.cart)

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

    const handleCart = () => {
        dispatch(backToCart())
    }

    const handleContinueDelivery = () => {
        dispatch(goToDelivery())
    }

    const handleContinuePayment = () => {
        dispatch(goToPayment())
    }

    const renderContent = () => {
        if (currentStep === 'cart') {
            return (
                <>
                    <ul>
                        {items.map((item) => (
                            <S.Item key={item.id}>
                                <img src={item.foto} alt={item.nome} />
                                <div>
                                    <h3>{item.nome}</h3>
                                    <span>{formataPreco(item.preco)}</span>
                                </div>
                                <button onClick={() => removeItem(item.id)} type="button" title="Remover" />
                            </S.Item>
                        ))}
                    </ul>
                    <S.Content>
                        <div className='total'>
                            <p>Total de itens selecionados: <span>{items.length}</span></p>
                        </div>
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
                            <Button title="Clique aqui para continuar com a compra" type="button" onClick={handleContinueDelivery}>
                                Continuar com a entrega
                            </Button>
                        )}
                    </S.Content>
                </>
            )
        } else if (currentStep === 'delivery') {
            return (
                <>
                    <div>
                        <h2>Entrega</h2>
                        <S.InputGroup>
                            <label htmlFor="name">Quem irá receber</label>
                            <input id='name' type="text" />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="adress">Endereço</label>
                            <input id='adress' type="text" />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="city">Cidade</label>
                            <input id='city' type="text" />
                        </S.InputGroup>
                        <div className='home-group'>
                            <S.InputGroup>
                                <label htmlFor="cep">CEP</label>
                                <input id='cep' type="number" />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="numberHome">Número</label>
                                <input id='numberHome' type="number" />
                            </S.InputGroup>
                        </div>
                        <S.InputGroup>
                            <label htmlFor="complement">Complemento (opcional)</label>
                            <input id='complement' type="text" />
                        </S.InputGroup>
                    </div>
                    <div className='button-group'>
                        <Button onClick={handleContinuePayment}>Continuar com o pagamento</Button>
                        <Button onClick={handleCart}>Voltar para o carrinho</Button>
                    </div>
                </>
            )
        } else if (currentStep === 'payment') {
            return (
                <>
                    <div>
                        <h2>Pagamento - Valor a pagar {formataPreco(totalPrices())}</h2>
                        <S.InputGroup>
                            <label htmlFor="cardName">Nome no cartão</label>
                            <input id='cardName' type="text" />
                        </S.InputGroup>
                        <div className="card-group">
                            <S.InputGroup>
                                <label htmlFor="cardNumber">Número do cartão</label>
                                <input id='cardNumber' type="number" />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="cvv">CVV</label>
                                <input id='cvv' type="number" />
                            </S.InputGroup>
                        </div>
                        <div className='home-group'>
                            <S.InputGroup>
                                <label htmlFor="expirationMonth">Mês de vencimento</label>
                                <input id='expirationMonth' type="number" />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="expirationYear">Ano de vencimento</label>
                                <input id='expirationYear' type="number" />
                            </S.InputGroup>
                        </div>
                    </div>
                    <div className='button-group'>
                        <Button>Finalizar pagamento</Button>
                        <Button onClick={handleContinueDelivery}>Voltar para a edição de endereço</Button>
                    </div>
                </>
            )
        }
    }

    return (
        <S.Container className={isOpen ? 'is-open' : ''}>
            <S.ButtonClose onClick={closeAside}>
                <span>Fechar</span>
                <b>x</b>
            </S.ButtonClose>
            <S.Overlay onClick={closeAside}>
                <h2>Clique em qualquer lugar para fechar</h2>
            </S.Overlay>
            <S.Aside>
                {renderContent()}
            </S.Aside>
        </S.Container>
    )
}

export default AsideGlobal