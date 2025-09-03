import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik' // biblioteca para criação de formulários
import * as Yup from 'yup' // biblioteca para validação de formulários
import { IMaskInput } from 'react-imask'

import { backToCart, close, goToDelivery, goToFinish, goToPayment, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Button } from '../RestaurantMenuList/styles'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const validationSchemaDelivery = Yup.object({
    name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
    address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
    city: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
    cep: Yup.string()
        .length(9, 'O campo deve ter 9 dígitos')
        .required('O campo é obrigatório'),
    numberHome: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
    complement: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 4 caracteres')
        .max(13, 'O campo deve ter no máximo 13 caracteres'),
})

const validationSchemaPayment = Yup.object({
    cardName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
    cardNumber: Yup.string()
        .length(19, 'O campo deve ter 16 dígitos')
        .required('O campo é obrigatório'),
    cvv: Yup.string()
        .min(3, 'O CVV deve ter no mínimo 3 dígitos')
        .max(4, 'O CVV deve ter no máximo 4 dígitos')
        .required('O campo é obrigatório'),
    expirationMonth: Yup.string()
        .length(2, 'O mês deve ter 2 dígitos')
        .required('O campo é obrigatório'),
    expirationYear: Yup.string()
        .length(4, 'O mês deve ter 4 dígitos')
        .required('O campo é obrigatório')
})

