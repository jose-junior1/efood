import { useParams } from "react-router-dom"

import { useGetRestaurantMenuQuery } from "../../services/api"

import RestaurantMenuList from "../../components/RestaurantMenuList"

import { RestaurantCover } from "../../styles/styles"
import Loader from "../../components/Loader"

const Restaurant = () => {
    const {id} = useParams<{ id: string}>()
    const restaurantId = parseInt(id || '0')
    
    const { data: restaurant, isLoading} = useGetRestaurantMenuQuery(restaurantId)

    if (!restaurant) {
        return <Loader />
    }

    return (
        <>
            <RestaurantCover style={{backgroundImage: `url(${restaurant.capa})`}}>
                <div className="restaurant-infos">
                    <p className="tipo">
                        {restaurant.tipo}
                    </p>
                    <h1 className="restaurant-name">
                        {restaurant.titulo}
                    </h1>
                </div>
            </RestaurantCover>
            <RestaurantMenuList isLoading={isLoading} menu={restaurant.cardapio} />
        </>
    )

}

export default Restaurant