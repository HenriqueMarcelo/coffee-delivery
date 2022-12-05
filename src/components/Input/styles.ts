import styled from 'styled-components'

interface InputContainerProps {
  grid?: 1 | 2 | 3 | 4
}

export const InputContainer = styled.input<InputContainerProps>`
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${({ theme }) => theme['gray-700']};
  padding: 0.75rem;

  background-color: ${({ theme }) => theme['gray-300']};

  margin-bottom: 1rem;

  width: 100%;

  flex: 1 1
    ${({ grid }) => {
      switch (grid) {
        case 1:
          return '60px'
        case 2:
          return '200px'
        case 3:
          return '276px'
        case 4:
          return '348px'
        default:
          return 'auto'
      }
    }};
`
