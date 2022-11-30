import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'
import { CoffeesContainer, CoffeesSection } from './styles'

import { coffees } from '../../coffees'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CoffeesSection>
        <h2 className="title">Nossos cafés</h2>
        <CoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
        </CoffeesContainer>
      </CoffeesSection>
    </>
  )
}