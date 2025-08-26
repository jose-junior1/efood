import { Restaurants } from "../../pages/Home"
import Restaurant from "../Restaurant"
import { Container, List } from "./styles"


export type Props = {
    restaurants: Restaurants[]
}

const RestaurantList =({ restaurants }: Props) => {

    return(
    <Container>
        <div className="container">
            <List>
            {restaurants.map((rest) => (
                <Restaurant
                    key={rest.id}
                    title={rest.titulo}
                    nota={rest.avaliacao}
                    image={rest.capa}
                    description={rest.descricao}
                    star={rest.destacado ? 'Em destaque' : undefined}
                    infos={rest.tipo}
                    about='Saiba mais'
                    id={rest.id}
                />
            ))}
            </List>
        </div>
    </Container>
)}

export default RestaurantList