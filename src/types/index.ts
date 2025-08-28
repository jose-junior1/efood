export type MenuRestaurant = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export type MenuProps = {
    menu: MenuRestaurant[]
}

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

export type RestaurantsProps = {
    restaurants: Restaurants[]
}

export type CardRestaurantProps = {
    image: string
    title: string
    nota: number
    description: string
    star?: string
    infos: string
    about: string
    id: number
}

export type RestaurantMenuProps = {
    image: string
    title: string
    description: string
    details: string
    onOpenModal: () => void
}

export type TagProps = {
    children: string
}

export type CartState = {
    items: MenuRestaurant[]
    isOpen: boolean
}
