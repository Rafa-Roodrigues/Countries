import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.section`
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 0 1rem;

  display: grid;

  h2 {
    margin: 2rem 0;
    font-weight: 800;
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 701px) {
    grid-template-columns: 1fr 1fr;

    .section-info {
      padding: 3rem 0 0 3rem;
    }
  }
  
`;

export const ContainerImageCountry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    img {
      max-width: 400px;
    }
  }
`;

export const ContainerInfo = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: grid;
  gap: 1.5rem;

  p {
    margin-bottom: 0.875rem;
    font-weight: 700;
  }

  span {
    filter: brightness(0.8);
    font-weight: 400;
  }

  .box-border-countries {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      background-color: ${(props) => props.theme.colors.elements};
      box-shadow: ${(props) => props.theme.colors.shadowHeader};

      color: ${(props) => props.theme.colors.text};

      padding: 0.3125rem 1.25rem;
      margin-left: 1rem;
    }
  }

  @media (min-width: 550px) {
    grid-template-areas: "info general-info" "border-countries border-countries";

    .box-info {
      grid-area: info;
    }
  
    .box-general-info {
      grid-area: general-info ;
    }

    .box-border-countries {
      grid-area: border-countries;
    }
  }

  @media (min-width: 700px) and (max-width: 969px) {
    grid-template-areas:  "info " "general-info" "border-countries";

    .box-info {
      grid-area: info;
    }
  
    .box-general-info {
      grid-area: general-info ;
    }

    .box-border-countries {
      grid-area: border-countries;
    }
  }

  @media (min-width: 970px) {
    grid-template-areas:  "info general-info" "border-countries border-countries";
    font-size: 1.125rem;

    .box-info {
      grid-area: info;
    }
  
    .box-general-info {
      grid-area: general-info ;
    }

    .box-border-countries {
      grid-area: border-countries;
    }
  }
`;


export const ContainerBack = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2.5rem 1rem;


`;
export const ButtonBack = styled(Link)`

  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.elements};
  box-shadow: ${(props) => props.theme.colors.shadowHeader};
  border-radius: 5px;

  color: ${(props) => props.theme.colors.text};

  padding: 0.625rem;

  svg {
    margin-right: 8px;
  }
`;