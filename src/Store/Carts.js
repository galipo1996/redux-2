import { createSlice } from '@reduxjs/toolkit'

const initialState = { show: false, notif: null }

const Cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    Tooggle(state) {
      state.show = !state.show
    },
    changeState(state, action) {
      state.notif = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      }
    },
  },
})

export const cartAction = Cart.actions
export default Cart.reducer
