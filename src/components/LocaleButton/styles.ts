import styled from 'styled-components'

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;

  border: none;
  background-color: ${({ theme }) => theme['purple-300']};
  color: ${({ theme }) => theme['purple-700']};
  border-radius: 6px;

  padding: 0.5rem;
  line-height: 0;

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    filter: brightness(1.03);
  }

  svg {
    margin-right: 0.25rem;
  }
`
