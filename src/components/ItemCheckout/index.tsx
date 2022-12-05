import { Trash } from 'phosphor-react'
import { NumberInput } from '../NumberInput'
import { ItemContainer, Controls, Name, Button, Price } from './styles'

export function ItemCheckout() {
  return (
    <ItemContainer>
      <div className="d-flex">
        <img src="/coffees/Expresso.png" />
        <Controls>
          <Name>Expresso Tradicional</Name>
          <div className="d-flex">
            <NumberInput />
            <Button>
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
