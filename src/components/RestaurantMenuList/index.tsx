import { useState } from 'react'
import * as S from './styles'
import RestaurantMenu from "../RestaurantMenu"

import closeIcon from '../../assets/images/close.png'
import { MenuProps, MenuRestaurant } from '../../types'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

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
        }
        dispatch(open())
        closeModal()
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
                    <img src={selectedMenu?.foto} alt={selectedMenu?.nome} />
                    <S.Content>
                        <div className='content-text'>
                            <img
                                onClick={closeModal}
                                className='close'
                                src={closeIcon}
                                alt="Fechar pop-up"
                            />
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
                        <S.Button onClick={ addToCart }>Adicionar ao carrinho - {formataPreco(selectedMenu?.preco)}</S.Button>
                    </S.Content>
                </S.ModalContainer>
                <div className="overlay" onClick={closeModal}></div>
            </S.Modal>
        </>
    )
}

export default RestaurantMenuList