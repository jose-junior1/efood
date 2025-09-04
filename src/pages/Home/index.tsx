import { useGetOnRestaurantsQuery } from "../../services/api"

import RestaurantList from "../../components/RestaurantList"
import Loader from "../../components/Loader"

const Home = () => {
    const { data: restaurantes, isLoading } = useGetOnRestaurantsQuery()

    if(!restaurantes) {
        return <Loader />
    }

    return(
        <>
            <RestaurantList isLoading={isLoading} restaurants={restaurantes} />
        </>
    )
}

export default Home