import Loader from "../Loader"
import Restaurant from "../Restaurant"

import * as S from "./styles"

const RestaurantList = ({ restaurants, isLoading }: RestaurantsProps) => {

    if (isLoading) {
        return <Loader />
    }

    return (
        <S.Container>
            <div className="container">
                <S.List>
                    {restaurants.map((rest) => (
                        <Restaurant
                            key={rest.id}
                            title={rest.titulo}
                            nota={rest.avaliacao}
                            image={rest.capa}
                            description={rest.descricao}
                            star={rest.destacado ? 'Em destaque' : undefined}
                            infos={rest.tipo}
                            about='Saiba mais'
                            id={rest.id}
                        />
                    ))}
                </S.List>
            </div>
        </S.Container>
    )
}

export default RestaurantList