import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

type AddToCartProps = {
  product: TProduct
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))

  return (
    <Input
      type="number"
      placeholder="Quantity"
      value={quantity}
      min={1}
      step={1}
      onChange={handleChange}
      action={{
        color: 'green',
        content: 'Add to Cart',
        icon: 'plus cart',
        // @TODO: FIXME :(
        onClick: () => {},
        loading: false,
        disabled: false,
      }}
    />
  )
}

export default AddToCart
