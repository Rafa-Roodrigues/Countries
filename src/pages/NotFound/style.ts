import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${(props) => props.theme.colors.text};

  padding-top: 3rem;

  h1 {
    font-size: 2.5rem;
  }
`;

export const Button = styled(Link)`
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: ${(props) => props.theme.colors.shadowHeader};

  padding: 0.5rem 1rem;
  margin-top: 1rem;

  border-radius: 5px;
`;