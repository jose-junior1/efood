import { RestaurantMenuProps } from "../../types"
import * as S from "./styles"

export interface ModalState {
    isVisible: boolean
}

const RestaurantMenu = ({ image, title, description, details, onOpenModal }: RestaurantMenuProps) => {
    return (
    <S.Card>
        <img src={image} alt={title} />
        <S.ContainerInfos>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.ContainerInfos>
        <S.ButtonCart onClick={onOpenModal}>{details}</S.ButtonCart>
    </S.Card>
)}

export default RestaurantMenu