import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ItemsContext } from '../../contexts/ItemsContext'
import { Button } from './styles'

export function CartButton() {
  const { items } = useContext(ItemsContext)
  const total = items.reduce(
    (total, itemSelected) => (total += itemSelected.quantity),
    0,
  )
  return (
    <Button to="/checkout" disabled={!total}>
      <ShoppingCart size={22} weight="fill" />
      {!!total && <span className="quantity">{total}</span>}
    </Button>
  )
}
