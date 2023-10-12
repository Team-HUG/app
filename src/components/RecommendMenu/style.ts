import styled from 'styled-components';

export const RecommendMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecommendMenuSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 8rem 2.3rem 8rem;
`;

export const RecommendQuestion = styled.div`
  font-size: 1.45rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1.4rem;
  letter-spacing: -2px;

  span {
    color: #fb4f00;
    font-weight: 600;
  }
`;

export const RecommendSelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const RecommendSelectBox = styled.div<{ current: string; clicked: string }>`
  color: ${({ current, clicked }) => (current === clicked ? '#ffffff' : '#000000')};
  background: ${({ current, clicked }) => (current === clicked ? '#fb4f00' : '#ffffff')};
  font-size: 1.3rem;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
  width: 9.5rem;
  height: 4rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  cursor: pointer;
`;

export const RecommendMenuButtonContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 14rem;
    height: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.6rem;
    border-radius: 10px;

    &:nth-of-type(1) {
      background-color: #ffffff;
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
      color: #191919;
      margin-right: 3rem;
    }

    &:nth-of-type(2) {
      background-color: #fb3f00;
      color: #ffffff;
    }
  }
`;
