import * as S from "./styles"

const RestaurantMenu = ({ image, title, description, details, onOpenModal }: RestaurantMenuProps) => {
    return (
    <S.Card>
        <div>
            <img src={image} alt={title} />
            <S.ContainerInfos>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.ContainerInfos>
        </div>
        <S.ButtonCart onClick={onOpenModal} title={`Clique aqui para ver os detalhes de ${title}`}>{details}</S.ButtonCart>
    </S.Card>
)}

export default RestaurantMenu