import ProductItem from './ProductItem'
import classes from './Products.module.css'

const Products = (props) => {
  const DATA = [
    {
      id: 1,
      title: 'book 1',
      description: 'This is a first product - amazing!',
      price: 6,
    },
    {
      id: 2,
      title: 'book 2',
      description: 'This is a second product - amazing!',
      price: 5,
    },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DATA.map((item) => {
          return (
            <ProductItem
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Products
