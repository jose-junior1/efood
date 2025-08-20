import * as S from "./styles"

type Props = {
    image: string
    title: string
    description: string
    addCart: string
}

const RestaurantMenu = ({ image, title, description, addCart }: Props) => (
    <S.Card>
        <img src={image} alt={title} />
        <S.ContainerInfos>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.ButtonCart>{addCart}</S.ButtonCart>
        </S.ContainerInfos>
    </S.Card>
)

export default RestaurantMenu