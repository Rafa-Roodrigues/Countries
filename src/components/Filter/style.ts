import styled from "styled-components";

export const Select = styled.select`
  max-width: 170px;
  width: 100%;
  min-height: 3.5rem;

  background-color: ${(props) => props.theme.colors.elements};
  border: 0;
  border-radius: 0.25rem;
  box-shadow: ${(props) => props.theme.colors.shadow};

  color: ${(props) => props.theme.colors.text};
  font-size: 0.9375rem;

  padding: 0 1rem;

  @media (max-width: 775px) {
    margin-top: 2.25rem;
  }
`;