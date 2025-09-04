import Tag from "../Tag"

import starIcon from '../../assets/images/estrela.png'

import * as S from "./styles"

const Restaurant = ({ image, title, nota, description, star, infos, about, id }: CardRestaurantProps) => (
    <S.Card>
        <img src={image} alt={title} />
        <S.Infos>
            <Tag>
                {infos}
            </Tag>
            {star && (
                <Tag>
                    {star}
                </Tag>
            )}
        </S.Infos>
        <S.ContainerInfos>
            <div>
                <div className="capa">
                    <S.Title>{title}</S.Title>
                    <div className="nota">
                        {nota}
                        <img src={starIcon} alt="Estrela" />
                    </div>
                </div>
                <S.Description>{description}</S.Description>
            </div>
            <S.ButtonAbout to={`/restaurant/${id}`} title={`Clique aqui para ver o cardápio de ${title}`}>{about}</S.ButtonAbout>
        </S.ContainerInfos>
    </S.Card>
)

export default Restaurant