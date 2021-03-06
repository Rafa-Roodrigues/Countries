import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  max-width: var(--max-width);
  width: 100%;

  margin: 0 auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media (max-width: 499px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 775px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (min-width: 1060px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;

export const Card = styled(Link)`
  max-width: 230px;
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  background-color: ${(props) => props.theme.colors.elements};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.colors.shadow};

  color: ${(props) => props.theme.colors.text};
  
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;

    max-height: 160px;
    display: block;
  }

  div {
    /* padding: 1rem 1.5rem 1.5rem 1.5rem; */
    padding: 1rem;
    font-size: 14px;

    /* background: purple; */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;

    p {
      margin-bottom: 0.25rem;
      font-weight: 700;
    }

    h3 {
      font-size: 1.0625rem;
      margin-bottom: 0.75rem;
    }

    span {
      filter: brightness(0.8);
      font-weight: 400;
      margin-left: 4px;
    }
    
  }
`;

export const ContainerSearchFilter = styled.section`
  max-width: var(--max-width);
  width: 100%;

  margin: 2.25rem auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 775px) {
    flex-direction: column;
  }
`;