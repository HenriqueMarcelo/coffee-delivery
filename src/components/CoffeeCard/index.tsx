import { coffees } from '../../coffees'
import {
  CoffeeContainer,
  Description,
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
    </CoffeeContainer>
  )
}
