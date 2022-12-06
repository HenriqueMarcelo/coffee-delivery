import { createContext, ReactNode, useEffect, useState } from 'react'

interface ItemSelected {
  id: string
  quantity: number
}

interface ItemContextType {
  items: ItemSelected[]
  addItem: (itemId: string) => void
  removeItem: (itemId: string) => void
  removeAllItems: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
}

interface ItemsContextProviderProps {
  children: ReactNode
}

export const ItemsContext = createContext({} as ItemContextType)

export function ItemsContextProvider({ children }: ItemsContextProviderProps) {
  const [items, setItems] = useState<ItemSelected[]>(
    JSON.parse(
      localStorage.getItem('@coffee-delivery:items-state-1.0.0') || '[]',
    ) || [],
  )

  useEffect(() => {
    console.log(items)
    const stateJSON = JSON.stringify(items)

    localStorage.setItem('@coffee-delivery:items-state-1.0.0', stateJSON)
  }, [items])

  function addItem(itemId: string) {
    setItems((state) => {
      const test = state.find((item) => item.id === itemId)
      if (test) {
        return state.map((item) => {
          if (item.id === itemId) {
            item.quantity++
            return item
          } else {
            return item
          }
        })
      }
      return [...state, { id: itemId, quantity: 1 }]
    })
  }

  function removeItem(itemId: string) {
    const test = items.find((item) => item.id === itemId)
    if (test) {
      if (test.quantity === 1) {
        removeAllItems(itemId)
      } else if (test.quantity > 1) {
        setItems((state) => {
          return state.map((item) => {
            if (item.id === itemId) {
              item.quantity--
              return item
            } else {
              return item
            }
          })
        })
      }
    }
  }

  function removeAllItems(itemId: string) {
    setItems((state) => {
      return state.filter((item) => item.id !== itemId)
    })
  }

  function updateQuantity(itemId: string, quantity: number) {
    if (quantity === 0) {
      removeAllItems(itemId)
    } else {
      const test = items.find((item) => item.id === itemId)
      if (test) {
        const newItems = items.map((item) => {
          if (item.id === itemId) {
            item.quantity = quantity
            return item
          } else {
            return item
          }
        })
        setItems(newItems)
      } else {
        setItems((state) => {
          return [...state, { id: itemId, quantity }]
        })
      }
    }
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        addItem,
        removeAllItems,
        removeItem,
        updateQuantity,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
