import { useParams } from "react-router-dom"
import RestaurantMenuList from "../../components/RestaurantMenuList"
import { cardapio } from "../../mocks/cardapio"
import { RestaurantCover } from "../../styles/restaurants"
import { destaques } from "../../mocks/restaurantes"

const Restaurant = () => {
    const {id} = useParams<{ id: string}>()
    const restaurantId = parseInt(id || '0')

    const currentRestaurant = destaques.find((r) => r.id === restaurantId)

    if (!currentRestaurant) {
        return <div>Restaurante não encontrado!</div>
    }

    return (
        <>
            <RestaurantCover image={currentRestaurant.image}>
                <div className="restaurant-infos">
                    <p className="tipo">
                        {currentRestaurant.infos}
                    </p>
                    <h2 className="restaurant-name">
                        {currentRestaurant.title}
                    </h2>
                </div>
            </RestaurantCover>
            <RestaurantMenuList menu={cardapio} />
        </>
    )
}

export default Restaurant