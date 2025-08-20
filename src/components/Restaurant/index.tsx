// import { Link } from "react-router-dom"
import Tag from "../Tag"
import { ButtonAbout, Card, ContainerInfos, Description, Infos, Title } from "./styles"

import starIcon from '../../assets/images/estrela.png'


type Props = {
    image: string
    title: string
    nota: number
    description: string
    star?: string
    infos: string
    about: string
    id: number
}

const Restaurant = ({ image, title, nota, description, star, infos, about, id }: Props) => (
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