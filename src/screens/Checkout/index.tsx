import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Input } from '../../components/Input'
import { ItemCheckout } from '../../components/ItemCheckout'
import { Radio } from '../../components/Radio'
import {
  Button,
  CheckoutContainer,
  CoffeesCard,
  FormBody,
  FormCard,
  FormHeader,
  FormSubtitle,
  FormTitle,
  LeftBlock,
  NormalValue,
  RightBlock,
  Title,
  TotalValue,
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
          <FormBody>
            <div className="w-100">
              <Input placeholder="CEP" grid={2} />
            </div>
            <Input placeholder="Rua" value="Rua das Cabras" />
            <Input placeholder="Número" grid={2} />
            <Input placeholder="Complemento (Opcional)" grid={4} />
            <Input placeholder="Bairro" grid={2} />
            <Input placeholder="Cidade" grid={3} />
            <Input placeholder="UF" grid={1} />
          </FormBody>
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
          <FormBody>
            <Radio name="payment" id="cc">
              <CreditCard size={16} color={theme['purple-500']} />
              Cartão de Crédito
            </Radio>
            <Radio name="payment" id="cd">
              <Bank size={16} color={theme['purple-500']} />
              Cartão de Débto
            </Radio>
            <Radio name="payment" id="d">
              <Money size={16} color={theme['purple-500']} />
              Dinheiro
            </Radio>
          </FormBody>
        </FormCard>
      </LeftBlock>

      <RightBlock>
        <Title>Cafés selecionados</Title>
        <CoffeesCard>
          <ItemCheckout />
          <ItemCheckout />
          <NormalValue>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </NormalValue>
          <NormalValue>
            <span>Entrega</span>
            <span>R$ 9,50</span>
          </NormalValue>
          <TotalValue>
            <span>Total</span>
            <span>R$ 9,50</span>
          </TotalValue>
          <Button>Confirmar Pedido</Button>
        </CoffeesCard>
      </RightBlock>
    </CheckoutContainer>
  )
}
