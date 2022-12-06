import { NavLink, NavLinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface ButtonProps extends NavLinkProps {
  disabled?: boolean
}

export const Button = styled(NavLink)<ButtonProps>`
  border: none;
  background-color: ${({ theme }) => theme['yellow-300']};
  color: ${({ theme }) => theme['yellow-700']};
  border-radius: 0.375rem;

  padding: 0.5rem;
  line-height: 0;
  position: relative;

  transition: all 0.1s;
  cursor: pointer;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        pointer-events: none;
        filter: brightness(1) !important;
      `
    }
  }}

  &:hover {
    filter: brightness(1.03);
  }

  .quantity {
    background-color: ${({ theme }) => theme['yellow-700']};
    color: ${({ theme }) => theme.white};

    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 1000px;
    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;

    font-weight: 700;
    font-size: 0.75rem;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
  }
`