export const AsideGlobal = () => {
    const { isOpen, items, currentStep } = useSelector((state: RootReducer) => state.cart)

    const [purchase, { data }] = usePurchaseMutation()

    const form = useFormik({
        initialValues: {
            // dados de entrega
            name: '',
            address: '',
            city: '',
            cep: '',
            numberHome: '',
            complement: '', // opcional

            // dados de pagamento
            cardName: '',
            cardNumber: '',
            cvv: '',
            expirationMonth: '',
            expirationYear: ''
        },
        // separei os dois formulários em duas constantes pois estavam em seções diferentes
        validationSchema: currentStep === 'delivery' ? validationSchemaDelivery : validationSchemaPayment,
        onSubmit: (values) => {
            // valida se o formulário está preenchido e avança para a próxima seção
            if (currentStep === 'delivery') { // libera para pagamento
                dispatch(goToPayment())
            } else if (currentStep === 'payment') { // pega os dados de entrega e pagamento, os envia e libera para a confirmação de pedido
                const purchaseData = {
                    products: [
                        {
                            id: 1,
                            price: 300
                        }
                    ],
                    delivery: {
                        receiver: values.name
                    },
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.cep,
                        number: Number(values.numberHome),
                        complement: values.complement
                    },
                    payment: {
                        card: {
                            name: values.cardName,
                            number: values.cardNumber,
                            code: Number(values.cvv),
                            expires: {
                                month: Number(values.expirationMonth),
                                year: Number(values.expirationYear)
                            }
                        }
                    }
                }
                purchase(purchaseData)
                dispatch(goToFinish())
            }
        }
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }


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

    const conclude = () => {
        closeAside()
        handleCart()
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
                                    <span>{parseToBrl(item.preco)}</span>
                                </div>
                                <button onClick={() => removeItem(item.id)} type="button" title={`Remover ${item.nome}`} />
                            </S.Item>
                        ))}
                    </ul>
                    <S.Content>
                        <div className='total'>
                            <p>Total de itens selecionados: <span>{items.length}</span></p>
                        </div>
                        <S.Prices>
                            Valor total: <span>{parseToBrl(totalPrices())}</span>
                        </S.Prices>
                        {items.length === 0 ? (
                            <div className='blocked'>
                                <span />
                                <Button title="Adicione itens no carrinho para continuar" type="button">
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
                <form onSubmit={form.handleSubmit}>
                    <div>
                        <h2>Entrega</h2>
                        <S.InputGroup>
                            <label htmlFor="name">Quem irá receber</label>
                            <input
                                id='name'
                                type="text"
                                name='name'
                                value={form.values.name}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                placeholder={checkInputHasError('name') ? '!' : ''}
                                className={checkInputHasError('name') ? 'error' : ''}
                            />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="address">Endereço</label>
                            <input
                                id='address'
                                type="text"
                                name='address'
                                value={form.values.address}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                placeholder={checkInputHasError('adress') ? '!' : ''}
                                className={checkInputHasError('address') ? 'error' : ''}
                            />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="city">Cidade</label>
                            <input
                                id='city'
                                type="text"
                                name='city'
                                value={form.values.city}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('city') ? 'error' : ''}
                            />
                        </S.InputGroup>
                        <div className='home-group'>
                            <S.InputGroup>
                                <label htmlFor="cep">CEP</label>
                                <IMaskInput
                                    mask="00000-000"
                                    id='cep'
                                    type="text"
                                    name='cep'
                                    value={form.values.cep}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    placeholder={checkInputHasError('cep') ? '!' : ''}
                                    className={checkInputHasError('cep') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="numberHome">Número</label>
                                <input
                                    id='numberHome'
                                    type="text"
                                    name='numberHome'
                                    value={form.values.numberHome}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    placeholder={checkInputHasError('numberHome') ? '!' : ''}
                                    className={checkInputHasError('numberHome') ? 'error' : ''}
                                />
                            </S.InputGroup>
                        </div>
                        <S.InputGroup>
                            <label htmlFor="complement">Complemento (opcional)</label>
                            <input
                                id='complement'
                                type="text"
                                name='complement'
                                value={form.values.complement}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('complement') ? 'error' : ''}
                            />
                        </S.InputGroup>
                    </div>
                    <div className='button-group'>
                        <Button type='submit' title="Clique aqui para continuar com o pagamento">Continuar com o pagamento</Button>
                        <Button type='button' onClick={handleCart} title="Clique aqui para voltar ao carrinho">Voltar para o carrinho</Button>
                    </div>
                </form>
            )
        } else if (currentStep === 'payment') {
            return (
                <form onSubmit={form.handleSubmit}>
                    <div>
                        <h2>Pagamento - Valor a pagar {parseToBrl(totalPrices())}</h2>
                        <S.InputGroup>
                            <label htmlFor="cardName">Nome no cartão</label>
                            <input
                                id='cardName'
                                type="text"
                                name='cardName'
                                value={form.values.cardName}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                placeholder={checkInputHasError('cardName') ? '!' : ''}
                                className={checkInputHasError('cardName') ? 'error' : ''}
                            />
                        </S.InputGroup>
                        <div className="card-group">
                            <S.InputGroup>
                                <label htmlFor="cardNumber">Número do cartão</label>
                                <IMaskInput
                                    mask="0000 0000 0000 0000"
                                    id='cardNumber'
                                    type="text"
                                    name='cardNumber'
                                    value={form.values.cardNumber}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    placeholder={checkInputHasError('cardNumber') ? '!' : ''}
                                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="cvv">CVV</label>
                                <IMaskInput
                                    mask="0000"
                                    id='cvv'
                                    type="text"
                                    name='cvv'
                                    value={form.values.cvv}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    placeholder={checkInputHasError('cvv') ? '!' : ''}
                                    className={checkInputHasError('cvv') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                        </div>
                        <div className='home-group'>
                            <S.InputGroup>
                                <label htmlFor="expirationMonth">Mês de vencimento</label>
                                <IMaskInput
                                    mask="00"
                                    id='expirationMonth'
                                    type="text"
                                    name='expirationMonth'
                                    value={form.values.expirationMonth}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    placeholder={checkInputHasError('expirationMonth') ? '!' : ''}
                                    className={checkInputHasError('expirationMonth') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="expirationYear">Ano de vencimento</label>
                                <IMaskInput
                                    mask="0000"
                                    id='expirationYear'
                                    type="text"
                                    name='expirationYear'
                                    value={form.values.expirationYear}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    placeholder={checkInputHasError('expirationYear') ? '!' : ''}
                                    className={checkInputHasError('expirationYear') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                        </div>
                    </div>
                    <div className='button-group'>
                        <Button type='submit' title="Clique aqui para finalizar o pedido">Finalizar pagamento</Button>
                        <Button type='button' onClick={handleContinueDelivery} title="Clique aqui para voltar para editar o endereço">Voltar para a edição de endereço</Button>
                    </div>
                </form>
            )
        } else if (currentStep === 'finish' && data) {
            return (
                <>
                    <S.FinishContent>
                        <h2>Pedido realizado - {data.orderId}</h2>
                        <div>
                            <p>
                                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                            </p>
                            <p>
                                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                            </p>
                            <p>
                                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                            </p>
                            <p>
                                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                            </p>
                        </div>
                    </S.FinishContent>
                    <Button onClick={conclude} title="Clique aqui para concluir">Concluir</Button>
                </>
            )
        }
    }

    return (
        <S.Container className={isOpen ? 'is-open' : ''}>
            {currentStep === 'finish' ? (
                ''
            ) : (
                <S.ButtonClose onClick={closeAside}>
                    <span>Fechar</span>
                    <b>x</b>
                </S.ButtonClose>
            )}
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