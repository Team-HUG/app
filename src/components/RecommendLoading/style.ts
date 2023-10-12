import styled, { keyframes } from 'styled-components';

const spin = keyframes`
   from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`;

export const RecommendLoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 12.5rem;
`;

export const LoadingMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 5rem;
    height: 6rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    color: #000000;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    letter-spacing: -1px;
    margin-top: 1.2rem;
  }
`;

export const Loading = styled.div`
  margin-top: 3rem;
  width: 5rem;
  height: 5rem;
  border: 7px solid #ffffff;
  border-right-color: #fb4f00;
  border-top-color: #fb4f00;
  border-radius: 100%;
  animation: ${spin} 1000ms infinite linear;
`;
