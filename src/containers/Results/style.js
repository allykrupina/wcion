import styled from 'styled-components';
import { colors } from "../../variables";

const { white, lightGrey, lightBlue, red } = colors;

export const ResultWrapper = styled.section`
  position: relative;
  padding: 12px 14px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  &:before {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: ${lightGrey};
    z-index: -1;
  }
`;

export const ResultCount = styled.p`
  padding: 12px 16px;
  background:  ${({ active }) => active ? lightBlue : red };
  color: ${white};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.333rem;
  letter-spacing: 0.01rem;
  border-radius: 8px 8px 0 0;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;