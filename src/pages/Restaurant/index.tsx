import { useParams } from "react-router-dom"
import RestaurantMenuList from "../../components/RestaurantMenuList"
import { RestaurantCover } from "../../styles/styles"
import { useEffect, useState } from "react"
import { Restaurants } from "../Home"

export type MenuRestaurant = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

const Restaurant = () => {
    const {id} = useParams<{ id: string}>()
    const restaurantId = parseInt(id || '0')
    const [restaurant, setRestaurant] = useState<Restaurants | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((data: Restaurants[]) => {
            const found = data.find((r) => r.id === restaurantId)
        setRestaurant(found || null)
        })
        .finally(() => setLoading(false))
    }, [restaurantId])

    if (loading) {
        return <p>Carregando restaurante...</p>
    }

    if (!restaurant) {
        return <p>Restaurante não encontrado!</p>
    }

    return (
        <>
            <RestaurantCover style={{backgroundImage: `url(${restaurant?.capa})`}}>
                <div className="restaurant-infos">
                    <p className="tipo">
                        {restaurant?.tipo}
                    </p>
                    <h2 className="restaurant-name">
                        {restaurant?.titulo}
                    </h2>
                </div>
            </RestaurantCover>
            <RestaurantMenuList menu={restaurant.cardapio} />
        </>
    )
}

export default Restaurant