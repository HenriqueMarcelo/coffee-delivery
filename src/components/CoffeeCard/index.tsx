import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { coffees } from '../../coffees'
import { ItemsContext } from '../../contexts/ItemsContext'
import { useNavigate } from 'react-router-dom'
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
  const { items, updateQuantity, addItem } = useContext(ItemsContext)
  // const [quantity, setQuantity] = useState(0)

  const navigate = useNavigate()

  function handleChangeQuantity(newQuantity: number) {
    updateQuantity(coffee.id, newQuantity)
    // setQuantity(newQuantity)
  }

  function handleBuyButton() {
    if (!quantity) {
      addItem(coffee.id)
    }
    navigate(`/checkout`)
  }

  const quantity = items.find((item) => item.id === coffee.id)?.quantity || 0

  console.log(quantity)
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
          <NumberInput value={quantity} onChange={handleChangeQuantity} />
          <Button onClick={handleBuyButton}>
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </div>
      </PriceLine>
    </CoffeeContainer>
  )
}
