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

export function Success() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
            </p>
          </Line>
          <Line>
            <Icon>
              <Timer size={16} weight="fill" />
            </Icon>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min </strong>
            </p>
          </Line>
          <Line>
            <Icon className="dark">
              <MapPin size={16} weight="fill" />
            </Icon>
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito </strong>
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
