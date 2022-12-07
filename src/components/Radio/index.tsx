/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { HiddenInput, Label, RadioContainer } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ children, id, ...rest }, ref) => {
    return (
      <RadioContainer>
        <HiddenInput type="radio" id={id} {...rest} ref={ref} />
        <Label htmlFor={id}>{children}</Label>
      </RadioContainer>
    )
  },
)
