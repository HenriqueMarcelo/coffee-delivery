import { InputHTMLAttributes, ReactNode } from 'react'
import { HiddenInput, Label, RadioContainer } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export function Radio({ children, id, ...rest }: RadioProps) {
  return (
    <RadioContainer>
      <HiddenInput type="radio" id={id} {...rest} />
      <Label htmlFor={id}>{children}</Label>
    </RadioContainer>
  )
}
