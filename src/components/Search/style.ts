import styled from "styled-components";

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.elements};
  border-radius: 0.25rem;
  box-shadow: ${(props) => props.theme.colors.shadow};

  max-width: 420px;
  width: 100%;

  padding: 0 1rem;

  display: flex;
  align-items: center;

  button {
    border: 0;
    background: transparent;

    display: flex;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme.colors.input 
      ? props.theme.colors.input
      : props.theme.colors.text
    };
  }

  input {
    flex: 1;

    height: 3.5rem;

    background-color: transparent;
    border: 0;
    outline: 0;

    color: ${(props) => props.theme.colors.input 
      ? props.theme.colors.input
      : props.theme.colors.text
    };
    font-size: 1rem;

    padding: 0 1.375rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.input 
        ? props.theme.colors.input
        : props.theme.colors.text
      };
    }
  }

  @media (max-width: 775px) {
    max-width: 100%;
  }
`;