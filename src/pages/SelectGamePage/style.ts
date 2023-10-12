import styled from 'styled-components';
import { ViewImgBox } from '../../components/MenuItem/style';

export const SelectGamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectGameTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  padding-top: 5rem;

  span {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fb4f00;
  }
`;

export const SelectGameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
  justify-content: space-around;
`;

export const SelectGameBox = styled(ViewImgBox)`
  width: 25rem;
  height: 30rem;
  border-radius: 10px;
  cursor: pointer;
`;
