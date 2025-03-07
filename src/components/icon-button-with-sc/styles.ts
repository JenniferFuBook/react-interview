import styled from 'styled-components';

export const Button = styled.button` // Define the styled button component
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Img = styled.img` // Define the styled img component
  width: 20px;
  height: auto;
`;