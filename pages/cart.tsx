import React from 'react'
import { Divider } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'
import CartItemList from '@components/CartItemList/CartItemList'
import CartSummary from '@components/CartSummary/CartSummary'

const CartPage = () => {
  // @TODO: FIXME :(
  const count = 0
  const removeFromCart = () => {}

  return (
    <Layout>
      <CartItemList items={[]} removeFromCart={removeFromCart} />
      <Divider />
      <CartSummary totalAmount={count} />
    </Layout>
  )
}

export default CartPage
