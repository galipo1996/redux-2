import { createSlice } from '@reduxjs/toolkit'

const initialState = { show: false }

const Cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    Tooggle(state) {
      state.show = !state.show
    },
  },
})

export const cartAction = Cart.actions
export default Cart.reducer
