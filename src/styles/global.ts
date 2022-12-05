import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme['gray-100']};
        color: ${({ theme }) => theme['gray-700']};
        --webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-700']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3
    }

    .d-flex{
        display: flex;
    }

    .flex-wrap {
        flex-wrap: wrap;
    }

    .w-100 {
        width: 100%;
    }

    :root {
        --gap: 0px;
    }

    @media (max-width: 768px) {
        :root{
            --gap: 1rem;
        }
        
        html {
            font-size: 87.5%;
        }
    }
`
