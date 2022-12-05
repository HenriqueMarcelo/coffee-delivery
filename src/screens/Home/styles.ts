import styled from 'styled-components'

//
export const CoffeesSection = styled.section`
  max-width: calc(1120px + 4rem);
  justify-content: space-between;
  margin: 2rem auto;
  padding: 0 2rem;

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

export const FixFlexBox = styled.span`
  flex: 1 0 256px;
`
