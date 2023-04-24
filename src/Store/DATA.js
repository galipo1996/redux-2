import { cartAction } from './Carts'
import { QuantityAction } from './Quantity'
export const fetchingData = () => {
  return async (dispatch) => {
    const fetching = async () => {
      const response = await fetch(
        'https://react-practice-c645b-default-rtdb.firebaseio.com/order.json'
      )
      if (!response.ok) {
        throw new Error('Getting data went wrong!!!!')
      }
      const data = response.json()
      return data
    }
    try {
      const data = await fetching()
      dispatch({ type: QuantityAction.initialItems, payload: data })
    } catch (error) {
      dispatch({
        type: cartAction.changeState,
        payload: {
          status: 'error',
          message: 'Failed to send data!!!',
          title: 'FAILED',
        },
      })
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch({
      type: cartAction.changeState,
      payload: {
        status: 'pending...',
        message: 'studying data',
        title: 'fetching',
      },
    })
    const sendRequest = async () => {
      const Data = await fetch(
        'https://react-practice-c645b-default-rtdb.firebaseio.com/order.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      )
      if (!Data.ok) {
        throw new Error('fetching data went wrong!!!!')
      }
    }
    try {
      await sendRequest()
      dispatch({
        type: cartAction.changeState,
        payload: {
          status: 'success',
          message: 'success!!',
          title: 'data was sended',
        },
      })
    } catch (error) {
      dispatch({
        type: cartAction.changeState,
        payload: {
          status: 'error',
          message: 'Failed to send data!!!',
          title: 'FAILED',
        },
      })
    }
  }
}
