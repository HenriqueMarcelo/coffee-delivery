import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  CheckoutContainer,
  CoffeesCard,
  FormCard,
  FormHeader,
  FormSubtitle,
  FormTitle,
  LeftBlock,
  RightBlock,
  Title,
} from './styles'

export function Checkout() {
  const theme = useTheme()
  return (
    <CheckoutContainer>
      <LeftBlock>
        <Title>Complete seu pedido</Title>
        <FormCard>
          <FormHeader>
            <MapPinLine size={22} color={theme['yellow-700']} />
            <div>
              <FormTitle>Endereço de Entrega</FormTitle>
              <FormSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </FormSubtitle>
            </div>
          </FormHeader>
        </FormCard>
        <FormCard>
          <FormHeader>
            <CurrencyDollar size={22} color={theme['purple-500']} />
            <div>
              <FormTitle>Pagamento</FormTitle>
              <FormSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </FormSubtitle>
            </div>
          </FormHeader>
        </FormCard>
      </LeftBlock>
      <RightBlock>
        <Title>Cafés selecionados</Title>
        <CoffeesCard>Lorem ipsum dolor sit amet consectetur.</CoffeesCard>
      </RightBlock>
    </CheckoutContainer>
  )
}
