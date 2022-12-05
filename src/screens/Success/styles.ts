import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: calc(1120px + 4rem);
  justify-content: space-between;
  margin: 5rem auto;
  padding: 0 2rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${({ theme }) => theme['yellow-700']};
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({ theme }) => theme['gray-800']};
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const OrderInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme['purple-500']};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Line = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export const Icon = styled.div`
  color: ${({ theme }) => theme.white};
  padding: 8px;
  background: ${({ theme }) => theme['yellow-500']};
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.purple {
    background: ${({ theme }) => theme['purple-500']};
  }

  &.dark {
    background: ${({ theme }) => theme['yellow-700']};
  }
`

export const ImageContainer = styled.div`
  img {
    max-width: 100%;
  }
  @media (max-width: 1090px) {
    margin-top: 2rem;
  }
`
