import RestaurantList from "../../components/RestaurantList"
import { destaques } from "../../mocks/restaurantes"

const Home = () => (
    <>
        <RestaurantList restaurants={destaques} />
    </>
)

export default Home