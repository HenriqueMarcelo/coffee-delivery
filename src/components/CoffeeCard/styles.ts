import styled from 'styled-components'

export const CoffeeContainer = styled.article`
  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 0.375rem 2.25rem;
  margin-bottom: 2.5rem;
  padding: 0 1.25rem;

  text-align: center;
  flex: 0 0 256px;

  img {
    margin-bottom: 0.75rem;
    margin-top: -1.25rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  margin-bottom: 1rem;
`

export const Tag = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;

  color: ${({ theme }) => theme['yellow-700']};
  background-color: ${({ theme }) => theme['yellow-300']};

  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme['gray-800']};
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${({ theme }) => theme['gray-600']};

  padding-bottom: 2.062rem;
`

export const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const Price = styled.div`
  color: ${({ theme }) => theme['gray-700']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  white-space: nowrap;

  span {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
  }
`

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme['purple-700']};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;

  padding: 0.5rem;
  line-height: 0;
  position: relative;

  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }
`
