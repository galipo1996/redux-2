import { useEffect, Fragment } from 'react'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useSelector, useDispatch } from 'react-redux'
import Notification from './components/UI/Notification'
import { sendCartData, fetchingData } from './Store/DATA'

let firstTime = true

function App() {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.cart.show)
  const cart = useSelector((state) => state.quantity)
  const notif = useSelector((state) => state.cart.notif)
  useEffect(() => {
    dispatch(fetchingData())
  }, [dispatch])
  useEffect(() => {
    if (firstTime) {
      firstTime = false
      return
    }
    if (cart.changed) {
      dispatch(
        sendCartData({ items: cart.items, totalQuantity: cart.totalQuantity })
      )
    }
  }, [cart, dispatch])
  return (
    <Fragment>
      {notif && (
        <Notification
          status={notif.status}
          message={notif.message}
          title={notif.title}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  )
}

export default App
