import styled from 'styled-components'

//
export const CoffeesSection = styled.section`
  max-width: 1120px;
  justify-content: space-between;
  margin: 2rem auto;

  .title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${({ theme }) => theme['gray-800']};

    margin-bottom: 3.375rem;
  }
`

export const CoffeesContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  margin-bottom: 6rem;
`
