import { useParams } from "react-router-dom"

import { useGetRestaurantMenuQuery } from "../../services/api"

import RestaurantMenuList from "../../components/RestaurantMenuList"

import { RestaurantCover } from "../../styles/styles"

const Restaurant = () => {
    const {id} = useParams<{ id: string}>()
    const restaurantId = parseInt(id || '0')
    
    const { data: restaurant} = useGetRestaurantMenuQuery(restaurantId)

    if (restaurant) {
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
                <RestaurantMenuList menu={restaurant.cardapio} />
            </>
        )
    }

    return (
        <div className="container-loading">
            <h4>Carregando...</h4>
        </div>
    )

}

export default Restaurant