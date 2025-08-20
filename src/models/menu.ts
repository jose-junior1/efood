class MenuClass {
    id: number
    image: string
    title: string
    description: string
    addCart: string

    constructor(
        id: number,
        image: string,
        title: string,
        description: string,
        addCart: string
    ) {
        this.id = id
        this.image = image
        this.title = title
        this.description = description
        this.addCart = addCart
    }
}

export default MenuClass