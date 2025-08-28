import Tag from "../Tag"
import { ButtonAbout, Card, ContainerInfos, Description, Infos, Title } from "./styles"

import starIcon from '../../assets/images/estrela.png'
import { CardRestaurantProps } from "../../types"

const Restaurant = ({ image, title, nota, description, star, infos, about, id }: CardRestaurantProps) => (
    <Card>
        <img src={image} alt={title} />
        <Infos>
            <Tag>
                {infos}
            </Tag>
            {star && (
                <Tag>
                    {star}
                </Tag>
            )}
        </Infos>
        <ContainerInfos>
            <div>
                <Title>{title}</Title>
                <div className="nota">
                    {nota}
                    <img src={starIcon} alt="Estrela" />
                </div>
            </div>
            <Description>{description}</Description>
            <ButtonAbout to={`/restaurant/${id}`}>{about}</ButtonAbout>
        </ContainerInfos>
    </Card>
)

export default Restaurant