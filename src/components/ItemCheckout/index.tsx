import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { coffees } from '../../coffees'
import { ItemsContext } from '../../contexts/ItemsContext'
import { NumberInput } from '../NumberInput'
import { ItemContainer, Controls, Name, Button, Price } from './styles'

const publicURL = import.meta.env.VITE_PUBLIC_URL || '/'

interface CoffeeProps {
  coffee: typeof coffees[0]
}

export function ItemCheckout({ coffee }: CoffeeProps) {
  const { items, updateQuantity, removeAllItems } = useContext(ItemsContext)

  function handleChangeQuantity(newQuantity: number) {
    updateQuantity(coffee.id, newQuantity)
  }

  function handleRemove() {
    removeAllItems(coffee.id)
  }

  const quantity = items.find((item) => item.id === coffee.id)?.quantity || 0

  const total = coffee.price * quantity

  const totalString = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <ItemContainer>
      <div className="d-flex">
        <img src={`${publicURL}coffees/${coffee.image}`} />
        <Controls>
          <Name>{coffee.name}</Name>
          <div className="d-flex">
            <NumberInput value={quantity} onChange={handleChangeQuantity} />
            <Button type="button" onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </Button>
          </div>
        </Controls>
      </div>
      <Price>{totalString}</Price>
    </ItemContainer>
  )
}
