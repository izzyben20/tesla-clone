import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Rubik", sans-serif;
        color: #393c41;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    @keyframes animateDown {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }

        40% {
            transform: translateY(5px);
        }

        60% {
            transform: translateY(3px);
        }
    }
`;

export default GlobalStyles;