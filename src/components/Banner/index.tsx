import { Container, Icon, Section } from './style'
import bannerImage from '../../assets/banner-image.png'
import { ShoppingCart, Coffee, Package, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <Section>
      <Container>
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h4>
          <div className="row">
            <div>
              <h6>
                <Icon color="yellow-700">
                  <ShoppingCart size={13} weight="fill" />
                </Icon>
                Compra simples e segura
              </h6>
              <h6>
                <Icon color="yellow-500">
                  <Timer size={13} weight="fill" />
                </Icon>
                Entrega rápida e rastreada
              </h6>
            </div>
            <div>
              <h6>
                <Icon color="gray-700">
                  <Package size={13} weight="fill" />
                </Icon>
                Embalagem mantém o café intacto
              </h6>
              <h6>
                <Icon color="purple-500">
                  <Coffee size={13} weight="fill" />
                </Icon>
                O café chega fresquinho até você
              </h6>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImage} />
        </div>
      </Container>
    </Section>
  )
}
