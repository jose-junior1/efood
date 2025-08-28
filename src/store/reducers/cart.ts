import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartState, MenuRestaurant } from "../../types"

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<MenuRestaurant>) => {
            const menu = state.items.find((item) => item.id === action.payload.id)
            if (!menu) {
                state.items.push(action.payload)
            } else {
                alert("Prato já adicionado ao carrinho!")
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer