import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (customValue: number) => void
}

export function NumberInput({ onChange, value, ...rest }: NumberInputProps) {
  function handleSetCustomValue(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(Number(e.target.value))
    }
  }

  function handleDecreaseValue() {
    if (onChange) {
      onChange(Number(value) - 1)
    }
  }

  function handleIncreaseValue() {
    if (onChange) {
      onChange(Number(value) + 1)
    }
  }

  return (
    <InputContainer>
      <button type="button" onClick={handleDecreaseValue}>
        <Minus size={14} weight="fill" />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleSetCustomValue}
        {...rest}
      />
      <button type="button" onClick={handleIncreaseValue}>
        <Plus size={14} weight="fill" />
      </button>
    </InputContainer>
  )
}
