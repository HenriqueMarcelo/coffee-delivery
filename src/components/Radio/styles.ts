import styled from 'styled-components'

export const RadioContainer = styled.div`
  flex: 1;
  @media (max-width: 1090px) {
    flex: 1 0 100%;
  }
`

export const HiddenInput = styled.input`
  display: none;
  &:checked + label {
    background: ${({ theme }) => theme['purple-300']};
    border-color: ${({ theme }) => theme['purple-500']};
  }
`

export const Label = styled.label`
  width: 100%;

  border: 1px solid ${({ theme }) => theme['gray-400']};
  background: ${({ theme }) => theme['gray-400']};
  border-radius: 6px;
  padding: 1rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  color: ${({ theme }) => theme['gray-700']};

  user-select: none;
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;

  text-transform: uppercase;
  white-space: nowrap;

  cursor: pointer;

  transition: all 0.1s;

  &:hover {
    background: ${({ theme }) => theme['gray-500']};
    color: ${({ theme }) => theme['gray-800']};
  }
`
