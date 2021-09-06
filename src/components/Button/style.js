import styled from "styled-components";
import { colors } from "../../variables";

const { white, green } = colors;

export const ButtonWrapper = styled.button`
  width: 100%;
  background: ${green};
  text-align: center;
  color: ${white};
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  line-height: 48px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
`;
