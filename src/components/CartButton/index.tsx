import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ItemsContext } from '../../contexts/ItemsContext'
import { Button } from './styles'

export function CartButton() {
  const { items } = useContext(ItemsContext)
  return (
    <Button>
      <ShoppingCart size={22} weight="fill" />
      <span className="quantity">
        {items.reduce(
          (total, itemSelected) => (total += itemSelected.quantity),
          0,
        )}
      </span>
    </Button>
  )
}
