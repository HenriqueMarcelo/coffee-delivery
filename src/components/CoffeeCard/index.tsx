import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
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

  const navigate = useNavigate()

  function handleChangeQuantity(newQuantity: number) {
    updateQuantity(coffee.id, newQuantity)
  }

  function handleBuyButton() {
    if (!quantity) {
      addItem(coffee.id)
    }
    navigate(`/checkout`)
  }

  const quantity = items.find((item) => item.id === coffee.id)?.quantity || 0

  const [symbol, price] = coffee.price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .split(' ')

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
          {symbol} <span>{price}</span>
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
