import styled, { keyframes } from 'styled-components';

const leftToRight = keyframes`
  0% {
    transform: translate(100%, -50%);
  }

  100% {
    transform: translate(-50%, -50%);
  }
`;

export const BlackCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  h1 {
    &:nth-of-type(1) {
      position: fixed;
      top: 45%;
      left: 50%;
      width: 50rem;
      text-align: center;
      transform: translate(-50%, -50%);
      font-size: 2.6rem;
      font-weight: 600;
      color: #ffffff;
    }

    &:nth-of-type(2) {
      position: fixed;
      top: 54%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4.8rem;
      font-weight: 700;
      color: #ffffff;
    }
  }
`;

export const NotifyMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(251, 79, 0, 0.6);
  width: 100%;
  height: 15rem;
  animation: ${leftToRight} 1s;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 6rem;
    font-weight: 600;
    color: #ffffff;
  }
`;

export const BlackCoverSuccessMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    font-weight: 600;
    &:nth-of-type(1) {
      top: 35%;
      font-size: 6rem;
    }

    &:nth-of-type(2) {
      top: 50%;
      font-size: 2.4rem;
    }
  }
`;

export const SuccessButtonBox = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%);

  div {
    width: 12.5rem;
    height: 5rem;
    margin-right: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;

    &:nth-of-type(1) {
      background-color: #bababa;
      color: #ffffff;
    }

    &:nth-of-type(2) {
      background-color: #fb4f00;
      color: #ffffff;
    }
  }
`;

export const CardGameContainer = styled.div``;

export const CardGameTitleBox = styled.div`
  padding-top: 3.8rem;
  margin-left: 8rem;
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #000000;
    letter-spacing: -3px;
    span {
      font-size: 2.8rem;
      color: #fb4f00;
    }
  }

  span {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

export const CardsBox = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 32vw;

  img {
    width: 12rem;
    height: 15rem;
    border-radius: 10px;
    box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;
