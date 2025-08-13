import RestaurantClass from "../../models/restaurant"
import Restaurant from "../Restaurant"
import { Container, List } from "./styles"


export type Props = {
    restaurants: RestaurantClass[]
}

const RestaurantList =({ restaurants }: Props) => (
    <Container>
        <div className="container">
            <List>
            {restaurants.map((rest) => (
                <Restaurant
                    key={rest.id}
                    title={rest.title}
                    nota={rest.nota}
                    image={rest.image}
                    description={rest.description}
                    infos={rest.infos}
                    about={rest.about}
                />
            ))}
            </List>
        </div>
        </Container>
)

export default RestaurantList