import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { coffees } from '../../coffees'
import { ItemsContext } from '../../contexts/ItemsContext'
import { NumberInput } from '../NumberInput'
import { ItemContainer, Controls, Name, Button, Price } from './styles'

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

  return (
    <ItemContainer>
      <div className="d-flex">
        <img src={`/coffees/${coffee.image}`} />
        <Controls>
          <Name>{coffee.name}</Name>
          <div className="d-flex">
            <NumberInput value={quantity} onChange={handleChangeQuantity} />
            <Button onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </Button>
          </div>
        </Controls>
      </div>
      <Price>R$ 9,90</Price>
    </ItemContainer>
  )
}
