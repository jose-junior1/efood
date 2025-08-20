import MenuClass from "../../models/menu"

import * as S from './styles'
import RestaurantMenu from "../RestaurantMenu"

export type MenuProps = {
    menu: MenuClass[]
}

const RestaurantMenuList = ({menu}: MenuProps) => {
    return (
        <div>
            <div className="container">
                <S.List>
                    {menu.map((mn) => (
                        <RestaurantMenu
                            key={mn.id}
                            title={mn.title}
                            image={mn.image}
                            description={mn.description}
                            addCart={mn.addCart}
                        />
                    ))}
                </S.List>
            </div>
        </div>
    )
}

export default RestaurantMenuList