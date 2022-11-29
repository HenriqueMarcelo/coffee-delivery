import { CartButton } from '../CartButton'
import { LocaleButton } from '../LocaleButton'
import { Container } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} />
      <div className="buttons-container">
        <LocaleButton />
        <CartButton />
      </div>
    </Container>
  )
}
