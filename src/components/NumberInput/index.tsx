import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { InputContainer } from './styles'

interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (customValue: number) => void
}

export function NumberInput({ onChange, value, ...rest }: NumberInputProps) {
  const [customValue, setCustomValue] = useState(Number(value))

  function handleSetCustomValue(e: ChangeEvent<HTMLInputElement>) {
    setCustomValue(Number(e.target.value))
  }

  function handleDecreaseValue() {
    setCustomValue((state) => --state)
  }

  function handleIncreaseValue() {
    setCustomValue((state) => ++state)
  }

  useEffect(() => {
    if (onChange) {
      onChange(customValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customValue])

  return (
    <InputContainer>
      <button onClick={handleDecreaseValue}>
        <Minus size={14} weight="fill" />
      </button>
      <input
        type="number"
        value={customValue}
        onChange={handleSetCustomValue}
        {...rest}
      />
      <button onClick={handleIncreaseValue}>
        <Plus size={14} weight="fill" />
      </button>
    </InputContainer>
  )
}
