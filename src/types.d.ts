declare type MenuRestaurant = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

declare type MenuProps = {
    menu: MenuRestaurant[]
    isLoading: boolean
}

declare type Restaurants = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: MenuRestaurant[]
}

declare type RestaurantsProps = {
    isLoading: boolean
    restaurants: Restaurants[]
}

declare type CardRestaurantProps = {
    image: string
    title: string
    nota: number
    description: string
    star?: string
    infos: string
    about: string
    id: number
}

declare type RestaurantMenuProps = {
    image: string
    title: string
    description: string
    details: string
    onOpenModal: () => void
}

declare type TagProps = {
    children: string
}

declare type CartState = {
    items: MenuRestaurant[]
    isOpen: boolean
    currentStep: 'cart' | 'delivery' | 'payment' | 'finish'
}

declare type Product = {
    id: number
    price: number
}

declare type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
    }
    address: {
        description: string
        city: string
        zipCode: string
        number: number
        complement?: string
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

declare type PurchaseResponse = {
    orderId: string
}