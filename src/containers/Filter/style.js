import styled from "styled-components";
import Select from "react-select";
import Button from "../../components/Button";
import { colors } from "../../variables";

const { white, darkGrey } = colors;

export const FilterWrapper = styled.section`
  position: relative;
  padding: 36px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${white};
    z-index: -1;
  }
`;

export const FilterTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  line-height: 2.666rem;
  margin-bottom: 8px;
`;

export const FilterDescription = styled.p`
  font-size: 1.333rem;
  line-height: 2.333rem;
  margin-bottom: 24px;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 776px;
  margin: 0 auto;
`;

export const FilterInput = styled.input`
  border: 1px solid #D2D9E0;
  border-radius: 4px;
  font-size: 16px;
  line-height: 48px;
  padding: 0 12px;
  color: ${darkGrey};
  -moz-appearance: textfield;
  width: calc(100% / 3 - 8px);
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 12px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const FilterSelect = styled(Select)`
  width: calc(100% / 3 - 8px);
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const FilterButton = styled(Button)`
  width: calc(100% / 3 - 16px);
  margin-left: 8px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
`;