import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CartState = {
    items: [],
    isOpen: false,
    currentStep: 'cart'
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
        },
        goToDelivery: (state) => {
            state.currentStep = 'delivery'
        },
        goToPayment: (state) => {
            state.currentStep = 'payment'
        },
        backToCart: (state) => {
            state.currentStep = 'cart'
        },
        goToFinish: (state) => {
            state.currentStep = 'finish'
        },
        clear: (state) => {
            state.items = []
        }
    }
})

export const { add, open, close, remove, goToDelivery, goToPayment, backToCart, goToFinish, clear } = cartSlice.actions
export default cartSlice.reducer