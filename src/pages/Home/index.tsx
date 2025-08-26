import { useEffect, useState } from "react"
import RestaurantList from "../../components/RestaurantList"
import { MenuRestaurant } from "../Restaurant"

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
    const [restaurantes, setRestaurantes] = useState<Restaurants[]>([])

    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) => setRestaurantes(res))
    }, [])
    return(
        <>
            <RestaurantList restaurants={restaurantes} />
        </>
    )
}

export default Home