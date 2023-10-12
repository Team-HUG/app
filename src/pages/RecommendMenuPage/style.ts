import styled from 'styled-components';

export const RecommendMenuPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecommendMenuSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 8rem 1rem 8rem;
`;

export const RecommendQuestion = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
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

export const RecommendButton = styled.button`
  width: 13.5rem;
  height: 4.5rem;
  background-color: #fb3f00;
  font-weight: 600;
  font-size: 1.7rem;
  border-radius: 10px;
  color: #ffffff;
`;
