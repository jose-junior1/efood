import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik' // biblioteca para criação de formulários
import * as Yup from 'yup' // biblioteca para validação de formulários
import { IMaskInput } from 'react-imask'

import { backToCart, close, goToDelivery, goToFinish, goToPayment, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { Button } from '../RestaurantMenuList/styles'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'

// validação de campos de entrega
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

const currentYear = new Date().getFullYear()
const currentYearTwoDigits = currentYear % 100

// validação de campos de pagamento
const validationSchemaPayment = Yup.object({
    cardName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
    cardNumber: Yup.string()
        .length(19, 'O campo deve ter 19 dígitos')
        .required('O campo é obrigatório'),
    cvv: Yup.string()
        .length(3, 'O CVV deve ter 3 dígitos')
        .required('O campo é obrigatório'),
    expirationMonth: Yup.number()
        .min(1, 'O mês não pode ser menor que 1')
        .max(12, 'o mês não pode ser maior que 12')
        .required('O campo é obrigatório'),
    expirationYear: Yup.number()
        .min(currentYearTwoDigits, `O ano deve ser no mínimo ${currentYearTwoDigits}`)
        .required('O campo é obrigatório')
        .test('is-future', 'Data de expiração inválida', function (value) {
            if (!value) return false
            const { expirationMonth } = this.parent
            if (value > currentYearTwoDigits) return true
            if (value === currentYearTwoDigits && Number(expirationMonth) >= new Date().getMonth() + 1) {
                return true
            }
            return false
        })
})

export const AsideGlobal = () => {
    const { isOpen, items, currentStep } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

    // estado para armazenar os dados de entrega
    const [deliveryData, setDeliveryData] = useState<null | {
        name: string
        address: string
        city: string
        cep: string
        numberHome: string
        complement?: string
    }>(null)

    // formulario de dados de entrega
    const formDelivery = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            cep: '',
            numberHome: '',
            complement: '', // opcional
        },
        validationSchema: validationSchemaDelivery,
        onSubmit: (values) => {
            setDeliveryData(values)
            dispatch(goToPayment())
        }
    })

    // formulario de dados de pagamento
    const formPayment = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cvv: '',
            expirationMonth: '',
            expirationYear: ''
        },
        validationSchema: validationSchemaPayment, onSubmit: (values) => {
            if (deliveryData) { // impossibilita ir para o pagamento com dados de entrega vazios
                const purchaseData = {
                    products: items.map((item) => ({
                        id: item.id,
                        price: item.preco
                    })),
                    delivery: {
                        receiver: deliveryData.name
                    },
                    address: {
                        description: deliveryData.address,
                        city: deliveryData.city,
                        zipCode: deliveryData.cep,
                        number: Number(deliveryData.numberHome),
                        complement: deliveryData.complement
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

    // Função para verificar se um campo de formulário possui erro
    const checkInputHasError = (form: typeof formDelivery | typeof formPayment, fieldName: string) => {
        // Verifica se o campo já foi tocado pelo usuário
        const isTouched = fieldName in form.touched

        // Verifica se o campo possui erro de validação
        const isInvalid = fieldName in form.errors

        // Considera que há erro somente se o campo foi tocado e está inválido
        const hasError = isTouched && isInvalid

        return hasError
    }

    const closeAside = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const totalPrices = () => {
        return items.reduce((accumulator, currenItem) => {
            if (currenItem.preco) {
                return (accumulator += currenItem.preco)
            }

            return 0
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

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

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
                        {items.length === 0 ? (
                            <div className='blocked'>
                                <span />
                                <Button title="Adicione itens no carrinho para continuar" type="button">
                                    Adicione itens no carrinho para continuar
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className='total'>
                                    <p>Total de itens selecionados: <span>{items.length}</span></p>
                                </div>
                                <S.Prices>
                                    Valor total: <span>{parseToBrl(totalPrices())}</span>
                                </S.Prices>
                                <Button title="Clique aqui para continuar com a compra" type="button" onClick={handleContinueDelivery}>
                                    Continuar com a entrega
                                </Button>
                            </>

                        )}
                    </S.Content>
                </>
            )
        } else if (currentStep === 'delivery') {
            return (
                <form onSubmit={formDelivery.handleSubmit}>
                    <div>
                        <h2>Entrega</h2>
                        <S.InputGroup>
                            <label htmlFor="name">Quem irá receber</label>
                            <input
                                id='name'
                                type="text"
                                name='name'
                                value={formDelivery.values.name}
                                onChange={formDelivery.handleChange}
                                onBlur={formDelivery.handleBlur}
                                placeholder={checkInputHasError(formDelivery, 'name') ? 'O campo é obrigatório' : ''}
                                className={checkInputHasError(formDelivery, 'name') ? 'error' : ''}
                            />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="address">Endereço</label>
                            <input
                                id='address'
                                type="text"
                                name='address'
                                value={formDelivery.values.address}
                                onChange={formDelivery.handleChange}
                                onBlur={formDelivery.handleBlur}
                                placeholder={checkInputHasError(formDelivery, 'address') ? 'O campo é obrigatório' : ''}
                                className={checkInputHasError(formDelivery, 'address') ? 'error' : ''}
                            />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="city">Cidade</label>
                            <input
                                id='city'
                                type="text"
                                name='city'
                                value={formDelivery.values.city}
                                onChange={formDelivery.handleChange}
                                onBlur={formDelivery.handleBlur}
                                placeholder={checkInputHasError(formDelivery, 'address') ? 'O campo é obrigatório' : ''}
                                className={checkInputHasError(formDelivery, 'city') ? 'error' : ''}
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
                                    value={formDelivery.values.cep}
                                    onChange={formDelivery.handleChange}
                                    onBlur={formDelivery.handleBlur}
                                    placeholder={checkInputHasError(formDelivery, 'cep') ? 'O campo é obrigatório' : ''}
                                    className={checkInputHasError(formDelivery, 'cep') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="numberHome">Número</label>
                                <input
                                    id='numberHome'
                                    type="text"
                                    name='numberHome'
                                    value={formDelivery.values.numberHome}
                                    onChange={formDelivery.handleChange}
                                    onBlur={formDelivery.handleBlur}
                                    placeholder={checkInputHasError(formDelivery, 'numberHome') ? 'O campo é obrigatório' : ''}
                                    className={checkInputHasError(formDelivery, 'numberHome') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                        </div>
                        <S.InputGroup>
                            <label htmlFor="complement">Complemento (opcional)</label>
                            <input
                                id='complement'
                                type="text"
                                name='complement'
                                value={formDelivery.values.complement}
                                onChange={formDelivery.handleChange}
                                onBlur={formDelivery.handleBlur}
                                className={checkInputHasError(formDelivery, 'complement') ? 'error' : ''}
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
                <form onSubmit={formPayment.handleSubmit}>
                    <div>
                        <h2>Pagamento - Valor a pagar {parseToBrl(totalPrices())}</h2>
                        <S.InputGroup>
                            <label htmlFor="cardName">Nome no cartão</label>
                            <input
                                id='cardName'
                                type="text"
                                name='cardName'
                                value={formPayment.values.cardName}
                                onChange={formPayment.handleChange}
                                onBlur={formPayment.handleBlur}
                                placeholder={checkInputHasError(formPayment, 'cardName') ? 'O campo é obrigatório' : ''}
                                className={checkInputHasError(formPayment, 'cardName') ? 'error' : ''}
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
                                    value={formPayment.values.cardNumber}
                                    onChange={formPayment.handleChange}
                                    onBlur={formPayment.handleBlur}
                                    placeholder={checkInputHasError(formPayment, 'cardNumber') ? 'O campo é obrigatório' : ''}
                                    className={checkInputHasError(formPayment, 'cardNumber') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="cvv">CVV</label>
                                <IMaskInput
                                    mask="000"
                                    id='cvv'
                                    type="text"
                                    name='cvv'
                                    value={formPayment.values.cvv}
                                    onChange={formPayment.handleChange}
                                    onBlur={formPayment.handleBlur}
                                    placeholder={checkInputHasError(formPayment, 'cvv') ? 'Obrigatório' : ''}
                                    className={checkInputHasError(formPayment, 'cvv') ? 'error' : ''}
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
                                    value={formPayment.values.expirationMonth}
                                    onChange={formPayment.handleChange}
                                    onBlur={formPayment.handleBlur}
                                    placeholder={checkInputHasError(formPayment, 'expirationMonth') ? 'O campo é obrigatório' : ''}
                                    className={checkInputHasError(formPayment, 'expirationMonth') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="expirationYear">Ano de vencimento</label>
                                <IMaskInput
                                    mask="00"
                                    id='expirationYear'
                                    type="text"
                                    name='expirationYear'
                                    value={formPayment.values.expirationYear}
                                    onChange={formPayment.handleChange}
                                    onBlur={formPayment.handleBlur}
                                    placeholder={checkInputHasError(formPayment, 'expirationYear') ? 'O campo é obrigatório' : ''}
                                    className={checkInputHasError(formPayment, 'expirationYear') ? 'error' : ''}
                                    inputMode='numeric'
                                />
                            </S.InputGroup>
                        </div>
                    </div>
                    <div className='button-group'>
                        <Button
                            type='submit'
                            title="Clique aqui para finalizar o pedido"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Finalizando o pedido...' : 'Finalizar pagamento'}
                        </Button>
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