import { createSlice } from '@reduxjs/toolkit'

const initialState = { quantity: 1 }
const Quantity = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    addItem(state) {
      state.quantity++
    },
    removeItem(state) {
      state.quantity--
    },
  },
})

export const QuantityAction = Quantity.actions
export default Quantity.reducer
