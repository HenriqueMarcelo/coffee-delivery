import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { coffees } from '../../coffees'
import { ItemsContext } from '../../contexts/ItemsContext'
import { NumberInput } from '../NumberInput'
import {
  Button,
  CoffeeContainer,
  Description,
  Price,
  PriceLine,
  Tag,
  TagContainer,
  Title,
} from './styles'

interface CoffeeProps {
  coffee: typeof coffees[0]
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { updateQuantity } = useContext(ItemsContext)

  function handleChangeQuantity(newQuantity: number) {
    updateQuantity(coffee.id, newQuantity)
  }

  return (
    <CoffeeContainer>
      <img src={`/coffees/${coffee.image}`} />
      <TagContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
      <Title>{coffee.name}</Title>
      <Description>{coffee.description}</Description>
      <PriceLine>
        <Price>
          RS <span>9,90</span>
        </Price>
        <div className="d-flex">
          <NumberInput value={0} onChange={handleChangeQuantity} />
          <Button>
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </div>
      </PriceLine>
    </CoffeeContainer>
  )
}
