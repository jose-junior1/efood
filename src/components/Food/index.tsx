// import { Link } from "react-router-dom"
import Tag from "../Tag"
import { ButtonAbout, Card, ContainerInfos, Description, Infos, Title } from "./styles"

import star from '../../assets/images/estrela.png'

type Props = {
    image: string
    title: string
    nota: number
    description: string
    infos: string[]
    about: string
}

const Food = ({ image, title, nota, description, infos, about }: Props) => (
    <Card>
        <img src={image} alt={title} />
        <Infos>
            {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
            ))}
        </Infos>
        <ContainerInfos>
            <div>
                <Title>{title}</Title>
                <div className="nota">
                    {nota}
                    <img src={star} alt="Estrela" />
                </div>
            </div>
            <Description>{description}</Description>
            <ButtonAbout to='/'>{about}</ButtonAbout>
        </ContainerInfos>
    </Card>
)

export default Food