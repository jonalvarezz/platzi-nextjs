import React, { Dispatch, useContext, useReducer } from 'react'

export type CartItemType = TProduct & { quantity: number }

export type CartState = {
  [key: string]: CartItemType
}

export type CartAction = {
  type: 'add' | 'remove'
  item: TProduct
  quantity?: number
}

const defaultState = {} as CartState

const CartItemsContext = React.createContext(defaultState)
const CartDispatchContext = React.createContext((() => {}) as Dispatch<
  CartAction
>)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducers, defaultState)

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  )
}

function cartReducers(
  state: CartState,
  { item, type, quantity: qtyToAdd = 1 }: CartAction
) {
  const existingCartItem = state[item.id]

  switch (type) {
    case 'add': {
      if (existingCartItem != undefined) {
        const quantity = existingCartItem.quantity + qtyToAdd
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      }
    }

    case 'remove': {
      if (existingCartItem == undefined) {
        return state
      }

      const quantity = existingCartItem.quantity - 1
      if (quantity > 0) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      const newCartItems = { ...state }
      delete newCartItems[item.id]
      return newCartItems
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

const getCartSubTotal = (sum: number, item: CartItemType) => {
  sum += item.price * item.quantity
  return sum
}
const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */
export const useCart = () => {
  const itemsById = useContext(CartItemsContext)
  const items = Object.values(itemsById)
  // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const count = items.reduce(getCartCount, 0)
  const subTotal = items.reduce(getCartSubTotal, 0)

  return {
    items,
    itemsById,
    count,
    subTotal,
  }
}
export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext)

  const addToCart = (product: TProduct, quantity?: number) =>
    dispatch({
      type: 'add',
      item: product,
      quantity,
    })

  const removeFromCart = (product: TProduct) =>
    dispatch({
      type: 'remove',
      item: product,
    })

  return {
    addToCart,
    removeFromCart,
  }
}

export default CartProvider
