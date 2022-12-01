import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;

  margin-bottom: 1rem;

  color: ${({ theme }) => theme['gray-800']};
`

export const LeftBlock = styled.div`
  width: 640px;
`

export const RightBlock = styled.div`
  width: 448px;
`

const Card = styled.div`
  padding: 40px;
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
  font-size: 16px;
  line-height: 130%;

  color: ${({ theme }) => theme['gray-800']};
  margin-bottom: 0.125rem;
`

export const FormSubtitle = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${({ theme }) => theme['gray-700']};
`

export const FormBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`
