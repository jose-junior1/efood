import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { add, backToCart, open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { parseToBrl } from '../../utils'

import RestaurantMenu from "../RestaurantMenu"
import Loader from '../Loader'

import closeIcon from '../../assets/images/close.png'

import * as S from './styles'

export interface ModalState {
    isVisible: boolean
}

const RestaurantMenuList = ({ menu, isLoading }: MenuProps) => {
    const [selectedMenu, setSelectedMenu] = useState<MenuRestaurant | null>(null)

    const [modal, setModal] = useState<ModalState>({
        isVisible: false
    })

    const openModal = (menu: MenuRestaurant) => {
        setSelectedMenu(menu)
        setModal({ isVisible: true })
    }

    const closeModal = () => {
        setModal({
            isVisible: false
        })
    }

    const dispatch = useDispatch()

    const addToCart = () => {
        if (selectedMenu) {
            dispatch(add(selectedMenu))
            setSelectedMenu({ ...selectedMenu })
        }
    }

    const openAside = () => {
        dispatch(open())
        dispatch(backToCart())
        closeModal()
    }

    const { items } = useSelector((state: RootReducer) => state.cart)

    const isInCart = selectedMenu ? items.some((item) => item.id === selectedMenu.id) : false

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <S.Container className="container">
                <S.List>
                    {menu.map((mn) => (
                        <RestaurantMenu
                            key={mn.id}
                            title={mn.nome}
                            image={mn.foto}
                            description={mn.descricao}
                            details='Mais detalhes'
                            onOpenModal={() => openModal(mn)}
                        />
                    ))}
                </S.List>
            </S.Container>
            <S.Modal className={modal.isVisible ? 'visible' : ''}>
                <S.ModalContainer>
                    <img className='picture' src={selectedMenu?.foto} alt={selectedMenu?.nome} />
                    <S.Content>
                        <div>
                            <div className='close-modal' onClick={closeModal}>
                                <span>Fechar</span>
                                <p>
                                    <img
                                        className='close'
                                        src={closeIcon}
                                        alt="Fechar pop-up"
                                        title="Fechar pop-up"
                                    />
                                </p>
                            </div>
                            <h3>{selectedMenu?.nome}</h3>
                            <p>
                                {selectedMenu?.descricao}
                                <br />
                                <br />
                                <span>
                                    Serve: {selectedMenu?.porcao === '1 pessoa' ? selectedMenu?.porcao : `de ${selectedMenu?.porcao}`}
                                </span>
                            </p>
                        </div>
                        {isInCart ? (
                            <S.Button className='added' onClick={openAside} title='Clique aqui para ver no carrinho'>Produto adicionado ao carrinho</S.Button>
                        ) : (
                            <S.Button onClick={addToCart} title={`Clique aqui para adicionar ao carrinho`}>Adicionar ao carrinho - {parseToBrl(selectedMenu?.preco)}</S.Button>
                        )}
                    </S.Content>
                </S.ModalContainer>
                <div className="overlay" onClick={closeModal} title='Clique aqui para fechar' />
            </S.Modal>
        </>
    )
}

export default RestaurantMenuList