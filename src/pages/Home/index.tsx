import FoodList from "../../components/FoodList"
import FoodClass from "../../models/Foods"

import hiokiSushi from '../../assets/images/hioki-sushi.png'
import trattoria from '../../assets/images/trattoria.png'

const destaques: FoodClass[] = [
    {
        id: 1,
        title: "Hioki Sushi",
        nota: 4.9,
        image: hiokiSushi,
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        infos: ['Destaque da semana', 'Japonesa'],
        about: 'Saiba mais'
    },
    {
        id: 2,
        title: "La Dolce Vita Trattoria",
        nota: 4.5,
        image: trattoria,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        infos: ['Italiana'],
        about: 'Saiba mais'
    },
    {
        id: 3,
        title: "La Dolce Vita Trattoria",
        nota: 4.5,
        image: trattoria,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        infos: ['Italiana'],
        about: 'Saiba mais'
    },
    {
        id: 4,
        title: "Hioki Sushi",
        nota: 4.9,
        image: hiokiSushi,
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        infos: ['Destaque da semana', 'Japonesa'],
        about: 'Saiba mais'
    },
    {
        id: 5,
        title: "Hioki Sushi",
        nota: 4.9,
        image: hiokiSushi,
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        infos: ['Destaque da semana', 'Japonesa'],
        about: 'Saiba mais'
    },
    {
        id: 6,
        title: "La Dolce Vita Trattoria",
        nota: 4.5,
        image: trattoria,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        infos: ['Italiana'],
        about: 'Saiba mais'
    },
]

const Home = () => (
    <>
        <FoodList foods={destaques} />
    </>
)

export default Home