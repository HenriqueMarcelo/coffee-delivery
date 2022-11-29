import { ShoppingCart } from 'phosphor-react'
import { Button } from './styles'

export function CartButton() {
  return (
    <Button>
      <ShoppingCart size={22} weight="fill" />
      <span className="quantity">5</span>
    </Button>
  )
}
