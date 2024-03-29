import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { coffees } from '../../coffees'
import { Input } from '../../components/Input'
import { ItemCheckout } from '../../components/ItemCheckout'
import { Radio } from '../../components/Radio'
import { ItemsContext } from '../../contexts/ItemsContext'
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
import { useNavigate } from 'react-router-dom'

// todo: Use CEP to get info from some API

export function Checkout() {
  const navigate = useNavigate()
  const theme = useTheme()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      payment: '',
      street: '',
      cep: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const handleCreateOrder = (data: any) => {
    // todo: improve this validation
    if (!data.payment) {
      alert('Selecione um meio de pagamento')
      return
    }

    // todo: calculate this
    const deliveryTime = '20 min - 30 min'
    const order = {
      ...data,
      deliveryTime,
    }
    reset()
    deleteEverything()
    navigate(`/success`, {
      state: order,
    })
  }

  const { items, deleteEverything } = useContext(ItemsContext)

  const price = items.reduce((accumulator, item) => {
    const coffee = coffees.find((i) => i.id === item.id)
    if (coffee) {
      return accumulator + coffee.price * item.quantity
    }
    return accumulator
  }, 0)
  const deliveryFee = 9.9
  const total = price + deliveryFee

  const priceString = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const deliveryFeeString = deliveryFee.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalString = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateOrder)}>
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
              <Input placeholder="CEP" grid={2} {...register('cep')} required />
            </div>
            <Input placeholder="Rua" {...register('street')} required />
            <Input
              placeholder="Número"
              grid={2}
              {...register('number')}
              required
            />
            <Input
              placeholder="Complemento (Opcional)"
              grid={4}
              {...register('complement')}
            />
            <Input
              placeholder="Bairro"
              grid={2}
              {...register('district')}
              required
            />
            <Input
              placeholder="Cidade"
              grid={3}
              {...register('city')}
              required
            />
            <Input placeholder="UF" grid={1} {...register('uf')} required />
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
            <Radio id="cc" value="cc" {...register('payment')}>
              <CreditCard size={16} color={theme['purple-500']} />
              Cartão de Crédito
            </Radio>
            <Radio id="cd" value="cd" {...register('payment')}>
              <Bank size={16} color={theme['purple-500']} />
              Cartão de Débto
            </Radio>
            <Radio id="d" value="d" {...register('payment')}>
              <Money size={16} color={theme['purple-500']} />
              Dinheiro
            </Radio>
          </FormBody>
        </FormCard>
      </LeftBlock>

      <RightBlock>
        <Title>Cafés selecionados</Title>
        <CoffeesCard>
          {items.map((item) => {
            const c = coffees.find((coffe) => coffe.id === item.id)
            if (c) {
              return <ItemCheckout coffee={c} key={c.id} />
            }
            return null
          })}
          <NormalValue>
            <span>Total de itens</span>
            <span>{priceString}</span>
          </NormalValue>
          <NormalValue>
            <span>Entrega</span>
            <span>{deliveryFeeString}</span>
          </NormalValue>
          <TotalValue>
            <span>Total</span>
            <span>{totalString}</span>
          </TotalValue>
          <Button>Confirmar Pedido</Button>
        </CoffeesCard>
      </RightBlock>
    </CheckoutContainer>
  )
}
