import { useGetOnRestaurantsQuery } from "../../services/api"

import RestaurantList from "../../components/RestaurantList"

const Home = () => {
    const { data: restaurantes } = useGetOnRestaurantsQuery()

    if (restaurantes) {
        return(
            <>
                <RestaurantList restaurants={restaurantes} />
            </>
        )
    }

    return <h4>Carregando...</h4>
}

export default Home