import styled from "styled-components";
import { colors } from "../../variables";

const { white, orange, yellow, darkGrey, darkBlue, lightBlack, darkBlack } = colors;

export const ProductWrapper = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background: ${white};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 16px;

  @media screen and (min-width: 801px) {
    width: calc((100% - 32px) / 3);
    &:nth-child(3n+3) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 800px) {
    width: calc((100% - 16px) / 2);
    &:nth-child(2n+2) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const LabelContainer = styled.div`
  height: 44px;
`;

export const LabelTop = styled.span`
  padding: 0 8px;
  line-height: 20px;
  color: ${orange};
  background: ${yellow};
  border-radius: 2px;
  font-weight: bold;
  width: fit-content;
  margin-bottom: 4px;
`;

export const LabelSales = styled.div`
  line-height: 20px;
  color: ${darkGrey};
  display: flex;
  margin-bottom: 16px;
`;

export const LabelSalesTitle = styled.p`
  padding: 0 12px 0 24px;
  color: ${darkBlue};
  font-weight: bold;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    ${({ icon }) => `background: url(${icon})`}
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 140px;
  height: 65px;
  object-fit: cover;
  object-position: center;
`;

export const Price = styled.p`
  color: ${lightBlack};
  font-weight: bold;
  font-size: 1.666rem;
`;

export const PriceSymbol = styled.span`
  margin-left: 4px;
  font-size: 1.166rem;
`;

export const List = styled.ul`
  flex: 1 0 auto;
  margin: 16px 0;
  list-style: none;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 12px;
  margin-bottom: 10px;
  color: ${darkBlack};
  line-height: 1.333rem;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 8px;
    height: 4px;
    border: 1px solid #252525;
    border-top: 0;
    border-right: 0;
    transform: rotate(-45deg);
  }
`;