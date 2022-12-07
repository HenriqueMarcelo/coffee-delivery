/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  grid?: 1 | 2 | 3 | 4
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => <InputContainer ref={ref} {...rest} />,
)
