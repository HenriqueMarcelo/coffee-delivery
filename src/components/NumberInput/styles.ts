import styled from 'styled-components'

export const InputContainer = styled.div`
  display: inline-flex;
  background-color: ${({ theme }) => theme['gray-400']};

  border-radius: 6px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-700']};
  }

  button {
    color: ${({ theme }) => theme['purple-500']};
    font-weight: 400;
    padding: 0.538rem 0.5rem;
    background-color: transparent;
    border: none;

    border-radius: 6px;

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-700']};
    }

    &:focus {
      /* box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-500']}; */
      box-shadow: none;
    }

    &:last-child {
      padding-left: 0;
    }

    &:first-child {
      padding-right: 0;
    }
  }

  input {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    text-align: center;
    background-color: transparent;
    border: none;

    width: 2rem;

    &:focus {
      box-shadow: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
