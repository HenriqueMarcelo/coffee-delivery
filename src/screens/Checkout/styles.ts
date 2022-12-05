import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: calc(1120px + 4rem);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  margin-bottom: 1rem;

  color: ${({ theme }) => theme['gray-800']};
`

export const LeftBlock = styled.div`
  flex: 1 1 640px;
`

export const RightBlock = styled.div`
  flex: 1 1 448px;
`

const Card = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['gray-200']};
`

export const FormCard = styled(Card)`
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const CoffeesCard = styled(Card)`
  border-radius: 6px 44px;
`

export const FormHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const FormTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${({ theme }) => theme['gray-800']};
  margin-bottom: 0.125rem;
`

export const FormSubtitle = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${({ theme }) => theme['gray-700']};
`

export const FormBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const NormalValue = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme['gray-700']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  margin-bottom: 0.75rem;

  & *:last-child {
    font-size: 1rem;
  }
`

export const TotalValue = styled(NormalValue)`
  color: ${({ theme }) => theme['gray-800']};

  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 1.25rem;

  margin-bottom: 1.5rem;

  & *:last-child {
    font-size: 1.25rem;
  }
`

export const Button = styled.button`
  width: 100%;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['yellow-500']};

  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-700']};
  }
`
