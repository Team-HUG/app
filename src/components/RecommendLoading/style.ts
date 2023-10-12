import styled from 'styled-components';

export const RecommendLoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 12.5rem;
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
