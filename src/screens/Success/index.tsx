import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Bottom,
  SuccessContainer,
  Icon,
  Line,
  OrderInfo,
  ImageContainer,
} from './styles'
import ilustration from '../../assets/Illustration.png'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'

const paymentNames = {
  cc: 'Cartão de Crédito',
  cd: 'Cartão de Débto',
  d: 'Dinheiro',
}

interface StateProps {
  payment: 'cc' | 'cd' | 'd'
  street: string
  cep: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
  deliveryTime: string
}

export function Success() {
  const location = useLocation()
  const state = location.state as StateProps
  const theme = useTheme()

  if (!state) {
    return (
      <SuccessContainer>
        <h1>Parece que você está perdido :(</h1>
        <h2>
          <Link to="/" style={{ color: theme['purple-700'] }}>
            Voltar para o início
          </Link>
        </h2>
      </SuccessContainer>
    )
  }
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <Bottom>
        <OrderInfo>
          <Line>
            <Icon className="purple">
              <CurrencyDollar size={16} />
            </Icon>
            <p>
              Entrega em
              <strong>
                {state.street}, {state.number}
              </strong>
              <br />
              {state.district} - {state.city}, {state.uf}
            </p>
          </Line>
          <Line>
            <Icon>
              <Timer size={16} weight="fill" />
            </Icon>
            <p>
              Previsão de entrega <br />
              <strong>{state.deliveryTime}</strong>
            </p>
          </Line>
          <Line>
            <Icon className="dark">
              <MapPin size={16} weight="fill" />
            </Icon>
            <p>
              Pagamento na entrega <br />
              <strong>{paymentNames[state.payment]}</strong>
            </p>
          </Line>
        </OrderInfo>
        <ImageContainer>
          <img src={ilustration} />
        </ImageContainer>
      </Bottom>
    </SuccessContainer>
  )
}
