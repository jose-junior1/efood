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

    return (
        <div className="container-loading">
            <h4>Carregando...</h4>
        </div>
    )
}

export default Home