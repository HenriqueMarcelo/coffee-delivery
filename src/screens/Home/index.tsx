import { Banner } from '../../components/Banner'
import { CoffeesContainer, CoffeesSection, FixFlexBox } from './styles'

import { coffees } from '../../coffees'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <>
      <Banner />
      <CoffeesSection>
        <h2 className="title">Nossos cafés</h2>
        <CoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
          <FixFlexBox />
          <FixFlexBox />
        </CoffeesContainer>
      </CoffeesSection>
    </>
  )
}
