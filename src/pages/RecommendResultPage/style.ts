import styled from 'styled-components';
import { MenuItemBox, ViewImgBox } from '../../components/MenuItem/style';

export const ReocmmendResultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 4rem 5rem;
`;

export const RecommendResultMessageBox = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 1.5rem;

    span {
      font-size: 2.5rem;
      font-weight: 600;
      color: #fb4f00;
    }
  }

  h2 {
    color: #191919;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

export const ResultBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ResultBox = styled(MenuItemBox)`
  margin-right: 2rem;
`;
export const ResultViewImgBox = styled(ViewImgBox)``;

export const ResultButtonBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 12rem;
    height: 4rem;
    border-radius: 10px;
    font-size: 1.3rem;
    font-weight: 600;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-of-type(1) {
      color: #ffffff;
      background-color: #fb4f00;
    }

    &:nth-of-type(2) {
      color: #191919;
      background-color: #ffffff;
    }
  }
`;
