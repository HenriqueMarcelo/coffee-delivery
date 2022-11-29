import { MapPin } from 'phosphor-react'
import { Button } from './styles'

export function LocaleButton() {
  return (
    <Button>
      <MapPin size={22} weight="fill" /> Nova Friburgo, RJ
    </Button>
  )
}
