import { CartButton } from '../CartButton'
import { LocaleButton } from '../LocaleButton'
import { Container } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} />
      </Link>
      <div className="buttons-container">
        <LocaleButton />
        <CartButton />
      </div>
    </Container>
  )
}
