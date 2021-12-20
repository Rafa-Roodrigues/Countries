import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: ${(props) => props.theme.colors.shadowHeader};
`;

export const Content = styled.div`
  max-width: var(--max-width);
  width: 100%;

  margin: 0 auto;
  padding: 1.5rem 1rem;

  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme.colors.text};

  h2 {
    font-size: 1.25rem;
  }

  button {
    background-color: transparent;
    border: 0;

    color: ${(props) => props.theme.colors.text};
    font-size: 0.9375rem;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;