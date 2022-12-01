import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  grid?: 1 | 2 | 3 | 4
}

export function Input({ ...rest }: InputProps) {
  return <InputContainer {...rest} />
}
