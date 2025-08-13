class FoodClass {
    id: number
    image: string
    title: string
    nota: number
    description: string
    infos: string[]
    about: string

    constructor(
        id: number,
        image: string,
        title: string,
        nota: number,
        description: string,
        infos: string[],
        about: string
    ) {
        this.id = id
        this.image = image
        this.title = title
        this.nota = nota
        this.description = description
        this.infos = infos
        this.about = about
    }
}

export default FoodClass