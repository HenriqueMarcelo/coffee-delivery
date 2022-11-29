import styled from 'styled-components'
import background from '../../assets/background-banner.jpg'

export const Section = styled.section`
  width: 100%;
  background-image: url(${background});
  background-position: center;
`

export const Container = styled.article`
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5.875rem 0;
  gap: 3.5rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;

    margin: 0;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme['gray-900']};
  }

  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    margin: 0;
    margin-bottom: 4.125rem;
    color: ${({ theme }) => theme['gray-800']};
  }

  h6 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    margin: 0;
    color: ${({ theme }) => theme['gray-700']};

    margin-bottom: 1.25rem;
  }

  .row {
    display: flex;
    gap: 2.5rem;
  }
`

interface IconProps {
  color: 'yellow-700' | 'yellow-500' | 'gray-700' | 'purple-500'
}

export const Icon = styled.span<IconProps>`
  background-color: ${({ theme, color }) => theme[color]};

  color: ${({ theme }) => theme.white};
  padding: 0.5rem;

  border-radius: 1000px;
  line-height: 0;
  margin-right: 0.75rem;

  display: inline-block;
`
