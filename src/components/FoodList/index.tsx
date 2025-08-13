import FoodClass from "../../models/Foods"
import Food from "../Food"
import { Container, List } from "./styles"


export type Props = {
    foods: FoodClass[]
}

const FoodList =({ foods }: Props) => (
    <Container>
        <div className="container">
            <List>
            {foods.map((food) => (
                <Food
                    key={food.id}
                    title={food.title}
                    nota={food.nota}
                    image={food.image}
                    description={food.description}
                    infos={food.infos}
                    about={food.about}
                />
            ))}
            </List>
        </div>
        </Container>
)

export default FoodList