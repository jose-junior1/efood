import { useState } from 'react'
import * as S from './styles'
import RestaurantMenu from "../RestaurantMenu"

import closeIcon from '../../assets/images/close.png'
import { MenuRestaurant } from '../../pages/Restaurant'

export interface ModalState {
    isVisible: boolean
}

export type MenuProps = {
    menu: MenuRestaurant[]
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
    

    return (
        <>
            <div className="container">
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
            </div>
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
                                    {selectedMenu?.porcao === '1 pessoa' ? (
                                        <span>
                                            Serve: {''} {selectedMenu?.porcao}
                                        </span>
                                    ) : (
                                        <span>
                                            Serve: de {''}
                                            {selectedMenu?.porcao}
                                        </span>
                                    )}
                                </p>
                            </div>
                            <button>Adicionar ao carrinho - {formataPreco(selectedMenu?.preco)}</button>
                        </S.Content>
                    </S.ModalContainer>
                    <div className="overlay" onClick={closeModal}></div>
                </S.Modal>
        </>
    )
}

export default RestaurantMenuList