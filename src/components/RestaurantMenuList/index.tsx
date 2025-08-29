import { useState } from 'react'
import * as S from './styles'
import RestaurantMenu from "../RestaurantMenu"

import closeIcon from '../../assets/images/close.png'
import { MenuProps, MenuRestaurant } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export interface ModalState {
    isVisible: boolean
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}


const RestaurantMenuList = ({ menu }: MenuProps) => {
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
        closeModal()
    }

    const { items } = useSelector((state: RootReducer) => state.cart)

    const isInCart = selectedMenu ? items.some((item) => item.id === selectedMenu.id) : false

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
                            <S.Button className='added' onClick={openAside} title='Ver no carrinho'>Produto adicionado ao carrinho</S.Button>
                        ) : (
                            <S.Button onClick={addToCart}>Adicionar ao carrinho - {formataPreco(selectedMenu?.preco)}</S.Button>
                        )}
                    </S.Content>
                </S.ModalContainer>
                <div className="overlay" onClick={closeModal}></div>
            </S.Modal>
        </>
    )
}

export default RestaurantMenuList