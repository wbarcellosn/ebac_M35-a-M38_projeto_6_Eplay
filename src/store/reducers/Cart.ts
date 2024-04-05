import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type cartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: cartState = {
  items: [],
  isOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    addToCart: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já foi adicionado ao carrinho.')
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addToCart, openCart, closeCart, removeFromCart } =
  cartSlice.actions
export default cartSlice.reducer
