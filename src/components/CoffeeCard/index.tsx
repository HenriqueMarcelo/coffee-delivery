import { ShoppingCart } from 'phosphor-react'
import { coffees } from '../../coffees'
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
        <div>
          <Button>
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </div>
      </PriceLine>
    </CoffeeContainer>
  )
}
