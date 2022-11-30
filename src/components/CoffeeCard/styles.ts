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
