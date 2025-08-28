import RestaurantList from "../../components/RestaurantList"
import { MenuRestaurant } from "../../types"

import { useGetOnRestaurantsQuery } from "../../services/api"

export type Restaurants = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: MenuRestaurant[]
}

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