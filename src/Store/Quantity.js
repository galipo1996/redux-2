import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [], totalQuantity: 0, changed: false }
const Quantity = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    initialItems(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },
    addItem(state, action) {
      state.totalQuantity++
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItem(state, action) {
      state.totalQuantity--
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )
      state.changed = true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    },
  },
})

export const QuantityAction = Quantity.actions
export default Quantity.reducer
