import styled from 'styled-components'

export const ItemContainer = styled.div`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-400']};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const Controls = styled.div``

export const Name = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${({ theme }) => theme['gray-800']};

  margin-bottom: 0.5rem;
`

export const Button = styled.button`
  color: ${({ theme }) => theme['gray-700']};
  font-weight: 400;
  padding: 0.538rem 0.5rem;
  background-color: ${({ theme }) => theme['gray-400']};
  border-radius: 6px;
  border: none;

  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-left: 0.5rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
    color: ${({ theme }) => theme['gray-800']};
    svg {
      color: ${({ theme }) => theme['purple-700']};
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-700']};
  }

  svg {
    color: ${({ theme }) => theme['purple-500']};
    margin-right: 0.25rem;
  }
`

export const Price = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;

  white-space: nowrap;

  color: ${({ theme }) => theme['gray-700']};
`
