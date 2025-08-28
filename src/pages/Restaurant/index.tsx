import { useParams } from "react-router-dom"
import RestaurantMenuList from "../../components/RestaurantMenuList"
import { RestaurantCover } from "../../styles/styles"
import { useGetRestaurantMenuQuery } from "../../services/api"

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
                        <h2 className="restaurant-name">
                            {restaurant.titulo}
                        </h2>
                    </div>
                </RestaurantCover>
                <RestaurantMenuList menu={restaurant.cardapio} />
            </>
        )
    }

    return <h4>Carregando restaurante...</h4>

}

export default Restaurant